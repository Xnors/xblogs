# XfMusic 算法解析

> 项目地址: https://github.com/xnors/xfmusic <br>
> 此文主要针对项目中的 core/typedefs.py 文件中的核心推荐算法部分进行解析

## 基于用户喜好的自调整权重型本地音乐推荐系统算法设计

### 1. _曾经的第一版设想:_ 用户自适应梯度下降更新法

> 注意: 此算法原理为 程序向用户展示若干音乐让用户选择喜欢的, 并非现在[XfMusic 项目](https;//github.com/xnors/xfmusic)所使用的推荐系统算法.

初始状态下，每个音乐（以下简称 Item）有一个初始权重（默认 100，权重以 W 简称）

向用户展示 N 个 Item，用户选择其中的一个收听，收听进度 X 记作 prog。

#### 例 1：N=10，用户选择 Item5 并听了 80%。

每首歌的预期收听 prog 为：

$$ Pred(n) = \frac{100W_n}{\sum_{i=1}^{N} W_i}  $$

即 Item 权重占总权重之比乘 100。

利用单步梯度下降更新权重，为防止过度更新（梯度爆炸），此处默认用 L1 损失函数：

$$ lossFunc(n) = |\text{prog(n)} - \text{Pred(n)}| $$

这里对性能不敏感，故更新方向取绝对值内的符号。

$$ dW(n) = \eta \cdot lossFunc(n) \cdot \frac{ lossFunc(n)} {prog(n) - Pred(n)} $$

$$ dW(n) = \frac{[prog(n)-Pred(n)]^2}{prog(n)-Pred(n)} \cdot \eta $$
$$ = (\text{prog(n)} - \text{Pred(n)}) \cdot \eta $$

#### 结合例子：

- $\eta = 0.5$
- $\text{Pred(n)}$ 都等于 10（因为是初始状态）

**观察的：**

$$ dW(5) = \frac{\eta (80 - 10)^2}{80 - 10} = 70 \times 0.5 = 35 $$

$$ W_5' = 100 + dW(5) = 135 $$

**而其它的：**

$$ dW(\text{others}) = \frac{\eta (0 - 10)^2}{0 - 10} = -5 $$

$$ W\_{\text{others}} = 100 - 5 = 95 $$

效果符合预期，因为多首歌中用户可能喜欢几首，用户选了最喜欢的那首，证明他（她）是真的喜欢它，而未选的歌权重降低的也很少，下次仍有机会抽中它们。

#### 例 2：N=4， $W_1=10, W_2=50, W_3=200, W_4=1000$

用户选择 Item1，听了 100% $\eta=0.5$

易得： $\text{Pred(C1)}=0.79, \text{Pred(C2)}=3.97, \text{Pred(C3)}=15.87, \text{Pred(C4)}=79.37$

$$ dW(C1) = 49.61, dW(C2) = -1.99 $$

$$ dW(C3) = -7.94, dW(C4) = 500 $$

$$ W_1' = 59.61, W_2' = 48.01, W_3' = 192.06, W_4' = 500 $$

效果较符合预期，因为用户可能会听腻一首歌

> 注: 保留 2 位小数，且不写约等号，后同

---

一但一次不听它，它的权重就会大幅下降，而用户可能会爱上一首之前不喜欢的歌，所以小权重歌曲权重上升更快，但小权重歌曲上升速度感觉上应与权重量成反比，但实际上 **W = 1** 与 **W = 0.0001** 的 **dW** 值几乎一样，后者更新速度应远大于前者才对，但又不能过大，这就是一个值得思考的问题了，但其实现在的算法也能用

---

6 月 19 日，我突发奇想，设计了一个缩放函数：

$$ f(x, \alpha) = \log\_\alpha (x^-1 + \alpha) $$

故

$$ dW(n) = (\text{prog(n)} - \text{Pred(n)}) \cdot \eta \cdot f(\text{Pred(n)}, \alpha) $$

但此方法仅适用于用户自选情况，那自动推荐呢？

### 2. 自适应梯度下降推荐权重更新法

问题的重点是 **\text{Pred(n)}** 的计算方法，我突发奇想：

$$ avgW = \frac{N}{\sum\_{j=1}^{N} W_j} $$

$$ Pred(n) = \frac{100W_n}{\text{avgW} + W_n} $$

$$ \text{difference} = \text{prog(n)} - \text{Pred(n)} $$

$$ dW(n) = \text{difference} \cdot \eta \cdot f(\text{Pred(n)}, \alpha) $$

---

#### 例 1：3 曲 Item，初始权重为 100， $\eta=0.5, \alpha=e$

Item1: 100 || Item2: 100 || Item3: 100

1. 随机到 Item2，听 95%，prog(2)=95，

$$ \text{Pred(C2)} = \frac{100}{100 + 100 + 100} = 50 $$

$$ dW(C2) = 22.7, W\_{\text{Item2}} = 122.7 $$

2. 随机到 Item3，听 100%，prog(3)=100

$$ \text{Pred(C3)} = 48, -dW(C3) = 26.2, W\_{\text{Item3}} = 126.2 $$

#### 例 2：3 曲 Item， $\eta=0.5, \alpha=e$

Item1: 1, Item2: 1000, Item3: 100

1. 随机到 Item2，听 80%

$$ \text{Pred(C2)} = 73.2, dW(C2) = 3.4, W\_{\text{Item2}} = 1003.4 $$

较大 W 长时间听合预期，更新慢 √

2. 随机到 Item1，听 100%

$$ \text{Pred(C1)} = 2.7 \times 10^3, dW(C1) = 295.8, W\_{\text{Item1}} = 2968 $$

较小 W 长时间听不合预期，更新很快，缩放函数起作用！

---

### 3. 对于算法的最终修正，为防止权重值为负数, 设置最小值为 0.01

$$ W = \max(0.01, W + dW(n)) $$

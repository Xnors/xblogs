import axios from "axios";

const serverApiUrl = "https://xnors.pythonanywhere.com/get_visit_count";

export const getVisitCount = async () => {
    console.log("Getting visit count from server...");
    try {
        const response = await axios.get(serverApiUrl);
        const count = response.data;
        const timestamp = Date.now();

        // 保存到 localStorage
        localStorage.setItem("visitCount", count);
        localStorage.setItem("timestamp", timestamp);

        return count;
    } catch (error) {
        console.error("Error fetching visit count:", error);
        return null;
    }
};

export const loadFromCache = () => {
    const cachedCount = localStorage.getItem("visitCount");
    const cachedTimestamp = localStorage.getItem("timestamp");

    if (cachedCount && cachedTimestamp) {
        const currentTime = Date.now();
        const timeDiff = currentTime - Number(cachedTimestamp);

        // 如果时间差小于一分钟（60000毫秒），使用缓存数据
        if (timeDiff < 60000) {
            console.log("Using cached visit count");
            return cachedCount;
        }
    }

    return null;
};

export const initializeVisitCount = async () => {
        // 尝试从缓存加载
        const cachedCount = loadFromCache();
        if (cachedCount) {
            return cachedCount;
        } else {
            // 如果缓存不可用，从服务器获取
            const count = await getVisitCount();
            if (count !== null) {
                return count;
            }
        }
    };

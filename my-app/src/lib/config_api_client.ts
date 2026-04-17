export const API_CONFIG_CLIENT = {
    //   BASE_URL: import.meta.env.VITE_API_BASE_URL || "https://react-web-nny1.onrender.com/api",
    BASE_URL: import.meta.env.DEV
        ? "" // local dùng Vite proxy, để rỗng
        : import.meta.env.VITE_API_BASE_URL?.replace('/api', '') || "https://react-web-nny1.onrender.com",
    ENDPOINTS: {
        HOME: "/home/getListHome",
    },
};
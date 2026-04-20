// import axios from 'axios';
// const API_URL = 'https://react-web-backend.onrender.com/api';
// const API = axios.create({
//   baseURL: API_URL,
//   timeout: 10000,
//   headers: { 'Content-Type': 'application/json' },
// });

// // ✅ Request — chỉ giữ token thôi, log đã có axios-debug-log lo
// API.interceptors.request.use(
//   (config) => {
//     const token = 'your_token_here';
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // ✅ Response — chỉ giữ xử lý lỗi
// API.interceptors.response.use(
//   (response) => {
   
//       console.log(`\n✅ [${response.status}] ${response.config.url}`);
//       console.log(JSON.stringify(response.data, null, 2)); 
    
//     return response;
//   },
//   (error) => {
//     if (error.response?.status === 401) console.log('Hết phiên đăng nhập!');
//     if (error.response?.status === 500) console.log('Lỗi server!');
//      console.log(`❌ [${error.response?.status}] ${error.config?.url}`);
//     return Promise.reject(error);
//   }
// );
// // ============================================
// // GENERIC METHODS
// // ============================================

// export const get = async <T>(url: string, params?: object): Promise<T> => {
//   const res = await API.get<T>(url, { params });
//   return res.data;
// };

// export const post = async <T>(url: string, data?: object): Promise<T> => {
//   const res = await API.post<T>(url, data);
//   return res.data;
// };

// export const put = async <T>(url: string, data?: object): Promise<T> => {
//   const res = await API.put<T>(url, data);
//   return res.data;
// };

// export const patch = async <T>(url: string, data?: object): Promise<T> => {
//   const res = await API.patch<T>(url, data);
//   return res.data;
// };

// export const remove = async <T>(url: string): Promise<T> => {
//   const res = await API.delete<T>(url);
//   return res.data;
// };

// export default API;
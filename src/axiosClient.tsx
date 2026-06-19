import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://localhost:7044/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

//  Tự động gắn token
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);
    if (token&& token.split(".").length===3) {
      config.headers.Authorization = `Bearer ${token}`;
    }else{
      delete config.headers.Authorization;
    }

    return config;
  },
  (error) => Promise.reject(error)
);


axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Token hết hạn
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
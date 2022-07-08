import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
    Authorization: "Bearer " + localStorage.getItem("auth"),
  },
});

export default axiosInstance;

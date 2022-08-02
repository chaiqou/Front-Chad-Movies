import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api-chad-movies.nikoloz.redberryinternship.ge/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
    Authorization: "Bearer " + localStorage.getItem("auth"),
  },
});

export default axiosInstance;

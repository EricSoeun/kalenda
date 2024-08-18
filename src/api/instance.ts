import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://cal-v2.vercel.app/api/v1",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

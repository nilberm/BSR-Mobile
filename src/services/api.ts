import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.1.20:8000/",
  adapter: axios.defaults.adapter,
});

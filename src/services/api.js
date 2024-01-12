import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-back-ugh6.onrender.com",
});

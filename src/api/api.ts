import axios from "axios";

const baseUrl = "https://api.coingecko.com/api/v3";

export const api = axios.create({ baseURL: `${baseUrl}` });

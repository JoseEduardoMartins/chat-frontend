import axios from "axios";
import { parseCookies } from "nookies";

const { "chat.token": token } = parseCookies();

export const http = axios.create({
  baseURL: "http://localhost:3000",
});

if (token) {
  http.defaults.headers.token = token;
}

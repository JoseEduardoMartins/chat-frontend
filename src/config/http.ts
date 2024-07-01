import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";

const { "chat.token": token } = parseCookies();

export const http = axios.create({
  baseURL: "http://localhost:3000",
});

if (token) {
  http.defaults.headers.token = token;
}

type MyErrorResponse = {
  error: string;
  message: Array<string>;
  statusCode: number;
};

export type HttpError = AxiosError<MyErrorResponse>;

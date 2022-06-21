import axios from "axios";

export const Client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

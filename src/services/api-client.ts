import axios, { AxiosRequestConfig } from "axios";

interface fetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'ba0e23ad660a4b85a64e479662fa1fb7'
  }
})

class APIClient<T>{
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<fetchResponse<T>>(this.endpoint, config)
      .then(res => res.data)
  }
}

export default APIClient;
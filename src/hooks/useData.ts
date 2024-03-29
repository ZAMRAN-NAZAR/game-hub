import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";


interface fetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, dips?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<fetchResponse<T>>(endpoint, {...requestConfig})
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false)
      });

  }, dips ? [...dips] : []);

  return { data, error, isLoading};
}

export default useData;
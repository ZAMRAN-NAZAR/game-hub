import { useQuery } from "@tanstack/react-query";
import Platform from "../entities/Plaform";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')


const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll
})


export default usePlatforms;
import { useQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import APIClient from "../services/api-client";
import { GameQuery } from "../store";

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) => useQuery({
  queryKey: ['games', gameQuery],
  queryFn: () => 
    apiClient.getAll(
      {
        params: { 
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText
        }
      }
    )
})

export default useGames;
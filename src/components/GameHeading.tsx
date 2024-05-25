import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";
import useGame from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

const GameHeading = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const selectedGenre = useGame(gameQuery.genreId);
  const selectedPlatform = usePlatform(gameQuery.platformId);

  const heading = `${selectedPlatform?.name || ""} 
  ${selectedGenre?.name || ""} Games`;

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;

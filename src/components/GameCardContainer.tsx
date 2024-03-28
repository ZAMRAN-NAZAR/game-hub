import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width={{
        sm: "280px",
        md: "370px",
        lg: "310px",
        xl: "280px",
      }}
      borderRadius="10px"
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;

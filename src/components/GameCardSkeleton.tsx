import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card
      width={{
        sm: "280px",
        md: "370px",
        lg: "310px",
        xl: "280px",
      }}
      borderRadius="10px"
      overflow="hidden"
    >
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;

import { Badge, Stack } from "@chakra-ui/react";

const SSBadge = () => {
  return (
    <Stack direction="row">
      <Badge variant="outline" colorScheme="green">
        PRODUCE 48
      </Badge>
      <Badge variant="solid" colorScheme="green">
        IZ*ONE
      </Badge>
      <Badge variant="subtle" colorScheme="green">
        IVE
      </Badge>
    </Stack>
  );
};

export default SSBadge;

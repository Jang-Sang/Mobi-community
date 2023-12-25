import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import sign from "../imgs/안유진 싸인.jpg";
import { css } from "@emotion/react";

const SSCard = () => {
  return (
    <Card
      css={css`
        margin-top: 2px;
        border-radius: 0;
      `}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={sign}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">좌우명 | 내가 짱이다. |</Heading>

          <Text py="2">
            본인이 생각하는 자신의 성격은 외향적인 내향인이라고 한다. 많은
            사람들이 본인을 E(외향형)이라 추측하지만, 검사 시 근소하게
            I(내향형)이 더 높게 나온다고 한다.
          </Text>
        </CardBody>

        <CardFooter>
          <Button
            variant="solid"
            css={css`
              margin-right: 15px;
              background-color: #ffb6c1;
              color: white;
              &:hover {
                background-color: #b9062f;
              }
            `}
          >
            ESTP
          </Button>
          <Button
            variant="solid"
            colorScheme="blue"
            css={css`
              background-color: #ffb6c1;
              color: white;
              &:hover {
                background-color: #b9062f;
              }
            `}
          >
            ISTP
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
export default SSCard;

import { Image } from "@chakra-ui/react";

const RoundImage = ({ src }) => {
  return <Image width="100%" src={src} alt={src} />;
};

export default RoundImage;

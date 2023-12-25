import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import RoundImage from "./img";

const SSModal = ({ name, src }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        css={css`
          background-color: white;
          border: 1px solid #ffb6c1;
          color: #b9062f;
          width: 20%;

          &:hover {
            background-color: #ffb6c1;
            color: white;
          }
        `}
      >
        {name}
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RoundImage src={src} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SSModal;

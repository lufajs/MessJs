import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

const FAQ = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {(children = <span onClick={onOpen}>{children}</span>)}
      <Modal size="6xl" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize="30px"
            fontFamily="Work sans"
            display="flex"
            justifyContent="center"
            color="blue"
          >
            MessJs
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign="center">
            <Text
              fontSize={{ base: "24px", md: "30px" }}
              fontFamily="Work sans"
            >
              adsssssssssssssssssssss dsadsdadsasdasddasasdasaddsasd
              dsaasdadsadsadsdsadsdadsasdasddasasdasaddsasd
              dsadsdadsasdasddasasdasaddsasd dsadsdadsasdasddasasdasaddsasd
              dsadsdadsasdasddasasdasaddsasd dsadsdadsasdasddasasdasaddsasd
              dsadsdadsasdasddasasdasaddsasd dsadsdadsasdasddasasdasaddsasd
              dsadsdadsasdasddasasdasaddsasd dsadsdadsasdasddasasdasaddsasd
              dsadsdadsasdasddasasdasaddsasd dsadsdadsasdasddasasdasaddsasd
              dsadsdadsasdasddasasdasaddsasd dsadsdadsasdasddasasdasaddsasd
              dsadsdadsasdasddasasdasaddsasd dsadsdadsasdasddasasdasaddsasd
            </Text>
          </ModalBody>
          <ModalFooter display="flex" justifyContent="space-evenly">
            <Text fontSize="30px">
              <MdEmail color="#005eff" />
            </Text>
            <Text fontSize="30px">
              <AiFillPhone color="#005eff" />
            </Text>
            <Text fontSize="30px">
              <FaGithub color="#005eff" />
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FAQ;

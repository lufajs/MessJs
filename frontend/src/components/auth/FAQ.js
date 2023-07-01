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
  Box,
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
              fontSize={{ base: "21px", md: "24px" }}
              fontFamily="Work sans"
            >
              Messjs is a real-time messaging app. Backend was fully done by
              myself, it is my first API so for frontend side i used chakra ui
              to make things easier. It is not perfect such as bad responsivity
              or esthetic things, but i did not focus on that. App database is
              running on mongodb. To create web tokens i used jsonwebtoken.
              Passwords are hashed by bcryptjs. Lastly for real-time messaging i
              used socket.io. App is ready to be deployed but i decided not to
              because of the free hostings delays socket io does not work
              perfectly and real-time messages are breaking. On the local
              network everything works just fine.
            </Text>
          </ModalBody>
          <ModalFooter display="flex" justifyContent="space-evenly">
            <Box fontSize="30px" display="flex" alignItems="center">
              <MdEmail color="#005eff" />
              <Text marginLeft="3px" fontSize="22px">
                faronludwik@gmail.com
              </Text>
            </Box>
            <Box fontSize="30px" display="flex" alignItems="center">
              <AiFillPhone color="#005eff" />
              <Text marginLeft="3px" fontSize="22px">
                530 023 820
              </Text>
            </Box>
            <Text fontSize="30px" display="flex" alignItems="center">
              <FaGithub color="#005eff" />
              <a
                style={{ fontSize: "22px", marginLeft: "3px", color: "blue" }}
                href="https://github.com/lufajs?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ludwik
              </a>
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FAQ;

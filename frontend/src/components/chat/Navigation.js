import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Input,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { ChatState } from "../../Context/Provider";
import axios from "axios";
import UserProfile from "../UserProfile";
import Profile from "./Profile";
import SearchLoading from "./SearchLoading";

const Navigation = () => {
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  const { setSelectedChat, user, chats, setChats } = ChatState();

  const history = useHistory();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const logout = () => {
    localStorage.removeItem("userData");
    history.push("/");
  };

  const search = async () => {
    if (!searchUser) {
      return;
    }

    try {
      setLoading(true);

      console.log(user);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(`/auth?search=${searchUser}`, config);

      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error Occured",
        description: "Failed to load the search results",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-left",
      });
    }
  };

  const accessChat = async (userId) => {
    try {
      setLoadingChat(true);

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.post(`/chat`, { userId }, config);

      const existingChat = chats.find((c) => c._id === data._id);
      if (!existingChat) {
        setChats([data, ...chats]);
      }
      setSelectedChat(data);
      setLoadingChat(false);
      onClose();
    } catch (error) {
      toast({
        title: "Error fetching the chat",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
      >
        <Button variant="solid" colorScheme="blue" onClick={onOpen}>
          <Text display={{ base: "none", md: "flex" }} px="4">
            Search User
          </Text>
        </Button>
        <div>
          <Menu>
            <MenuButton as={Button} variant="none">
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.pic}
              />
            </MenuButton>
            <MenuList>
              <Profile user={user}>
                <MenuItem>My Profile</MenuItem>
              </Profile>
              <MenuDivider />
              <MenuItem onClick={logout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search User</DrawerHeader>
          <DrawerBody>
            <Box display="flex" pb={2}>
              <Input
                placeholder="Search by name or email"
                mr={2}
                value={searchUser}
                onChange={(e) => setSearchUser(e.target.value)}
              />
              <Button onClick={search}>Go</Button>
            </Box>
            {loading ? (
              <SearchLoading />
            ) : (
              searchResult?.map((user) => (
                <UserProfile
                  key={user._id}
                  user={user}
                  handleFunction={() => accessChat(user._id)}
                />
              ))
            )}
            {loadingChat && <Spinner ml="auto" display="flex" />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navigation;

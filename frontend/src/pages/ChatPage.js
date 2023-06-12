import { Box } from "@chakra-ui/react";
import React from "react";
import Navigation from "../components/chat/Navigation";
import Chats from "../components/chat/Chats";
import ChatBox from "../components/chat/ChatBox";
import { ChatState } from "../Context/Provider";
import { useState } from "react";

const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      {user && <Navigation />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <Chats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;

import React, { useEffect } from "react";
import {
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from "@chakra-ui/react";
import Signup from "../components/auth/signup";
import Login from "../components/auth/login";
import { useHistory } from "react-router-dom";
import FAQ from "../components/auth/FAQ";

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));

    if (user) history.push("/chat");
  }, [history]);

  return (
    <div className="boxContainer">
      <div className="box1">
        <Box
          p={4}
          bg={"white"}
          w="100%"
          borderRadius="lg"
          borderWidth="1px"
          m="80px 0"
        >
          <Tabs variant="solid-rounded" colorScheme="blue">
            <TabList mb="1em">
              <Tab width="20%">Login</Tab>
              <Tab width="20%">Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </div>
      <Box
        className="box2"
        display="flex"
        justifyContent="center"
        p={3}
        w="100%"
        m="40px 0"
        textAlign="center"
      >
        <Text
          fontSize="30px"
          fontFamily="Work sans"
          color="blue"
          className="title"
        >
          MessJs
        </Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimervived not only
        </Text>
        <FAQ overflow="wrap" className="description">
          <Button mt="15px" colorScheme="blue">
            Read more
          </Button>
        </FAQ>
      </Box>
    </div>
  );
};

export default HomePage;

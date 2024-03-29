import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const RouteGuard = () => {
  return (
    <Flex
      bg="whitesmoke"
      height="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Outlet />
    </Flex>
  );
};

export default RouteGuard;

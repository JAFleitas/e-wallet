import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

const SignupButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      display={{ base: "none", md: "inline-flex" }}
      fontSize={"sm"}
      fontWeight={600}
      color={"white"}
      bg={"blue.400"}
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
      _hover={{
        bg: "blue.300",
      }}
    >
      Sign Up
    </Button>
  );
};

export default SignupButton;

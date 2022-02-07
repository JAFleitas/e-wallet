import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      as={"a"}
      fontSize={"sm"}
      fontWeight={400}
      variant={"link"}
      onClick={() => loginWithRedirect()}
    >
      Sign In
    </Button>
  );
};

export default LoginButton;

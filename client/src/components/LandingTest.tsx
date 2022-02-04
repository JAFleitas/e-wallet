import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import AuthenticationButton from "./buttons/Authentication-button";

const LoginButton = () => {
  const { isLoading } = useAuth0();

  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const handleClick = () => {
    navigate("/homepage");
  };

  return (
    <div>
      <h1>Landing test</h1>
      <AuthenticationButton />
      <button onClick={() => handleClick()}>Go to Homepage</button>
    </div>
  );
};

export default LoginButton;
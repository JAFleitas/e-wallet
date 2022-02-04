import React from "react";

import LoginButton from "../buttons/Login";
import LogoutButton from "../buttons/Logout";

import { useAuth0 } from "@auth0/auth0-react";
import SignupButton from "./Signup";

const AuthenticationButton: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <div><LoginButton /> <SignupButton /></div>;
};

export default AuthenticationButton;

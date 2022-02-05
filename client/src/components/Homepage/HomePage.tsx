import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../buttons/Logout";

const HomePage: React.FC = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div>
      <h1>If you got here it's because you are authenticated</h1>
      <h2>This is a homepage test, CSS is awesome</h2>
      <Logout />
      <div>
        <img src={user!.picture} alt={user!.name} />
        <p>{user!.email}</p>
      </div>
      <p>User data: {JSON.stringify(user, null, 2)}</p>
    </div>
  );
};

export default HomePage;
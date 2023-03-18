import React from "react";
import useGithubUser from "./useGithubUser";

const HookGithubUser = ({ username }) => {
  const { user, isLoading } = useGithubUser(username);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return (
      <div>
        <img src={user.avatar_url} alt={user.login} width="50" />
        <h2>{user.login}</h2>
      </div>
    );
  }
};

export default HookGithubUser;

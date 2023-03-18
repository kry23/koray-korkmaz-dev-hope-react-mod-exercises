import React, { useEffect, useState } from "react";
import useGithubUser from "./useGithubUser";

const HookGithubUser = ({ username }) => {
  const { user, isLoading, isError, fetchUserData } = useGithubUser();

  useEffect(() => {
    fetchUserData(username);
  }, []);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {isError.message}</div>}
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width="50" />
          <h2>{user.login}</h2>
        </div>
      )}
    </div>
  );
};

export default HookGithubUser;

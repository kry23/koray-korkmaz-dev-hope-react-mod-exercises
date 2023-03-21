import React, { useEffect, useState } from "react";
import useGithubUser from "./useGithubUser";

const HookGithubUser = ({ username }) => {
  const { user, error, loading, onFetchuser } = useGithubUser(username);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
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

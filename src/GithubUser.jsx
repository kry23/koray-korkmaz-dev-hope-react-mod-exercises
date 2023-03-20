import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function GithubUser() {
  const [data, setData] = useState(null);
  const { username } = useParams();
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
      });
  }, [username]);
  return (
    <div>
      <div>{data && <h1>{data.login}</h1>}</div>
    </div>
  );
}

export default GithubUser;

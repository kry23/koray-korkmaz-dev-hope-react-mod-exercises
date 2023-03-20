import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function GithubUser({ username }) {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
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

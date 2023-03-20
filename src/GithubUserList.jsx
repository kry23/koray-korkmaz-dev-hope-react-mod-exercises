import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GithubUser from "./GithubUser";
import ShowGithubUser from "./ShowGithubUser";

function GithubUserList() {
  const [users, setUsers] = useState(["kry23", "KaramGuliyev"]);
  const [input, setInput] = useState("");
  const { userParam } = useParams();
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    console.log(`list of users ${users}`);
  }, [users]);
  const addUser = () => {
    setUsers(() => {
      return [...users, input];
    });
    setInput("");
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        value={input}
        className="p-2"
      />
      <button
        onClick={addUser}
        className="border-2 rounded-md border-green-500 p-2 ml-2 bg-white"
      >
        Send
      </button>

      {users.map((user) => {
        return (
          <Link to={user}>
            <ShowGithubUser user={user} />
          </Link>
        );
      })}
    </div>
  );
}

export default GithubUserList;
{
  /* <GithubUser key={user} username={user} />; */
}

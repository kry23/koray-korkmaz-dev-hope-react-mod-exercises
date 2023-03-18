import { useState, useEffect } from "react";

const useGithubUser = (username) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (username) {
      setIsLoading(true);
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching GitHub user:", error);
          setIsLoading(false);
        });
    }
  }, [username]);

  return { user, isLoading };
};

export default useGithubUser;

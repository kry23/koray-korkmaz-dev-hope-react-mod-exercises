// import { useState } from "react";

// const useGithubUser = () => {
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(null);
//   const fetchUserData = (username) => {
//     if (username) {
//       setIsLoading(true);
//       fetch(`https://api.github.com/users/${username}`)
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Error fetching GitHub user");
//           }
//           return response.json();
//         })
//         .then((json) => {
//           setUser(json);
//           setIsLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching GitHub user:", error);
//           setIsError(error);
//           setIsLoading(false);
//         });
//     }
//   };

//   return { user, isLoading, isError, fetchUserData };
// };

import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

const useGithubUser = (username) => {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  const fetchGithubUser = () => {
    mutate();
  };
  const refetch = async () => {
    await mutate(undefined, true);
  };
  if (!username) return error;

  return {
    user: data,
    error,
    loading: !data && !error,
    onFetchuser: fetchGithubUser,
    refetch,
  };
};

export default useGithubUser;

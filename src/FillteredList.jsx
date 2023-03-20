import React, { useMemo } from "react";

function FillteredList({ list }) {
  const filteredList = useMemo(() => {
    return list.filter((item) => item.age > 18);
  }, [list]);
  return (
    <ul>
      {filteredList.map((item) => {
        return (
          <li key={item.id}>
            {item.name}-{item.age}
          </li>
        );
      })}
    </ul>
  );
}

export default FillteredList;

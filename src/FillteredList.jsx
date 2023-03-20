import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

function FillteredList({ list }) {
  const { name } = useParams();
  const filteredList = useMemo(() => {
    return list.filter((item) => item.age > 18);
  }, [list]);
  return (
    <div>
      {name}
      <ul>
        {filteredList.map((item) => {
          return (
            <li key={item.id}>
              {item.name}-{item.age}
            </li>
          );
        })}
      </ul>
      <Link to="/">homepage</Link>
    </div>
  );
}

export default FillteredList;

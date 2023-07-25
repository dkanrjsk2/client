import { Link } from "react-router-dom";

const data = ["AAA", "BBB", "CCC", "DDD"];

function Friend() {
  return (
    <div>
      {data.map((id) => (
        <div key={id}>
          <Link to={`/${id}`}>
            <h3>{id}</h3>
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Friend;

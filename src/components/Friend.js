import { Link } from "react-router-dom";

const data = ["AAA", "BBB", "CCC", "DDD","AAA", "BBB", "CCC", "DDD","AAA", "BBB", "CCC", "DDD","AAA", "BBB", "CCC", "DDD",];

function Friend() {
  return (
    <div style={{ overflowY: "auto", height: "650px" }}>
      {data.map((id) => (
        <div key={id}>
          <Link to={`/${id}`}>
            <h3 style={{fontSize:15,color:'#333333'}}>{id}</h3>
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Friend;

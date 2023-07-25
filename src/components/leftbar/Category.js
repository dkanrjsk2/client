import { Link } from "react-router-dom";

const data = ["ENFJ", "ENFP", "INFJ", "INFP"];

function Category() {
  return (
    <div>
      {data.map((id) => (
        <div key={id}>
          <Link to={`/${id}`}>
            <h3>{id} 게시판</h3>
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Category;

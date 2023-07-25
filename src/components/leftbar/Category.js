import { Link } from "react-router-dom";

const data = ["ENFJ", "ENFP","ENTP","ENTJ","ESFJ", "ESFP","ESTP","ESTJ", "INFJ", "INFP","INTP","INTJ","ISFJ", "ISFP","ISTP","ISTJ",];

function Category() {
  return (
    <div style={{ overflowY: "auto", height: "550px" }}>
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

export default Category;

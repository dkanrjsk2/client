import { Link } from "react-router-dom";
import {HiUserGroup} from "react-icons/hi";
const data = ["ENFJ", "ENFP","ENTP","ENTJ","ESFJ", "ESFP","ESTP","ESTJ", "INFJ", "INFP","INTP","INTJ","ISFJ", "ISFP","ISTP","ISTJ",];

function Category() {
  return (
    <div style={{ overflowY: "auto", height: "550px" }}>
      {data.map((id) => (
        <div key={id}>
          <Link to={`/${id}`}>
            <h3 style={{paddingTop:'5px',height:'25px',textAlign: "left",marginLeft:'33px',marginRight:'33px',borderTop:'2px solid #777777', borderBottom:'2px solid #777777',fontSize:15,color:'#444444'}}>
              <HiUserGroup style={{color:'#555555',fontSize:15,paddingRight:'75px'}}/>
              {id}
            </h3>
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Category;

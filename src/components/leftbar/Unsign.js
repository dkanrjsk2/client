import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Unsign = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate(`/signin`);
  };
  const handleSignUp = () => {
    navigate(`/signup`);
  };
  const buttonStyle = {
    backgroundColor: "#bbbbbb",
    color: "white",
    fontSize: 15,
    padding: "5px 30px",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    margin:'5px'
  };
  return (
    <div style={{borderBottom: "2px solid #444444",
    height: "370px",
    textAlign: "center",}}>
      <Link to={`/`}>
        <h1 style={{
              borderWidth: 2,
              paddingBottom: "5px",
              fontSize: 24,
              paddingTop: "5px",
              marginRight: "150px",
              marginLeft: "20px",}}>Healing</h1>
        </Link>
        <div style={{backgroundColor:'#1188bb', width:'240px', height:'90px', borderRadius:70,marginLeft:'24px'}}>
          <h4 style={{paddingTop:'29px',fontSize:20, marginTop:'70px',color:'orange'}}>
            Welome to our World!!!
          </h4>
        </div>
      <div style={{paddingTop:'27px'}}>
        <button style={buttonStyle} onClick={handleSignIn}>로그인</button>
        <button style={buttonStyle} onClick={handleSignUp}>회원가입</button>
      </div>
    </div>
  );
};

export default Unsign;

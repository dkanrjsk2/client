import { Link } from "react-router-dom";
import profileImage from "../../images/image8.jpeg";
const Profile = () => {
  const handleSignOut = () => {
    sessionStorage.clear();
    window.location.href = `/`;
  };
  const buttonStyle = {
    backgroundColor: "#bbbbbb",
    color: "white",
    fontSize: 15,
    padding: "5px 30px",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
  };
  return (
    <header
      style={{
        borderBottom: "2px solid #444444",
        textAlign: "center",
        height: "370px",
      }}
    >
      <Link to={`/`}>
        <h3
          style={{
            borderWidth: 2,
            paddingBottom: "5px",
            border: "1px solid black",
            fontSize: 24,
            paddingTop: "5px",
            marginRight: "150px",
            marginLeft: "20px",
          }}
        >
          Healing
        </h3>
      </Link>
      <h1 style={{ marginTop: "40px", fontSize: 20, color: "#444444" }}>
        Welcome to {sessionStorage.getItem("mbti")} 게시판
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "150px",
        }}
      >
        <img
          src={profileImage} // 이미지 파일의 경로
          alt="Profile"
          style={{
            width: "150px", // 이미지 크기 조절
            height: "150px",
            borderRadius: "50%", // 원형으로 만들기 위한 속성
            objectFit: "cover", // 이미지가 원형으로 잘릴 경우를 대비하여 가리기 위한 속성
          }}
        />
      </div>
      <h1 style={{ fontSize: 20, color: "#444444" }}>{sessionStorage.getItem("username")}</h1>
      <button style={buttonStyle} onClick={handleSignOut}>signout</button>
    </header>
  );
};

export default Profile;

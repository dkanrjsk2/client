import backgroundImage from "../images/image5.jpeg"
const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        textAlign: "center",
        height: "300px",
        backgroundImage: `url(${backgroundImage})`, // 배경 이미지 추가
        backgroundSize: "cover", // 이미지를 컨테이너에 맞게 조절
        backgroundPosition: "center", // 이미지를 가운데 정렬
        color: "white", // 글자 색상 설정 (배경 이미지 위에 보여질 텍스트의 색상)
        fontSize: "24px", // 텍스트의 크기 설정
        display: "flex", // 텍스트를 세로 가운데 정렬
        alignItems: "center",
        justifyContent: "center",

      }}
    >
    </header>
  );
};

export default Header;

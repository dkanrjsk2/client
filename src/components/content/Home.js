import React from "react";
import HomeImage from "../../images/imgae9.png"

const Home = () => (
  <div style={{width:'810px', height:'530px', marginTop:'50px'}}>
    <h1 style={{marginBottom:'50px', marginLeft:'320px', color:'#119988'}}>
      {'<'}MBTI 게시판{'>'}
    </h1>
    <img src={HomeImage}
      alt="Profile"
      style={{
        width: "810px", // 이미지 크기 조절
        height: "400px",
        objectFit: "cover", // 이미지가 원형으로 잘릴 경우를 대비하여 가리기 위한 속성
      }}/>
  </div>
);
export default Home;

import React, { useState } from 'react';
import {useParams} from 'react-router-dom'
import profileImage from "../images/image8.jpeg";
import { RxArrowLeft } from 'react-icons/rx';
import { Link } from "react-router-dom";

const goBack = () => {
    window.history.back();
  };

function FriendProfile(props) {
    const { friendId } = useParams();
    const [isfriend, setIsfriend] = useState(false);
    
    return (
        <div style={{borderRadius:10,backgroundColor:'#dddddd',border:'2px solid #1188bb',height:'500px', paddingTop:'20px'}}>
            <div style={{width:'800px', height:'20px',display:'flex', flexDirection:'row', alignItems:'center'}}>
                <button style={{paddingTop:'7px',border:'none', backgroundColor:'#dddddd', color:'' ,fontSize:20, marginLeft:'60px'}} onClick={goBack}>
                    <RxArrowLeft style={{backgroundColor:'#dddddd'}}/>
                </button>
                <h4 style={{fontSize:15, color:'black'}}>
                    {friendId}
                </h4>
                <h4 style={{marginLeft:'540px',fontSize:15, color:'black', border:'2px solid black', borderRadius:5, width:'40px', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    {isfriend ? '해제' : '추가'}
                </h4>
            </div>
            <div style={{marginTop:'40px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <h1 style={{ fontSize: 30, color: "black" }}>{friendId}</h1>
            </div>
           <div
                style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "175px",
                width:"175px",
                borderRadius:'50%',
                border:'2px solid orange',
                marginLeft:'310px'
                }}
            >
            <img
            src={profileImage} // 이미지 파일의 경로
            alt="Profile"
            style={{
                width: "170px", // 이미지 크기 조절
                height: "170px",
                borderRadius: "50%", // 원형으로 만들기 위한 속성
                objectFit: "cover", // 이미지가 원형으로 잘릴 경우를 대비하여 가리기 위한 속성
            }}
            />
            </div>
            <div style={{marginLeft:'252px',marginTop:'25px',backgroundColor:'#bbbbbb', width:'300px',height:'30px', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <Link to={`/${friendId}`}>
                    <h4>
                        친구가 쓴 글 보러가기 
                    </h4>
                </Link>
            </div>
        </div>
    );
}

export default FriendProfile;
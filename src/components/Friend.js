import { Link } from "react-router-dom";
import profileImage from '../images/image1.jpeg'
import { HiUser } from "react-icons/hi";

const data = ["AAA", "BBB", "CCC", "DDD","AAA", "BBB", "CCC", "DDD","AAA", "BBB", "CCC", "DDD","AAA", "BBB", "CCC", "DDD",];

function Friend() {
  return (
    <div style={{ overflowY: "auto", height: "650px",}}>
      {data.map((id) => (
        <div key={id} style={{paddingTop:'2px',height:'40px',border:'2px solid #bbbbbb',marginLeft:'30px',textAlign:'left', marginBottom:'20px', marginRight:'30px',paddingLeft:'8px', borderRadius:10}}>
          <Link to={`/${id}`}>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
              <div style={{width:"27px", height:"27px", border:'2px solid #1188bb', borderRadius:10,display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img
                  src={profileImage} // 이미지 파일의 경로
                  alt="Profile"
                  style={{
                    width: "25px", // 이미지 크기 조절
                    height: "25px",
                    borderRadius: 10, // 원형으로 만들기 위한 속성
                    objectFit: "cover", // 이미지가 원형으로 잘릴 경우를 대비하여 가리기 위한 속성
                  }}
                />
              </div>
              
              <h3 style={{marginLeft:'15px',fontSize:12,color:'#444444'}}>{id}</h3>
              
              <HiUser style={{fontSize:20,paddingLeft:'115px', color:'#444444'}}/>
              
            </div>
            
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Friend;

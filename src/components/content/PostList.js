import { useParams, Link } from "react-router-dom";
import {RxDotFilled} from "react-icons/rx";
const data = ["인생은 아름다워", "Soul(filmed by Pixar)", "Eternal Sunshine", "Old Boy(Chanwook Park)","조제, 호랑이, 그리고 물고기들", "LaLa Land", "Monster(Junho Bong)", "Border Line","노인을 위한 나라는 없다", "시카리오: 암살자들의 도시", "펄프 픽션(쿠엔틴 타란티노)", "아이리쉬맨(마틴 스코세이지)","파벨만스(스티븐 스필버그)", "봄날은 간다(유지태, 이영애)", "Matrix(키아누 리브스)", "500 days of summer","Her", "Big Fish", "Terminal", "Forrest Gump", "GodFather", "Zurasic world", "극한직업", "기생충", "Moonlight", "NomadLand"];

//useEffect를 통해 categoryName을 query로 보내면
// 일치하는 것들의 record를 가져온다.

function PostList() {
  const { categoryName } = useParams();
  return (
    <div style={{flexDirection:'row', display:'flex',}}>
      <div style={{width:'370px', height:'650px', marginRight:'10px',}}>
            <h4 style={{borderRadius:5,marginLeft:'5px',border:'1px solid black', width:'125px', paddingLeft:'10px',height:'25px', display:'flex',flexDirection:'row', alignItems:'center',marginBottom:'27px'}}>
              {categoryName}의 이야기들
            </h4>
            
            <div style={{ overflowY: "auto", height: "610px"}}>
              {data.map((id) => (
                <div key={id}>
                  <Link to={`/${categoryName}/${id}`}>
                    <div style={{color:'#333333',fontSize:13, borderTop:'1px solid lightgray', borderBottom:'1px solid lightgray', width:'370px'}}>
                      <RxDotFilled style={{fontSize:9,paddingRight:'5px'}}/>{categoryName}: {id}
                    </div>
                  </Link>
                  <br />
                </div>
              ))}
            </div>
          </div>
          <div style={{width:'1px', height:'680px', backgroundColor:'black', marginRight:'20px'}}>
          </div>
          <div style={{width:'370px', height:'650px',}}>
            <h4 style={{borderRadius:5,marginLeft:'5px',border:'1px solid black', width:'125px', paddingLeft:'10px',height:'25px', display:'flex',flexDirection:'row', alignItems:'center',marginBottom:'27px'}}>
              모두의 이야기들
            </h4>
            
            <div style={{ overflowY: "auto", height: "610px"}}>
              {data.map((id) => (
                <div key={id}>
                  <Link to={`/${categoryName}/${id}`}>
                    <div style={{color:'#333333',fontSize:13, borderTop:'1px solid lightgray', borderBottom:'1px solid lightgray', width:'370px'}}>
                      <RxDotFilled style={{fontSize:9, paddingRight:'5px'}}/> {id}
                    </div>
                  </Link>
                  <br />
                </div>
              ))}
            </div>
          </div>
    </div>
    
  );
}

export default PostList;

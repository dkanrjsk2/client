import { useParams } from "react-router-dom";
import { RxArrowLeft } from "react-icons/rx";
const goBack = () => {
  window.history.back();
};

function Detail() {
  const { postId } = useParams();
  return (
    <div>
            <div style={{width:'800px', height:'20px',display:'flex', flexDirection:'row', alignItems:'center'}}>
                <button style={{border:'none', backgroundColor:'#fdfdfd', color:'' ,fontSize:20}} onClick={goBack}>
                    <RxArrowLeft/>
                </button>
                <h4 style={{marginLeft:'640px',fontSize:15, color:'#555555', border:'2px solid gray', borderRadius:5, width:'40px', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                  삭제
                </h4>
            </div>
                <div style={{marginLeft:'80px',marginTop:'30px',width:'640px', height:'40px',display:'flex', flexDirection:'row', alignItems:'center', border:'2px solid #1188bb', borderRadius:10,}}>
                    <div style={{width:'560px', height:'40px', marginLeft:'20px', display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <h4>
                            제목: {postId}
                        </h4>
                    </div>
                </div>
                <div style={{padding:'10px',marginLeft:'70px',marginTop:'30px',width:'660px', height:'520px',display:'flex', flexDirection:'row', border:'2px solid #bb8811',borderRadius:5}}>
                    동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세. 영원할 줄 알았던 사랑도 저물고, 해질무렵 바람도 몹시 불던 날 집에 돌아오는 길 버스 창가에 앉아, 사월이 지나면 우리 아무일도 없던 것처럼, 보여줄게 완전히 달라진 날 보여줄게 훨씬 더 예뻐진 날
                    . 두근 거렸지 누군가 나의 뒤를 쫓고 있었고 검은 절벽끝 더이상 발디딜 곳 하나 없었지 자꾸 목이 메어...
                </div>
            </div>
  );
}

export default Detail;

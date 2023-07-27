import React, { useState } from 'react';
import { RxArrowLeft } from "react-icons/rx";

function Plus({navigation}) {
    const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const goBack = () => {
    window.history.back();
  };

    return (
        <div>
            <div style={{width:'800px', height:'20px',display:'flex', flexDirection:'row', alignItems:'center'}}>
                <button style={{border:'none', backgroundColor:'#fdfdfd', color:'' ,fontSize:20}} onClick={goBack}>
                    <RxArrowLeft/>
                </button>
                <h4 style={{fontSize:15, color:'#555555'}}>
                    새로운 글 작성하기
                </h4>
                <h4 style={{marginLeft:'590px',fontSize:15, color:'#555555', border:'2px solid gray', borderRadius:5, width:'40px', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    추가
                </h4>
            </div>
                <div style={{marginLeft:'80px',marginTop:'50px',width:'640px', height:'40px',display:'flex', flexDirection:'row', alignItems:'center', border:'2px solid #1188bb', borderRadius:10,}}>
                    <div style={{width:'60px', height:'40px', marginLeft:'10px', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <h4>
                            제목:
                        </h4>
                    </div>
                    <input
                        type="title"
                        placeholder="title"
                        value={title}
                        style={{
                        color: "black",
                        height:'20px',
                        fontSize: 15,
                        width:'600px',
                        border:'none',
                        outlineColor:'#fdfdfd'
                        }}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div style={{marginLeft:'70px',marginTop:'30px',width:'660px', height:'520px',display:'flex', flexDirection:'row', alignItems:'center', border:'2px solid #bb8811',borderRadius:5}}>
                <textarea
                    placeholder="내용을 입력하세요..."
                    value={content}
                    style={{
                        marginLeft:'5px',
                        marginRight:'5px',
                        color: "black",
                        fontSize: 15,
                        width: '650px',
                        height: '500px',
                        border: 'none',
                        outlineColor: '#fdfdfd'
                    }}
                    onChange={(e) => setContent(e.target.value)}
                    />
                </div>
            </div>
        
    );
}

export default Plus;
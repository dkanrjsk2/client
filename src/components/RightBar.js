import { useEffect, useState } from "react";
import Friend from "./Friend";
import { AiOutlineSearch} from "react-icons/ai";

const friendInfo=[]

const RightBar = () => {
  const [friend, setFriend] = useState('');
  const [myArray, setMyArray] = useState([]);
  const handleAddItem = () => {
    setMyArray([]);
    friendInfo.map((data, index) => {
      if (friend !== '' && friend === data.username) {
        const matchedArray = friendInfo.filter(
          data => data.username === friend,
        );
        setMyArray(matchedArray);
        setFriend('');
      }
    });
  };
  useEffect(() => {
    console.log('myArray changed:', myArray);
  }, [myArray]);
    return (
      <aside
        style={{
          borderLeft: "2px solid #444444",
          width: "25%",
          textAlign: "center",
          height: "700px"
        }}
      >
        <h1 style={{backgroundColor:'#ddcccc',paddingTop:'1.5px',height:'23px',borderRadius:5,marginLeft:'20px',marginRight:'20px',border:'2px solid #552222',fontSize:17, color:'#552222'}}>이웃 목록</h1>
        <div style={{marginLeft:'20px',marginRight:'20px', display:'flex', flexDirection:'row', alignItems:'center', marginTop:'10px', marginBottom:'10px'}}>
          <div><AiOutlineSearch style={{fontSize:12,}}/></div>
          <div>
            <input
            placeholder="Search..."
            placeholderTextColor="#555555"
            style={{
              color: "black",
                height: '20px',
                fontSize: 15,
                width: '196px',
                border: 'none',
                outlineColor: '#fdfdfd',
                backgroundColor:'lightgray'
            }}
            onChange={(e) => setFriend(e.target.value)}
            value={friend}/>
          </div>
          <div>
            <button onClick={handleAddItem} style={{paddingBottom:'2px',fontWeight:'bold',color:'black',backgroundColor:'#fdfdfd',cursor: "pointer", border:'none'}}>검색</button>
          </div>
        </div>
        <Friend />
      </aside>
    );
  };
  
  export default RightBar;
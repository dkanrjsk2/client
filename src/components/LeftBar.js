import Category from "./leftbar/Category";
import Profile from "./leftbar/Profile";

const LeftBar = () => {
  return (
    <aside
      style={{
        borderRight: "2px solid #444444",
        width: "20%",
        textAlign: "center",
        height: "1000px"
      }}
    >
      <Profile />
      <h1 style={{paddingTop:'1.5px',height:'23px',borderRadius:5,marginLeft:'20px',marginRight:'20px',border:'2px solid #999999',fontSize:17, color:'#777777'}}>다른 게시판</h1>
      <Category />
    </aside>
  );
};

export default LeftBar;

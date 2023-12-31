import Category from "./leftbar/Category";
import Profile from "./leftbar/Profile";
import Unsign from "./leftbar/Unsign";

const LeftBar = () => {
  const isSignedIn = sessionStorage.length > 0;
  return (
    <aside
      style={{
        borderRight: "2px solid #444444",
        width: "20%",
        textAlign: "center",
        height: "1000px"
      }}
    >
      {isSignedIn ? <Profile /> : <Unsign />}
      <h1 style={{backgroundColor:'#ccdddd',paddingTop:'1.5px',height:'23px',borderRadius:5,marginLeft:'20px',marginRight:'20px',border:'2px solid #552222',fontSize:17, color:'#552222'}}>다른 게시판</h1>
      <Category />
    </aside>
  );
};

export default LeftBar;

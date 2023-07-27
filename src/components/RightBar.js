import Friend from "./Friend"; 

const RightBar = () => {
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
        <Friend />
      </aside>
    );
  };
  
  export default RightBar;
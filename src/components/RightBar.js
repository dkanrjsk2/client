import Friend from "./Friend"; 

const RightBar = () => {
    return (
      <aside
        style={{
          border: "1px solid black",
          width: "25%",
          textAlign: "center",
          height: "800px"
        }}
      >
        <h1>친구 목록</h1>
        <Friend />
      </aside>
    );
  };
  
  export default RightBar;
import Category from "./leftbar/Category";
import Profile from "./leftbar/Profile";

const LeftBar = () => {
  return (
    <aside
      style={{
        border: "1px solid black",
        width: "20%",
        textAlign: "center",
        height: "1000px"
      }}
    >
      <Profile />
      <h1>게시판 목록</h1>
      <Category />
    </aside>
  );
};

export default LeftBar;

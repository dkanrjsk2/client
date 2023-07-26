import Header from "./Header";
// import Footer from "./Footer";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import Main from "./Main";

const Layout = (props) => {
  return (
    <div style={{ display: "flex",}}>
      <LeftBar />
      <div style={{ width: "80%" }}>
        <Header />
        <div style={{ display: "flex" }}>
          <Main style={{ textAlign: "center" }}>
            {props.children}
          </Main>
          <RightBar />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};
export default Layout;

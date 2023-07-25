import Header from "./Header";
import Footer from "./Footer";
import LeftBar from "./LeftBar";
import Main from "./Main";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          maxWidth: "1000px",
          border: "1px solid black",
          minHeight: "1000px",
        }}
      >
        <LeftBar />
        <Main name="갓대희" color="blue">
          {props.children}
        </Main>
      </div>
      <Footer />
    </div>
  );
};
export default Layout;

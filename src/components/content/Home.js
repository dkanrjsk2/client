import { Link } from "react-router-dom";

const Home = () => (
  <h2>
    Home
    <Link to="/about">
      <h2>go About</h2>
    </Link>
  </h2>
);
export default Home;

import { useNavigate } from "react-router-dom";

const Unsign = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate(`/signin`);
  };
  const handleSignUp = () => {
    navigate(`/signup`);
  };

  return (
    <div>
      <h1>Unsign</h1>
      <button onClick={handleSignIn}>signin</button>
      <button onClick={handleSignUp}>signup</button>
    </div>
  );
};

export default Unsign;

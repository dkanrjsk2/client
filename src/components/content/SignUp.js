import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mbti, setMbti] = useState("");
  const [username, setUsername] = useState("");

  const handleSignUp = async () => {
    try {
      console.log("회원가입", email, password, mbti, username);
      const response = await fetch("/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, mbti, username }),
      });
      const data = await response.json();
      if (response.status === 200) {
        // 회원가입 성공
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("mbti", mbti);
        sessionStorage.setItem("username", username);
        alert(data.message);
        navigate(`/${mbti}`);
        // history.push(`/${mbti}`);
        // window.location.href = `/${mbti}`;
      } else {
        // 회원가입 실패
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        // display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <h1>회원가입</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <input
        type="mbti"
        placeholder="MBTI"
        value={mbti}
        onChange={(e) => setMbti(e.target.value)}
      />
      <br />
      <input
        type="username"
        placeholder="Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;

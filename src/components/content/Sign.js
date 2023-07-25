import React, { useState } from "react";

const Sign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      console.log("회원가입", email, password);
      const response = await fetch("/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.status === 200) {
        // 회원가입 성공
        sessionStorage.setItem("email", email);
        alert(data.message);
      } else {
        // 회원가입 실패
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignIn = async () => {
    try {
      console.log("로그인", email, password);
      const response = await fetch("/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.status === 200) {
        // 로그인 성공
        sessionStorage.setItem("email", email);
        alert(data.message);
      } else {
        // 로그인 실패
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{
        // display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}>
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
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default Sign;

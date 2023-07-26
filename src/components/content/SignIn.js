import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        const { email, mbti, username } = data.user;
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("mbti", mbti);
        sessionStorage.setItem("username", username);
        alert(data.message);
        window.location.href = `/${mbti}`;
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
      <h1>로그인</h1>
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
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;

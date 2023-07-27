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
        width:"400px",
        height: "35vh",
        display:'flex',
        marginTop:'50px',
        flexDirection:'column',
        border:'3px solid #1188bb',
        borderRadius:10,
        backgroundColor:'white',  
        paddingBottom:'50px'
      }}>
      <h1 style={{color:'#1188bb'}}>로그인</h1>
      <input
        type="email"
        placeholder="e-mail"
        value={email}
        style={{backgroundColor: "#bbbbbb",
        color: "black",
        fontSize: 15,
        padding: "5px 30px",
        borderRadius: 10,
        border: "none",
        margin:'5px',
        marginTop:'15px',
        marginBottom:'15px'}}
        onChange={(e) => setEmail(e.target.value)}
        
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        style={{backgroundColor: "#bbbbbb",
        color: "black",
        fontSize: 15,
        padding: "5px 30px",
        borderRadius: 10,
        border: "none",
        margin:'5px'}}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn} style={{fontWeight:'bold',color:'#115511',backgroundColor:'#ccddcc',cursor: "pointer",marginTop:'15px', padding:"5px 20px", border:'1px solid #1188bb', borderRadius:10}}>Sign In</button>
    </div>
  );
};

export default SignIn;

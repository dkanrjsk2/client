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
    <div style={{
      // display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width:"400px",
      height: "45vh",
      display:'flex',
      marginTop:'50px',
      flexDirection:'column',
      border:'3px solid #1188bb',
      borderRadius:10,
      backgroundColor:'white',  
      paddingBottom:'50px'
    }}>
    <h1 style={{marginTop:'45px',color:'#1188bb'}}>회원가입</h1>
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
      marginBottom:'20px'}}
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
      margin:'5px',
      marginBottom:'20px'}}
      onChange={(e) => setPassword(e.target.value)}
    />
    <input
        type="mbti"
        placeholder="MBTI"
        value={mbti}
        style={{backgroundColor: "#bbbbbb",
        color: "black",
        fontSize: 15,
        padding: "5px 30px",
        borderRadius: 10,
        border: "none",
        margin:'5px',
        marginBottom:'20px'}}
        onChange={(e) => setMbti(e.target.value)}
      />
      <input
        type="username"
        placeholder="Name"
        value={username}
        style={{backgroundColor: "#bbbbbb",
        color: "black",
        fontSize: 15,
        padding: "5px 30px",
        borderRadius: 10,
        border: "none",
        margin:'5px'}}
        onChange={(e) => setUsername(e.target.value)}
      />
    <button onClick={handleSignUp} style={{fontWeight:'bold',color:'#115511',backgroundColor:'#ccddcc',cursor: "pointer",marginTop:'40px', padding:"5px 20px", border:'1px solid #1188bb', borderRadius:10}}>Sign Up</button>
  </div>
  );
};

export default SignUp;

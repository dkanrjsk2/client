import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Layout from "./components/Layout";

import Home from "./components/content/Home";
import About from "./components/content/About";
import Detail from "./components/content/Detail";
import PostList from "./components/content/PostList";
import SignIn from "./components/content/SignIn";
import SignUp from "./components/content/SignUp";
import Plus from "./components/content/Plus";
import FriendProfile from "./components/FriendProfile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div style={{backgroundColor:'#fdfdfd'}}>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/:categoryName" element={<PostList />} />
            <Route path="/:categoryName/:postId" element={<Detail />} />
            <Route path="/plus" element={<Plus/>}/>
            <Route path="/friendprofile/:friendId" element={<FriendProfile/>}/>
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

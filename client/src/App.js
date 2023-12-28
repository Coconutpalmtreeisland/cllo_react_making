import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

import { gsap } from "./util/gsap";

import Home from "./pages/Home";
import UserLogin from "./components/user/UserLogin";
import UserJoin from "./components/user/UserJoin";
import FindEmail from "./components/user/FindEmail";
import FindPass from "./components/user/FindPass";
import Commu from "./components/community/Commu";

const App = () => {
  useEffect(() => {
    gsap();
  });

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<UserLogin />}></Route>
          <Route path="/join" element={<UserJoin />}></Route>
          <Route path="/findEmail" element={<FindEmail />}></Route>
          <Route path="/findPass" element={<FindPass />}></Route>
          <Route path="/community" element={<Commu />}></Route>
        </Routes>
      </Main>
      <Footer />
    </>
  );
};

export default App;

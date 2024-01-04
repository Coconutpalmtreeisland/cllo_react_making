import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser, clearUser } from './reducer/userSlice'
import firebase from './firebase.js'

import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer'

import { gsap } from './util/gsap'

import Home from './pages/Home'
import UserLogin from './components/user/UserLogin'
import UserJoin from './components/user/UserJoin'
import FindPass from './components/user/FindPass'

import UserPage from "./components/user/UserPage";

import Commu from './components/community/Commu.jsx'
import CommunityWrite from './components/community/CommunityWrite.jsx'
import CommuDetail from './components/community/CommuDetail.jsx'

const App = () => {
  useEffect(() => {
    gsap();
  });

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      // console.log(userInfo);
      if (userInfo !== null) {
        dispatch(loginUser(userInfo.multiFactor.user));
      } else {
        dispatch(clearUser()); //로그아웃
      }
    });
  }, [dispatch]);


  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<UserLogin />}></Route>
          <Route path='/join' element={<UserJoin />}></Route>
          <Route path='/findPass' element={<FindPass />}></Route>
          <Route path='/community' element={<Commu />}></Route>
          <Route path='/communityWrite' element={<CommunityWrite />}></Route>
          <Route path='/communityPost' element={<CommuDetail />}></Route>
          <Route path="/mypage" element={<UserPage />}></Route>
        </Routes>
      </Main>
      <Footer />
    </>
  )
}

export default App
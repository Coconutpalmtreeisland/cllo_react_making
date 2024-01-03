import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../../firebase.js";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const LoginFunc = async (e) => {
    e.preventDefault();

    if (!(email && password)) {
      return alert("이메일 또는 비밀번호를 채워주세요!");
    }
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      alert("로그인을 했습니다.");
      navigate("/");
    } catch (err) {
      console.log(err);
      setErrorMsg("이메일과 비밀번호를 다시 한번 확인해주세요!");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setErrorMsg("");
    }, 5000);
  }, [errorMsg]);

  return (
    <div className="join__wrap container">
      <div className="logo">
        <Link to="/"></Link>
      </div>
      <form action="/" className="join__form">
        <fieldset>
          <legend className="blind">로그인</legend>
          <div className="join__inputInner">
            <label htmlFor="youEmail" className="join__label required">
              이메일 주소
            </label>
            <input
              type="text"
              id="youEmail"
              placeholder="예&#41; cllo@cllo.co.kr"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <div className="join__inputInner">
            <label htmlFor="youPass" className="join__label required">
              비밀번호
            </label>
            <input
              type="text"
              id="youPass"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </div>
          <div>{errorMsg !== "" && <p>{errorMsg}</p>}</div>
          <button
            type="submit"
            onClick={(e) => LoginFunc(e)}
            className="join__btn"
          >
            로그인
          </button>
        </fieldset>
      </form>
      <div className="find__info">
        <ul>
          <li className="find__line">
            <a href="/join">이메일 가입</a>
          </li>
          <li className="find__line">
            <a href="/findPass">비밀번호 찾기</a>
          </li>
        </ul>
      </div>
      <div className="social__login">
        <a href="/">
          <button className="join__btn social__btn login__naver">
            <span></span>네이버로 로그인
          </button>
        </a>
        <a href="/">
          <button className="join__btn social__btn login__apple">
            <span></span>Apple로 로그인
          </button>
        </a>
        <a href="/">
          <button className="join__btn social__btn login__google">
            <span></span>Google로 로그인
          </button>
        </a>
        <a href="/">
          <button className="join__btn social__btn login__kakao">
            <span></span>카카오로 로그인
          </button>
        </a>
      </div>
    </div>
  );
};

export default UserLogin;

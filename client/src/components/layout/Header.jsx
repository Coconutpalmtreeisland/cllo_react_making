import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import firebase from "../../firebase.js";

import logo from "../../assets/img/logo.svg";
import search from "../../assets/img/search.svg";

const Header = () => {
  const [didScroll, setDidScroll] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const headerRef = useRef(null);

  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const LogoutHandler = () => {
    firebase.auth().signOut();
    navigate("/");
  };

  useEffect(() => {
    const delta = 5;
    const onScroll = () => {
      setDidScroll(true);
    };

    const checkScroll = () => {
      if (!didScroll || !headerRef.current) return;

      const st = window.pageYOffset || document.documentElement.scrollTop;
      const navbarHeight = headerRef.current.offsetHeight;

      if (Math.abs(lastScrollTop - st) <= delta) return;

      if (st > lastScrollTop && st > navbarHeight) {
        headerRef.current.classList.remove("nav-down");
        headerRef.current.classList.add("nav-up");
      } else {
        if (st + window.innerHeight < document.documentElement.scrollHeight) {
          headerRef.current.classList.remove("nav-up");
          headerRef.current.classList.add("nav-down");
        }
      }

      setLastScrollTop(st);
      setDidScroll(false);
    };

    window.addEventListener("scroll", onScroll);
    const intervalId = setInterval(checkScroll, 250);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(intervalId);
    };
  }, [didScroll, lastScrollTop]);

  return (
    <header id="header" role="banner" ref={headerRef}>
      {/* user_sign */}
      <div className="user_sign">
        {user.accessToken === "" ? (
          <ul className="container">
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/Join">회원가입</Link>
            </li>
          </ul>
        ) : (
          <ul className="container">
            <li>
              <Link to="/mypage">{user.displayName}님 환영합니다:)</Link>
            </li>
            <li>
              <Link onClick={() => LogoutHandler()}>로그아웃</Link>
            </li>
          </ul>
        )}
      </div>

      {/* header_inner */}
      <div className="header_inner">
        <div className="header_item">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <nav className="header__nav" role="navigation" aria-label="메인 메뉴">
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/style" activeClassName="active">
                  Style
                </NavLink>
              </li>
              <li>
                <NavLink to="/community" activeClassName="active">
                  Community
                </NavLink>
              </li>
              <li>
                <NavLink to="/mypage" activeClassName="active">
                  Mypage
                </NavLink>
              </li>
              <li>
                <button className="search_icon">
                  <img src={search} alt="search" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

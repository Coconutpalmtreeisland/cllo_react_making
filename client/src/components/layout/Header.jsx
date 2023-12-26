import React, { useEffect, useRef, useState } from 'react'
import logo from "../../assets/img/logo.svg";
import search from '../../assets/img/search.svg';

const Header = () => {
    const [didScroll, setDidScroll] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const headerRef = useRef(null);

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
                <ul className="container">
                    <li><a href="/login">로그인</a></li>
                    <li><a href="/logout">로그아웃</a></li>
                    <li><a href="/join">회원가입</a></li>
                </ul>
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
                            <li className="active"><a href="/">Home</a></li>
                            <li><a href="/style">Style</a></li>
                            <li><a href="/community">Community</a></li>
                            <li><a href="/mypage">Mypage</a></li>
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
    )
}

export default Header
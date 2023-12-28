import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import firebase from '../../firebase.js'

const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    const LoginFunc = async (e) => {
        e.preventDefault();

        if (!(email && password)) {
            return alert("이메일과 비밀번호를 모두 입력해주세요");
        } try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            alert("로그인 했습니다");
            navigate("/");
        } catch (err) {
            console.log(err);
            setErrorMsg("이메일과 비밀번호를 다시 한번 확인해주세요");
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setErrorMsg("")
        }, 5000)
    }, [errorMsg]);

    return (
        <div className="join__wrap container">
            <div className="logo">
                <Link to="/">&#32;</Link>
            </div>
            <form action="/" className="join__form">
                <fieldset>
                    <legend className="blind">회원가입</legend>
                    <div className="join__inputInner blind">
                        <label htmlFor="nickName" className="join__label required">닉네임</label>
                        <input type="text" id="nickName" placeholder="한글 2-5자" />
                    </div>
                    <div className="join__inputInner">
                        <label htmlFor="youEmail" className="join__label required">이메일 주소</label>
                        <input
                            style={{ imeMode: 'inactive' }}
                            type="email"
                            id="youEmail"
                            name="youEmail"
                            placeholder="예&#41; cllo@cllo.co.kr"
                            autoComplete='off'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                    </div>
                    <div className="join__inputInner">
                        <label htmlFor="youPass" className="join__label required">비밀번호</label>
                        <input
                            style={{ imeMode: 'inactive' }}
                            type="password"
                            id="youPass"
                            name="youPass"
                            autoComplete='off'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                        />
                    </div>
                    <div>
                        {errorMsg !== "" && <p>{errorMsg}</p>}
                    </div>
                    <button type="submit" className="join__btn" onClick={(e) => LoginFunc(e)}>로그인</button>
                </fieldset>
            </form>
            <div className="find__info">
                <ul>
                    <li className="find__line"><Link to="/join">이메일 가입</Link></li>
                    <li className="find__line"><Link to="/findPass">비밀번호 찾기</Link></li>
                </ul>
            </div>
            <div className="social__login">
                <button className="join__btn social__btn login__naver"><span></span>네이버로 로그인</button>
                <button className="join__btn social__btn login__apple"><span></span>Apple로 로그인</button>
                <button className="join__btn social__btn login__google"><span></span>Google로
                    로그인</button>
                <button className="join__btn social__btn login__kakao"><span></span>카카오로 로그인</button>
            </div>
        </div>
    )
}

export default UserLogin
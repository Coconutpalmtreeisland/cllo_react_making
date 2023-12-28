import React from 'react'

const UserLogin = () => {
    return (
        <div className="join__wrap container">
            <div className="logo">
                <a href="/"></a>
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
                        <input type="text" id="youEmail" placeholder="예&#41; cllo@cllo.co.kr" />
                    </div>
                    <div className="join__inputInner">
                        <label htmlFor="youPass" className="join__label required">비밀번호</label>
                        <input type="text" id="youPass" />
                    </div>
                    <button type="submit" className="join__btn">로그인</button>
                </fieldset>
            </form>
            <div className="find__info">
                <ul>
                    <li className="find__line"><a href="/join">이메일 가입</a></li>
                    <li className="find__line"><a href="/findPass">비밀번호 찾기</a></li>
                </ul>
            </div>
            <div className="social__login">
                <a href="/"><button className="join__btn social__btn login__naver"><span></span>네이버로 로그인</button></a>
                <a href="/"><button className="join__btn social__btn login__apple"><span></span>Apple로 로그인</button></a>
                <a href="/"><button className="join__btn social__btn login__google"><span></span>Google로
                    로그인</button></a>
                <a href="/"><button className="join__btn social__btn login__kakao"><span></span>카카오로 로그인</button></a>
            </div>
        </div>
    )
}

export default UserLogin
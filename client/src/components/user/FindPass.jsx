import React from 'react'

const FindPass = () => {
    return (
        <div className="join__wrap container">
            <h3>비밀번호 찾기</h3>
            <span className="find__line"></span>
            <span>가입 시 등록한 휴대폰 번호를 입력하면<br /> 비밀번호를 알려드립니다.</span>
            <form action="/" className="join__form">
                <fieldset>
                    <legend className="blind">회원가입</legend>
                    <div className="join__inputInner blind">
                        <label for="nickName" className="join__label required">닉네임</label>
                        <input type="text" id="nickName" placeholder="한글 2-5자" />
                    </div>
                    <div className="join__inputInner">
                        <label for="youTel" className="join__label required">휴대폰 번호</label>
                        <input type="text" id="youTel" placeholder="가입하신 휴대폰 번호" />
                    </div>
                    <div className="join__inputInner">
                        <label for="youEmail" className="join__label required">이메일 주소</label>
                        <input type="text" id="youEmail" placeholder="예&#41; cllo@cllo.co.kr" />
                    </div>
                    <button type="submit" className="join__btn">비밀번호 찾기</button>
                </fieldset>
            </form>
        </div>
    )
}

export default FindPass
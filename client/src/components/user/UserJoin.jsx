import React, { useState } from 'react'

import firebase from '../../firebase'
import { useNavigate } from 'react-router-dom';

const UserJoin = () => {
    const [youName, setYouName] = useState("");
    const [youEmail, setYouEmail] = useState("");
    const [youPass, setYouPass] = useState("");
    const [youPassC, setYouPassC] = useState("");
    const [flag, setFlag] = useState(false);
    const [nameCheck, setNameCheck] = useState(false);
    const [nameInfo, setNameInfo] = useState("");

    let navigate = useNavigate();

    return (
        <div className="join__wrap container">
            <h3>회원가입</h3>
            <form action="/" className="join__form">
                <fieldset>
                    <legend className="blind">회원가입</legend>
                    <div className="join__inputInner">
                        <label for="nickName" className="join__label required">닉네임<em>*</em></label>
                        <input type="text" id="nickName" placeholder="한글 2-5자" />
                        <button className="check__btn">중복검사</button>
                    </div>
                    <div className="join__inputInner">
                        <label for="youEmail" className="join__label required">이메일 주소<em>*</em></label>
                        <input type="text" id="youEmail" placeholder="예&#41; cllo@cllo.co.kr" />
                    </div>
                    <div className="join__inputInner">
                        <label for="youPass" className="join__label required">비밀번호<em>*</em></label>
                        <input type="text" id="youPass" placeholder="영문, 숫자, 특수문자 조합 8-16자" />
                    </div>
                    <div className="join__inputInner">
                        <label for="youPassC" className="join__label required">비밀번호 확인<em>*</em></label>
                        <input type="text" id="youPassC" placeholder="영문, 숫자, 특수문자 조합 8-16자" />
                    </div>
                    <div className="join__inputInner">
                        <label for="youTel" className="join__label required">휴대폰 번호<em>*</em></label>
                        <input type="text" id="youTel" placeholder="010-0000-0000" />
                    </div>
                    <button type="submit" className="join__btn">회원가입</button>
                </fieldset>
            </form>

        </div>
    )
}

export default UserJoin
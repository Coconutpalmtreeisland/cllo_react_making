import React, { useState } from 'react'
import axios from 'axios'

import firebase from '../../firebase'
import { useNavigate } from 'react-router-dom';

const UserJoin = () => {
    const [youName, setYouName] = useState("");
    const [youEmail, setYouEmail] = useState("");
    const [youPass, setYouPass] = useState("");
    const [youPassC, setYouPassC] = useState("");
    const [youTel, setYouTel] = useState("");
    const [flag, setFlag] = useState(false);
    const [nameCheck, setNameCheck] = useState(false);

    const [nameInfo, setNameInfo] = useState("");
    const [emailInfo, setEmailInfo] = useState("");
    const [telInfo, setTelInfo] = useState("");
    const [passInfo, setPassInfo] = useState("");

    let navigate = useNavigate();

    // 회원가입 버튼 클릭시
    const JoinFunc = async (e) => {
        setFlag(true);
        e.preventDefault();

        if (!(youName && youEmail && youPass && youPassC && youTel)) {
            return alert("모든 항목을 입력하셔야 회원가입이 가능합니다.");
        }
        if (youPass !== youPassC) {
            return alert("비밀번호가 일치하지 않습니다.")
        }
        if (!nameCheck) {
            return alert("닉네임 중복 검사를 해주세요!");
        }

        // firebase 회원가입
        let createdUser = await firebase.auth().createUserWithEmailAndPassword(youEmail, youPass);

        await createdUser.user.updateProfile({
            displayName: youName,
        });

        console.log(createdUser.user);

        // mongoDB 회원가입
        let body = {
            email: createdUser.user.multiFactor.user.email,
            displayName: createdUser.user.multiFactor.user.displayName,
            uid: createdUser.user.multiFactor.user.uid, // firebase에서 만든 아이디
        }

        axios
            .post("/api/user/join", body)
            .then((response) => {
                if (response.data.success) {
                    alert("회원가입이 완료되었습니다.");
                    navigate("/login");
                } else {
                    alert("회원가입을 실패하였습니다.");
                }
            })
    }

    // 이메일 유효성 검사
    const checkEmail = (email) => {
        const reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([\-.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        return reg.test(email);
    }

    // 비밀번호 유효성 검사
    const checkPassword = (password) => {
        const reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
        return reg.test(password);
    }

    // 핸드폰 번호 유효성 검사
    const checkPhoneNum = (youTel) => {
        const reg = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/
        return reg.test(youTel);
    }

    // 닉네임 유효성 검사
    const lengthNickname = (nickname) => {
        const reg = /^[가-힣]{2,5}$/;
        return reg.test(nickname);
    }

    // 중복 검사 버튼 클릭 시
    const NameCheckFunc = (e) => {
        e.preventDefault();
        if (!youName) {
            return alert("닉네임을 입력해주세요!");
        }
        if (!lengthNickname(youName)) {
            setNameInfo(<span className="nameInfo invalid">닉네임은 한글 2-5자로 입력해주세요!</span>);
            return;
        }
        let body = {
            displayName: youName,
        }

        axios.post("/api/user/namecheck", body).then((response) => {
            if (response.data.success) {
                if (response.data.check) {
                    setNameCheck(true);
                    setNameInfo(<span className="nameInfo">사용 가능한 닉네임입니다.</span>);
                } else {
                    setNameInfo(<span className="nameInfo invalid">사용할 수 없는 닉네임입니다.</span>);
                }
            }
        })
    }

    return (
        <div className="join__wrap container">
            <h3>회원가입</h3>
            <form action="/" className="join__form">
                <fieldset>
                    <legend className="blind">회원가입</legend>
                    <div className="join__inputInner">
                        <label htmlFor="nickName" className="join__label required">닉네임<em>*</em></label>
                        <input
                            type="text"
                            id="nickName"
                            name="nickName"
                            placeholder="한글 2-5자"
                            autoComplete='off'
                            required
                            minLength={2}
                            maxLength={5}
                            value={youName}
                            onChange={(e) => setYouName(e.currentTarget.value)}
                        />
                        <button
                            className="check__btn"
                            onClick={(e) => NameCheckFunc(e)}
                        >중복검사</button>
                        <span className="nameInfo">{nameInfo}</span>
                    </div>
                    <div className="join__inputInner">
                        <label htmlFor="youEmail" className="join__label required">이메일 주소<em>*</em></label>
                        <input
                            type="text"
                            id="youEmail"
                            name="youEmail"
                            placeholder="예&#41; cllo@cllo.co.kr"
                            autoComplete='off'
                            required
                            minLength={5}
                            value={youEmail}
                            onChange={(e) => {
                                setYouEmail(e.currentTarget.value);
                                const isValid = checkEmail(e.currentTarget.value);
                                if (isValid) {
                                    setEmailInfo('');
                                } else {
                                    setEmailInfo(<span className="nameInfo invalid">이메일 주소를 다시 확인해주세요!</span>);
                                }
                            }}
                        />
                        <span className="nameInfo">{emailInfo}</span>
                    </div>
                    <div className="join__inputInner">
                        <label htmlFor="youPass" className="join__label required">비밀번호<em>*</em></label>
                        <input
                            type="text"
                            id="youPass"
                            name="youPass"
                            placeholder="영문, 숫자, 특수문자 조합 8-16자"
                            autoComplete='off'
                            required
                            minLength={8}
                            maxLength={16}
                            value={youPass}
                            onChange={(e) => {
                                setYouPass(e.currentTarget.value);
                                const isValid = checkPassword(e.currentTarget.value);
                                if (isValid) {
                                    setPassInfo('');
                                } else {
                                    setPassInfo(<span className="nameInfo invalid">비밀번호는 영문, 숫자, 특수문자 조합 8-16자로 입력해주세요!</span>);
                                }
                            }}
                        />
                        <span className="nameInfo">{passInfo}</span>
                    </div>
                    <div className="join__inputInner">
                        <label htmlFor="youPassC" className="join__label required">비밀번호 확인<em>*</em></label>
                        <input
                            type="text"
                            id="youPassC"
                            name="youPassC"
                            placeholder="영문, 숫자, 특수문자 조합 8-16자"
                            autoComplete='off'
                            required
                            minLength={8}
                            maxLength={16}
                            value={youPassC}
                            onChange={(e) => setYouPassC(e.currentTarget.value)}
                        />
                    </div>
                    <div className="join__inputInner">
                        <label htmlFor="youTel" className="join__label required">휴대폰 번호<em>*</em></label>
                        <input
                            type="text"
                            id="youTel"
                            name="youTel"
                            placeholder="010-0000-0000"
                            autoComplete='off'
                            required
                            maxLength={15}
                            value={youTel}
                            onChange={(e) => {
                                setYouTel(e.currentTarget.value);
                                const isValid = checkPhoneNum(e.currentTarget.value);
                                if (isValid) {
                                    setTelInfo('');
                                } else {
                                    setTelInfo(<span className="nameInfo invalid">휴대폰 번호 양식에 맞게 작성해주세요!</span>);
                                }
                            }}
                        />
                        <span className="nameInfo">{telInfo}</span>
                    </div>
                    <button
                        disabled={flag}
                        type="submit"
                        className="join__btn"
                        onClick={(e) => JoinFunc(e)}
                    >회원가입</button>
                </fieldset>
            </form>

        </div>
    )
}

export default UserJoin
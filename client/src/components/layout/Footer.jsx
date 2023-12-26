import React from 'react'

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer_inner container">
                <div className="f_logo">
                    <img src="../../assets/img/f_logo.svg" alt="footer_logo" />
                </div>
                <p>사용자의 지역에 따른 날씨에 맞춰 코디를 추천해주고
                    서로의 코디를 공유하며 이야기를 나눌 수 있는 사이트입니다.</p>
                <ul className="content_info">
                    <li>
                        <a href="#">이용약관</a>
                    </li>
                    <li>
                        <a href="#">개인정보 처리방침</a>
                    </li>
                </ul>
            </div>
            <div className="copy_line">
                © 2023 Moon young-in & Lee hye-min. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
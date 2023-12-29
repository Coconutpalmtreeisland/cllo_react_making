import React from 'react'

import { IoCameraSharp } from "react-icons/io5";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import example from '../../assets/img/c01.jpg'

const CommunityWrite = () => {
    return (
        <div className="CommuWrite__wrap container">
            <div className="write__header">
                <IoCameraSharp />
                <h3>게시글 작성</h3>
                <div>
                    <span>취소</span>
                    <span>등록</span>
                </div>
            </div>
            <div className="write__content">
                <div className="preImgBox__wrap">
                    <IoIosArrowDropleftCircle />
                    <div className="pre__imgbox">
                        <img src={example} alt="사진" />
                        <MdCancel />
                    </div>
                    <IoIosArrowDroprightCircle />
                </div>
                <input type="text" placeholder='제목은 최대 20자까지 가능합니다' />
                <textarea name="content" id="content" placeholder='내용을 작성하세요'></textarea>
            </div>
        </div>
    )
}

export default CommunityWrite
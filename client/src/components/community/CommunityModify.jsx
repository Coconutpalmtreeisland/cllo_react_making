import React from 'react'
import CommuWrite from '../../util/CommuWrite';
import { IoCameraSharp } from "react-icons/io5";

const CommunityWrite = () => {

    return (
        <div className="CommuWrite__wrap container">
            <div className="write__header">
                <button><IoCameraSharp /></button>
                <h3>게시글 수정</h3>
                <div>
                    <button>취소</button>
                    <button>등록</button>
                </div>
            </div>
            <div className="write__content">
                <div className="preImgBox__wrap">
                    <CommuWrite />
                </div>
                <input type="text" maxLength="20" placeholder='제목은 최대 20자까지 가능합니다' />
                <textarea name="content" id="content" rows="5" placeholder='내용을 작성하세요'></textarea>
            </div>
        </div>
    )
}

export default CommunityWrite
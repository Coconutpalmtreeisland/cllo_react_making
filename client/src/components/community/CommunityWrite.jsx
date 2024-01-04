import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CommuPreImg from '../../util/CommuPreImg';
import CommuImage from './CommuImage';

const CommunityWrite = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");

    let navigate = useNavigate();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (!user.accessToken) {
            alert("로그인한 회원만 작성이 가능합니다.");
            navigate("/login");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        if (title === "" || content === "") {
            return alert("내용을 채워주세요!");
        }

        let body = {
            title: title,
            content: content,
            image: image,
            uid: user.uid,
        }

        axios.post("/api/commu/write", body)
            .then((resopnse) => {
                if (resopnse.data.success) {
                    alert("글 작성이 완료되었습니다.");
                    navigate("/list");
                } else {
                    alert("글 작성이 실패하였습니다.");
                }
            })
    };

    return (
        <div className="CommuWrite__wrap container">
            <div className="write__header">
                <CommuImage setImage={setImage} />
                <h3>게시글 작성</h3>
                <div>
                    <button>취소</button>
                    <button
                        type='submit'
                        onClick={(e) => onSubmit(e)}>등록</button>
                </div>
            </div>
            <div className="write__content">
                <div className="preImgBox__wrap">
                    <CommuPreImg />
                </div>
                <form>
                    <fieldset>
                        <legend className='blind'>글쓰기 영역</legend>
                        <div>
                            <label htmlFor='commutitle' className='blind'>게시글 제목</label>
                            <input
                                className='input'
                                type="text"
                                maxLength="20"
                                placeholder='제목은 최대 20자까지 가능합니다'
                                value={title}
                                onChange={(e) => setTitle(e.currentTarget.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor='commucontent' className='blind'>게시글 내용</label>
                            <textarea
                                name="content"
                                id="content"
                                rows="5"
                                placeholder='내용을 작성하세요'
                                value={content}
                                onChange={(e) => setContent(e.currentTarget.value)}
                            ></textarea>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default CommunityWrite
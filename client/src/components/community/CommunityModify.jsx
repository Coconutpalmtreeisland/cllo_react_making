import React, { useEffect, useState } from 'react'
import { IoCameraSharp } from "react-icons/io5";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import CommuPreImg from '../../util/CommuPreImg';
import CommunityImage from './CommunityImage';

const CommunityModify = () => {
    const [commuInfo, setCommuInfo] = useState({});
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");

    let params = useParams();
    let navigate = useNavigate();

    // 글 정보 가져오기
    useEffect(() => {
        let body = {
            commuNum: params.commuNum
        }

        axios.post('/api/post/detail', body)
            .then((response) => {
                if (response.data.success) {
                    setCommuInfo(response.data.community);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [params.commuNum]);

    useEffect(() => {
        setTitle(commuInfo.title);
        setContent(commuInfo.content);
    }, [commuInfo])

    // 글 수정하기
    const onSubmit = (e) => {
        e.preventDefault();

        if (title === '' || content === '') {
            return alert('제목과 내용을 입력해주세요!!');
        }

        let body = {
            title: title,
            content: content,
            postNum: params.postNum
        }

        axios
            .post('/api/post/modify', body)
            .then((response) => {
                if (response.data.success) {
                    alert('글이 수정되었습니다.')
                    navigate('/list');
                } else {
                    alert('글 수정을 실패하였습니다');
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="CommuWrite__wrap container">
            <div className="write__header">
                <CommunityImage setImage={setImage} />
                <h3>게시글 수정</h3>
                <div>
                    <button>취소</button>
                    <button
                        type='submit'
                        onClick={(e) => onSubmit(e)}>수정</button>
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
                                value={title || ''}
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
                                value={content || ''}
                                onChange={(e) => setContent(e.currentTarget.value)}
                            ></textarea>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default CommunityModify
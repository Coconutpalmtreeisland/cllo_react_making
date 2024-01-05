import React, { useEffect, useState } from 'react'
import CommunityDetail from './CommunityDetail'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CommunityArea = () => {
    const [commuInfo, setCommuInfo] = useState({});
    const [flag, setFlag] = useState(false);

    let params = useParams();

    // 글 불러오기
    useEffect(() => {
        let body = {
            commuNum: params.commuNum
        }

        axios.post('/api/community/detail', body)
            .then((response) => {
                console.log(response);
                setCommuInfo(response.data.community);
                setFlag(true);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [params.commuNum]);

    return (
        <div>
            {flag ? (
                <>
                    <CommunityDetail commuInfo={commuInfo} />
                </>
            ) : (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Loading...</div>
            )}
        </div>
    )
}

export default CommunityArea
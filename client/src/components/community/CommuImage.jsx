import React from 'react'
import axios from 'axios';
import { IoCameraSharp } from "react-icons/io5";

const CommuImage = (props) => {

    const FileUpload = (e) => {
        const formData = new FormData();
        let files = document.querySelector('input[type="file"]').files;
        for (let i = 0; i < files.length; i++) {
            formData.append('image', files[i]);
        }

        axios
            .post("/api/commu/image/upload", formData)
            .then((response) => {
                console.log(response);
                props.setImage(response.data.filePath);
            })
    };

    return (
        <>
            <label>
                <input
                    type='file'
                    accept='image/*'
                    multiple
                    onChange={(e) => FileUpload(e)}
                /><IoCameraSharp />
            </label>
        </>
    )
}

export default CommuImage
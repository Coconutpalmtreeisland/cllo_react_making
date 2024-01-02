import React, { useEffect, useRef, useState } from 'react'

import { IoCameraSharp } from "react-icons/io5";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import example from '../../assets/img/c01.jpg'

const CommunityWrite = () => {
    const carouselRef = useRef(null);
    const firstImgRef = useRef(null);
    const [firstImgWidth, setFirstImgWidth] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState(0);

    const [isDragStart, setDragStart] = useState(false);
    const [Dragging, setDragging] = useState(false);
    const [prevPageX, setPrevPageX] = useState(0);
    const [prevScrollLeft, setPrevScrollLeft] = useState(0);
    const [positionDiff, setPositionDiff] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartPos(e.clientX);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const currentPos = e.clientX;
        const diff = currentPos - startPos;

        if (Math.abs(diff) >= firstImgWidth) {
            carouselRef.current.scrollLeft += Math.sign(diff) * firstImgWidth;
            setStartPos(currentPos);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const scrollLeft = () => {
        carouselRef.current.scrollLeft -= firstImgWidth;
    };

    const scrollRight = () => {
        carouselRef.current.scrollLeft += firstImgWidth;
    };

    useEffect(() => {
        if (firstImgRef.current) {
            setFirstImgWidth(firstImgRef.current.offsetWidth + 15); // 이미지 너비 + 15
        }

        const carousel = carouselRef.current;
        let arrowIcons = document.querySelectorAll(".preImgBox__wrap svg");

        const showHideIcons = () => {
            let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
            arrowIcons[0].style.display = carousel.scrollLeft === 0 ? "none" : "block";
            arrowIcons[1].style.display = carousel.scrollLeft === scrollWidth ? "none" : "block";
        }

        const dragStart = (e) => {
            setDragStart(true);
            setPrevPageX(e.pageX || e.touches[0].pageX);
            setPrevScrollLeft(carousel.scrollLeft);
        }

        const dragging = (e) => {
            if (!isDragStart) return;
            e.preventDefault();
            setDragging(true);
            carousel.classList.add("dragging");
            let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
            setPositionDiff(positionDiff);
            carousel.scrollLeft = prevScrollLeft - positionDiff;
            showHideIcons();
        }

        const dragStop = () => {
            setDragStart(false);
            carousel.classList.remove("dragging");
            if (!Dragging) return;
            setDragging(false);
        }

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("touchstart", dragStart);
        document.addEventListener("mousemove", dragging);
        carousel.addEventListener("touchmove", dragging);
        document.addEventListener("mouseup", dragStop);
        carousel.addEventListener("touchend", dragStop);

        return () => {
            carousel.removeEventListener("mousedown", dragStart);
            carousel.removeEventListener("touchstart", dragStart);
            document.removeEventListener("mousemove", dragging);
            carousel.removeEventListener("touchmove", dragging);
            document.removeEventListener("mouseup", dragStop);
            carousel.removeEventListener("touchend", dragStop);
        }
    }, [isDragStart, Dragging, prevPageX, prevScrollLeft, positionDiff]);


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
                    <IoIosArrowDropleftCircle onClick={scrollLeft} size="2rem" color="#888888a2" />
                    <div
                        className="carousel"
                        ref={carouselRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    >
                        <img ref={firstImgRef} src={example} alt="사진" draggable="false" />
                        <img src={example} alt="사진" draggable="false" />
                        <img src={example} alt="사진" draggable="false" />
                        <img src={example} alt="사진" draggable="false" />
                        <img src={example} alt="사진" draggable="false" />
                        <img src={example} alt="사진" draggable="false" />
                    </div>
                    <IoIosArrowDroprightCircle onClick={scrollRight} size="2rem" color="#888888a2" />
                </div>
                <input type="text" maxlength="20" placeholder='제목은 최대 20자까지 가능합니다' />
                <textarea name="content" id="content" rows="5" placeholder='내용을 작성하세요'></textarea>
            </div>
        </div>
    )
}

export default CommunityWrite
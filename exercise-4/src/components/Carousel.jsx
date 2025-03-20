import React from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  const [stateIndex, setIndex] = useState(0);
  let imageAmount = images.length;
  function leftArrow (){
    if (stateIndex === 0) {
      setIndex(imageAmount-1);
    } else {
      setIndex(stateIndex-1);
    }
  }
  function rightArrow (){
    if (stateIndex === imageAmount-1) {
      setIndex(0);
    } else {
      setIndex(stateIndex+1)
    }
  }

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={leftArrow}/>

      <img src={images[stateIndex].src} alt={images[stateIndex].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={rightArrow}/>
    </div>
  );
};

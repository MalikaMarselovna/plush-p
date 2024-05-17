import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { ApiSlides } from '../apiFolder/SliderApi';
import './Slider.css';

function Slider() {
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  const arrowStyle = "rounded-full m-3 text-white bg-[#f92e9e] hover:bg-[#16ffbd] flex shadow-sm items-center justify-center cursor-pointer";

  const nextSlide = () => {
    setActiveSlide(activeSlide === slides.length - 1 ? 0 : activeSlide + 1);
  };

  const prevSlide = () => {
    setActiveSlide(activeSlide === 0 ? slides.length - 1 : activeSlide - 1);
  };

  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between">
      {/* Left arrow */}
      <div className={arrowStyle} onClick={prevSlide}>
        <ArrowLeftOutlined style={{ fontSize: '50px' }} />
      </div>
      {/* Slide */}
      {slides.map((slide, index) => (
        index === activeSlide && (
          <div key={index} className={`wrapper flex w-[100%] h-[100%] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-none mt-[20px] overflow-hidden relative ${slide.background}`}>
            <div className="slide flex items-center justify-center h-[100%]">
              <div className="forImage flex flex-1 justify-center items-center h-[100%]">
                <img className="h-[100%] object-cover" src={slide.src} alt="slide_image" />
              </div>
              <div className="des flex flex-col flex-1 place-items-start justify-center ml-11">
                <h2 className="text-[55px] mr-[10px]"> {slide.content.h2} </h2>
                <p className="text-[30px] mb-[20px]">{slide.content.p}</p>
                <button className="btn">Shop Now</button>
              </div>
            </div>
          </div>
        )
      ))}
      {/* Right arrow */}
      <div className={arrowStyle} onClick={nextSlide}>
        <ArrowRightOutlined style={{ fontSize: '50px' }} />
      </div>
    </div>
  );
}

export default Slider;

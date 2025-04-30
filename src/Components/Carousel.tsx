"use client"
import imgs from "/public/imgs";
import React, { useEffect, useState } from 'react';
import MovieImgs from 'MovieImgs';

interface my {
  para: string;
}
const Wheel: React.FC<my> = ({ para }) => {
  return (
    <div>
      <img className="w-<1440px> h-<600px>" src="imgs/gladi.png" alt="" />
    </div>
  );
};


type CarouselProps = {
  images: string[];
  autoSlide?: boolean;
  autoSlideInterval?: number; // in milliseconds
};

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoSlide = true,
  autoSlideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval, images]);

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>‹</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button className="next" onClick={nextSlide}>›</button>
    </div>
  );
};

export default Carousel;


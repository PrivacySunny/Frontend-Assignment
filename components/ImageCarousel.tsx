"use client";

import React from "react";

interface ImageCarouselProps {
  images: string[];
  currentIndex: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  currentIndex,
}) => {
  const visibleImages = images.slice(currentIndex, currentIndex + 4);

  return (
    <div className="flex justify-center space-x-2 md:space-x-4">
      {visibleImages.map((src, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl w-24 h-24 md:w-40 md:h-40 transition-all duration-500 transform hover:scale-110 hover:-rotate-6"
        >
          <img
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;

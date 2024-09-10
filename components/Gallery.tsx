"use client";

import { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import AddImageButton from "./AddImageButton";

const Gallery = () => {
  const availableImages = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
    "/images/image7.jpg",
    "/images/image8.jpg",
    "/images/image9.jpg",
    "/images/image10.jpg",
  ];

  const [images, setImages] = useState<string[]>([
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const addImage = () => {
    if (images.length < availableImages.length) {
      const remainingImages = availableImages.filter(
        (img) => !images.includes(img)
      );
      const randomImage =
        remainingImages[Math.floor(Math.random() * remainingImages.length)];
      setImages([...images, randomImage]);
    } else {
      alert("All images have been added");
    }
  };

  const handleNext = () => {
    if (currentIndex + 4 < images.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-customGray p-6 rounded-2xl shadow-lg shadow-black mt-8 w-full md:w-2/3 lg:w-1/2 ml-auto mr-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-center text-lg bg-black w-36 m-1.5 p-3 border-2 border-transparent rounded-full shadow-md">
          Gallery
        </h2>

        <div className="flex items-center">
          <AddImageButton addImage={addImage} />
          <div className="flex ml-2">
            <button
              onClick={handlePrev}
              className={`text-white bg-gray-700 px-4 py-2 rounded-full shadow-md shadow-black mr-2 ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentIndex === 0}
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className={`text-white bg-gray-700 px-4 py-2 rounded-full shadow-md shadow-black ${
                currentIndex + 4 >= images.length
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={currentIndex + 4 >= images.length}
            >
              →
            </button>
          </div>
        </div>
      </div>
      <ImageCarousel images={images} currentIndex={currentIndex} />
    </div>
  );
};

export default Gallery;

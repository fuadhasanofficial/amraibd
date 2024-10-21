import React, { useEffect, useState } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: "https://i.ibb.co.com/j3qhyvy/IMG-20241020-WA0006.jpg",
      title: "Slide 1",
    },
    {
      url: "https://i.ibb.co.com/xCJCf2H/IMG-20241021-WA0017.jpg",
      title: "Slide 2",
    },
    {
      url: "https://i.ibb.co.com/bKm8t7b/IMG-20241021-WA0027.jpg",
      title: "Slide 3",
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]); // Dependency to track changes in currentIndex

  return (
    <div className="lg:w-[75%] mx-auto w-full h-64 md:h-96 relative group">
      {/* Slide */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>

      {/* Left Arrow */}
      <div
        className="hidden group-hover:block absolute top-1/2 left-5 transform -translate-y-1/2 text-2xl text-white cursor-pointer bg-black bg-opacity-50 rounded-full p-2"
        onClick={prevSlide}
      >
        &#10094;
      </div>

      {/* Right Arrow */}
      <div
        className="hidden group-hover:block absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl text-white cursor-pointer bg-black bg-opacity-50 rounded-full p-2"
        onClick={nextSlide}
      >
        &#10095;
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer h-3 w-3 rounded-full bg-white ${
              currentIndex === index ? "bg-opacity-100" : "bg-opacity-50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

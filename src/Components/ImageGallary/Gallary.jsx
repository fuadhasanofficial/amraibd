import React from "react";
import Image from "./Image";

// Import LightGallery styles and plugins

// List of images for the gallery
const images = [
  {
    src: "https://i.ibb.co.com/bKm8t7b/IMG-20241021-WA0027.jpg",
    alt: "Image 1",
    des: "আমরাই বাংলাদেশ এর পক্ষ হতে মানিকগঞ্জ পৌরসভার বিভিন্ন  পরিচ্ছন্তা অভিযান পরিচালনা করা হয়  ",
  },
  {
    src: "https://i.ibb.co.com/bKm8t7b/IMG-20241021-WA0027.jpg",
    alt: "Image 2",
  },
  {
    src: "https://via.placeholder.com/600x400.png?text=Image+3",
    alt: "Image 3",
  },
  {
    src: "https://via.placeholder.com/600x400.png?text=Image+4",
    alt: "Image 4",
  },
  {
    src: "https://via.placeholder.com/600x400.png?text=Image+5",
    alt: "Image 5",
  },
];

const Gallery = () => {
  return (
    <div className="container mx-auto py-12 mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <Image key={index} data={image} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

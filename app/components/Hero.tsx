'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
  { src: '/ocean.jpg', alt: 'Ocean background', location: '沖縄県 北谷町' },
  { src: '/ocean2.jpg', alt: 'Ocean background 2', location: '沖縄県 西原町' },
  { src: '/ocean3.jpg', alt: 'Ocean background 3', location: '沖縄県 浦添市' },
  { src: '/ocean4.jpg', alt: 'Ocean background 4', location: '沖縄県 名護市' },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            priority={index === 0}
          />
        ))}
      </div>

      <div className="absolute bottom-8 left-8 z-10 text-left">
        <div className="space-y-4 bg-white/20 backdrop-blur-md p-5 rounded-xl">
          <p className="text-base text-white font-medium font-inter">
            Welcome to
          </p>
          <h1 className="text-4xl font-bold text-white font-inter-bold">
            Kouya Arakaki&apos;s Portfolio
          </h1>
          <p className="text-base text-white font-medium font-inter text-right">
            Software Engineer
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-10">
        <div className="bg-white/20 backdrop-blur-md p-3 rounded-lg">
          <p className="text-base text-white/80 font-inter-bold">
            📍 {images[currentImageIndex].location}
          </p>
        </div>
      </div>

      <button
        onClick={handlePrevious}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md hover:bg-white/30 p-3 rounded-full transition-all"
        aria-label="Previous image"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md hover:bg-white/30 p-3 rounded-full transition-all"
        aria-label="Next image"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </section>
  );
}

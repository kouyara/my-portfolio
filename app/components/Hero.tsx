'use client';

import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { basePath } from '@/app/lib/assetPath';

const images = [
  {
    src: basePath('/ocean.jpg'),
    alt: 'Ocean background',
    location: '沖縄県 北谷町',
  },
  {
    src: basePath('/ocean2.jpg'),
    alt: 'Ocean background 2',
    location: '沖縄県 西原町',
  },
  {
    src: basePath('/ocean3.jpg'),
    alt: 'Ocean background 3',
    location: '沖縄県 浦添市',
  },
  {
    src: basePath('/ocean4.jpg'),
    alt: 'Ocean background 4',
    location: '沖縄県 名護市',
  },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
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
          <React.Fragment key={index}>
            <Image
              key={`${image.src}-blur`}
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover transition-opacity duration-1000 filter blur-xl md:hidden ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              className={`object-contain md:object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              } ${isInitialLoad ? 'brightness-80' : ''}`}
              priority={index === 0}
            />
          </React.Fragment>
        ))}
      </div>

      <div
        className={`absolute z-10 transition-all duration-1000 ${
          isInitialLoad
            ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'
            : `
                top-3
                left-3
                translate-x-0
                translate-y-0
                md:-translate-y-23
                text-left
                md:top-[calc(100%-6rem)]
                md:left-8
              `
        }`}
      >
        <div className="space-y-1 md:space-y-4 bg-white/20 backdrop-blur-md p-5 rounded-4xl w-75">
          <p className="text-sm md:text-base text-white font-medium font-inter">
            Welcome to
          </p>
          <h1 className="text-xl md:text-4xl font-bold text-white font-inter-bold">
            Kouya Arakaki&apos;s Portfolio
          </h1>
          <p className="text-sm md:text-base text-white font-medium font-inter text-right">
            Software Engineer
          </p>
        </div>
      </div>

      <div className="absolute bottom-3 right-3 md:bottom-8 md:right-8 z-5">
        <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl">
          <p className="text-sm md:text-base text-white/80 font-inter-bold">
            📍 {images[currentImageIndex].location}
          </p>
        </div>
      </div>

      <button
        onClick={handlePrevious}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-5 bg-white/20 backdrop-blur-md hover:bg-white/30 p-3 rounded-full transition-all"
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
        className="absolute right-8 top-1/2 -translate-y-1/2 z-5 bg-white/20 backdrop-blur-md hover:bg-white/30 p-3 rounded-full transition-all"
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

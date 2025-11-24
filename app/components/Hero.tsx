'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [showContent, setShowContent] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(false);
  const [accumulatedScroll, setAccumulatedScroll] = useState(0);
  const [contentLocked, setContentLocked] = useState(false);

  useEffect(() => {
    const checkInitialPosition = () => {
      if (window.scrollY < 10) {
        setScrollLocked(true);
        setShowContent(false);
      } else {
        setScrollLocked(false);
        setShowContent(true);
        setContentLocked(false);
      }
    };

    checkInitialPosition();
  }, []);

  useEffect(() => {
    const SCROLL_THRESHOLD = 300;
    const CONTENT_LOCK_THRESHOLD = 500;

    const handleWheel = (e: WheelEvent) => {
      if (scrollLocked) {
        e.preventDefault();

        setAccumulatedScroll((prev) => {
          const newScroll = prev + e.deltaY;

          if (newScroll > SCROLL_THRESHOLD) {
            setScrollLocked(false);
            setShowContent(true);
            setContentLocked(true);
            return 0;
          }

          if (newScroll < 0) {
            return 0;
          }

          return newScroll;
        });
      } else if (contentLocked) {
        e.preventDefault();

        setAccumulatedScroll((prev) => {
          const newScroll = prev + e.deltaY;

          if (newScroll > CONTENT_LOCK_THRESHOLD) {
            setContentLocked(false);
            return 0;
          }

          if (newScroll < 0) {
            setContentLocked(false);
            return 0;
          }

          return newScroll;
        });
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 10 && !scrollLocked && !contentLocked) {
        setShowContent(false);
        setScrollLocked(true);
        setContentLocked(false);
        setAccumulatedScroll(0);
      }
    };

    if (scrollLocked || contentLocked) {
      window.addEventListener('wheel', handleWheel, { passive: false });
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollLocked, contentLocked]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative mt-16 pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/ocean.jpg"
          alt="Ocean background"
          fill
          className="object-cover"
          priority
        />
        <div
          className={`absolute inset-0 bg-black/30 dark:bg-black/50 transition-opacity duration-700 ${
            showContent ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <div
          className={`space-y-8 transition-all duration-700 ${
            showContent
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-4">
            <p className="text-xl text-white font-medium drop-shadow-lg font-inter">
              Welcome to
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-2xl font-inter-bold">
              Kouya Arakaki&apos;s
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-2xl font-inter-bold">
              Portfolio
            </h1>
            <p className="text-2xl sm:text-3xl text-white font-medium drop-shadow-lg font-inter">
              Software Engineer
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-white rounded-full font-medium bg-primary-hover transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white-custom/80 backdrop-blur-sm dark:bg-gray-800/80 text-white dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-full font-bold hover-border-primary transition-colors shadow-lg"
            >
              Get In Touch
            </a>
          </div>

          <div className="pt-12 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-white drop-shadow-lg"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

        {!showContent && (
          <div
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce"
            style={{ animationDuration: '2s' }}
          >
            <div className="text-white text-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-3xl">
              <p className="font-bold text-base mb-2 drop-shadow-lg">
                Scroll Down
              </p>
              <svg
                className="w-6 h-6 mx-auto drop-shadow-lg"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

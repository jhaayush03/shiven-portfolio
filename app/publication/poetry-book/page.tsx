"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  BookOpen,
  Heart,
  Feather,
  ShoppingCart,
  ExternalLink,
  Award,
  Users,
} from "lucide-react";

export default function PoetryBookPage() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const themes = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Emotional Conflicts",
      description: "Exploring the depths of human emotions through verse",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Human Connection",
      description: "Stories of relationships, bonds, and shared experiences",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: <Feather className="w-6 h-6" />,
      title: "Personal Growth",
      description: "A journey through self-discovery and transformation",
      color: "from-amber-500 to-orange-500",
    },
  ];

  const bookImages = [
    { id: 1, alt: "Book Cover", position: "top-left", src: "/book-1.jpg" },
    { id: 2, alt: "Inside Pages", position: "top-right", src: "/book-2.jpg" },
    {
      id: 3,
      alt: "Poetry Spread",
      position: "bottom-left",
      src: "/book-3.jpg",
    },
    {
      id: 4,
      alt: "Author Edition",
      position: "bottom-right",
      src: "/book-4.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-rose-950 text-white overflow-hidden">
      {/* Animated background - poetic theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles effect */}
        <div
          className="absolute w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-3xl"
          style={{
            left: `${mousePos.x * 0.06}px`,
            top: `${mousePos.y * 0.06}px`,
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] bg-rose-500/12 rounded-full blur-3xl"
          style={{
            right: `${(windowSize.width - mousePos.x) * 0.04}px`,
            top: `${Math.sin(scrollY * 0.001) * 100 + mousePos.y * 0.05}px`,
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl"
          style={{
            left: "40%",
            bottom: `${
              Math.cos(scrollY * 0.001) * 100 +
              (windowSize.height - mousePos.y) * 0.03
            }px`,
            transition: "all 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 px-4 md:px-8 lg:px-16">
        {/* Hero Section */}
        <div className="mb-32 text-center">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-purple-500/20 border border-purple-400/30 mb-8"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
              opacity: Math.max(0.5, 1 - scrollY / 800),
            }}
          >
            <Feather className="w-5 h-5 text-purple-300" />
            <span className="text-purple-200">Published Author</span>
          </div>

          <div
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{
              transform: `translateY(${scrollY * 0.2}px) scale(${Math.max(
                0.95,
                1 - scrollY / 3000
              )})`,
              opacity: Math.max(0.3, 1 - scrollY / 600),
            }}
          >
            <span className="bg-gradient-to-r from-rose-300 via-purple-300 to-amber-300 bg-clip-text text-transparent">
              Echoes of a
              <br />
              Paper Heart
            </span>
          </div>

          <p
            className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto mb-8"
            style={{
              transform: `translateY(${scrollY * 0.15}px)`,
            }}
          >
            A published anthology of original poems capturing emotional
            conflicts, human connection, and the journey of personal growth
          </p>

          {/* Principal's Preface Badge */}
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-900/40 to-orange-900/40 border border-amber-400/30"
            style={{
              transform: `translateY(${scrollY * 0.12}px)`,
            }}
          >
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-amber-200">Preface by School Principal</span>
          </div>
        </div>

        {/* Book Images Gallery */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-300 to-rose-300 bg-clip-text text-transparent">
            Book Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {bookImages.map((img, index) => (
              <div
                key={img.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredImage(img.id)}
                onMouseLeave={() => setHoveredImage(null)}
                style={{
                  transform: `translateY(${
                    Math.sin((scrollY + index * 150) * 0.003) * 20
                  }px)`,
                }}
              >
                <div
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden"
                  style={{
                    transform:
                      hoveredImage === img.id
                        ? "scale(1.05) rotateY(5deg)"
                        : "scale(1) rotateY(0deg)",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {/* Glowing border */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500 via-rose-500 to-amber-500 rounded-2xl"
                    style={{
                      opacity: hoveredImage === img.id ? 1 : 0.4,
                      transition: "opacity 0.4s ease-out",
                    }}
                  />

                  {/* Image container */}
                  <div className="absolute inset-1 bg-gradient-to-br from-slate-900 to-purple-900 rounded-xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-purple-900/30 via-slate-800 to-rose-900/30 relative">
                      {/* Pattern overlay */}
                      <div className="absolute inset-0 opacity-20">
                        <svg className="w-full h-full">
                          <defs>
                            <pattern
                              id={`book-pattern-${img.id}`}
                              width="20"
                              height="20"
                              patternUnits="userSpaceOnUse"
                            >
                              <circle
                                cx="10"
                                cy="10"
                                r="1"
                                fill="white"
                                opacity="0.5"
                              />
                            </pattern>
                          </defs>
                          <rect
                            width="100%"
                            height="100%"
                            fill={`url(#book-pattern-${img.id})`}
                          />
                        </svg>
                      </div>

                      {/* Book Images - Add your images to /public folder */}
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback if image doesn't exist
                          e.currentTarget.style.display = "none";
                          const fallback = e.currentTarget
                            .nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      {/* Fallback placeholder */}
                      <div className="absolute inset-0 items-center justify-center p-6 hidden">
                        <div className="text-center">
                          <BookOpen className="w-16 h-16 mx-auto mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                          <p className="text-sm text-gray-400">{img.alt}</p>
                          <p className="text-xs text-gray-500 mt-2">
                            Add {img.src} to /public
                          </p>
                        </div>
                      </div>

                      {/* Hover overlay */}
                      {hoveredImage === img.id && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-center pb-4">
                          <span className="text-white font-medium">
                            {img.alt}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Decorative corner */}
                  {hoveredImage === img.id && (
                    <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-purple-400 rounded-tr-lg animate-pulse" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Themes Section */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-amber-300 to-rose-300 bg-clip-text text-transparent">
            Poetic Themes
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {themes.map((theme, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  transform: `translateY(${scrollY * 0.03 + index * 8}px)`,
                }}
              >
                <div className="relative p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden h-full">
                  {/* Animated gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${theme.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Ripple effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-1/2 left-1/2 w-0 h-0 group-hover:w-full group-hover:h-full bg-white/5 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000" />
                  </div>

                  <div className="relative z-10 text-center">
                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${theme.color} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      {theme.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-purple-200 group-hover:text-white transition-colors duration-300">
                      {theme.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {theme.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Purchase Section */}
        <div className="mb-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-rose-300 to-purple-300 bg-clip-text text-transparent">
              Get Your Copy
            </h2>
            <p className="text-center text-gray-300 mb-12 text-lg">
              Available now on leading online platforms
            </p>

            <div
              className="relative p-8 md:p-12 rounded-3xl backdrop-blur-md bg-gradient-to-br from-purple-900/40 to-rose-900/40 border-2 border-purple-500/50 hover:border-purple-400 transition-all duration-500"
              style={{
                transform: `translateY(${scrollY * 0.08}px)`,
                boxShadow: "0 20px 60px rgba(168, 85, 247, 0.2)",
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Amazon Button */}
                <a
                  href="https://www.amazon.in/dp/9358964693?&linkCode=sl1&tag=19910ff8-21&linkId=ff6d520dd0c737b58d7f521bbb4f3f95&language=en_IN&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  onMouseEnter={() => setHoveredButton("amazon")}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <div
                    className="relative p-6 rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 transition-all duration-300 overflow-hidden group cursor-pointer"
                    style={{
                      transform:
                        hoveredButton === "amazon" ? "scale(1.05)" : "scale(1)",
                      boxShadow:
                        hoveredButton === "amazon"
                          ? "0 10px 40px rgba(251, 191, 36, 0.4)"
                          : "none",
                    }}
                  >
                    {/* Shine effect */}
                    {hoveredButton === "amazon" && (
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        style={{
                          animation: "shine 1.5s ease-in-out infinite",
                        }}
                      />
                    )}

                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <ShoppingCart className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-2xl font-bold mb-1">Amazon</h3>
                        <p className="text-sm opacity-90">Shop now</p>
                      </div>
                      <ExternalLink className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </div>
                </a>

                {/* Flipkart Button */}
                <a
                  href="https://www.flipkart.com/product/p/itme?pid=9789358964691"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  onMouseEnter={() => setHoveredButton("flipkart")}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <div
                    className="relative p-6 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 overflow-hidden group cursor-pointer"
                    style={{
                      transform:
                        hoveredButton === "flipkart"
                          ? "scale(1.05)"
                          : "scale(1)",
                      boxShadow:
                        hoveredButton === "flipkart"
                          ? "0 10px 40px rgba(59, 130, 246, 0.4)"
                          : "none",
                    }}
                  >
                    {/* Shine effect */}
                    {hoveredButton === "flipkart" && (
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        style={{
                          animation: "shine 1.5s ease-in-out infinite",
                        }}
                      />
                    )}

                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <ShoppingCart className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-2xl font-bold mb-1">Flipkart</h3>
                        <p className="text-sm opacity-90">Shop now</p>
                      </div>
                      <ExternalLink className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </div>
                </a>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-rose-500/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div
          className="mb-32 max-w-3xl mx-auto text-center"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        >
          <div className="relative p-8 md:p-12 rounded-2xl backdrop-blur-md bg-white/5 border border-purple-500/30">
            <Feather className="w-12 h-12 mx-auto mb-6 text-purple-400 opacity-50" />
            <blockquote className="text-xl md:text-2xl text-purple-200 italic leading-relaxed">
              "A journey through the landscapes of emotion, connection, and
              growth—captured in verse"
            </blockquote>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="flex justify-center py-20"
          style={{
            opacity: Math.max(0, 1 - scrollY / 400),
          }}
        >
          <ChevronDown className="w-8 h-8 animate-bounce text-purple-400" />
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-32 py-12 border-t border-purple-500/20 text-center text-gray-400">
        <p>Part of the Creative Journey | Omisaa Bansal</p>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}

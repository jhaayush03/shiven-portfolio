"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function SwayamSutraPage() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isImageHovered, setIsImageHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const contentPoints = [
    "Empowering women and promoting sustainability through dual-purpose initiatives",
    "Employed 15+ rural women seeking money to stitch cotton bags in Grades 11-12",
    "Set up machinery at workplaces near their homes for livelihood without disrupting household responsibilities",
    "Organised sessions on Financial literacy, self-defence and essential empowerment skills",
    "Built partnerships with Vaish World Foundation for product distribution and community outreach",
    "Managed operations, supervised production and created a supportive work environment",
    "Secured recognition as Youth President, Vaish World Foundation for outstanding community leadership",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          style={{
            left: `${mousePos.x - 192}px`,
            top: `${mousePos.y - 192}px`,
            transition: "all 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"
          style={{
            left: `${mousePos.x - 144}px`,
            top: `${mousePos.y + 100 - 144}px`,
            transition: "all 0.5s ease-out",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 px-4 md:px-8 lg:px-16">
        {/* Header Section */}
        <div className="mb-32">
          <div
            className="text-7xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: Math.max(0.3, 1 - scrollY / 500),
            }}
          >
            SwayamSutra
          </div>
          <p
            className="text-xl md:text-2xl text-purple-200 max-w-2xl"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          >
            Founder & Community Leader
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          {/* Image Section */}
          <a
            href="https://www.swayamsutra.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group cursor-pointer block"
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              {/* Animated border */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-2xl"
                style={{
                  opacity: isImageHovered ? 1 : 0.3,
                  transition: "opacity 0.3s ease-out",
                }}
              />

              {/* Image container */}
              <div
                className="absolute inset-1 bg-gradient-to-br from-purple-900 to-slate-900 rounded-xl overflow-hidden"
                style={{
                  transform: isImageHovered ? "scale(1.02)" : "scale(1)",
                  transition: "transform 0.3s ease-out",
                }}
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-800 via-slate-800 to-slate-900 relative">
                  {/* Placeholder with gradient and patterns */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
                    <svg className="absolute w-full h-full opacity-10">
                      <defs>
                        <pattern
                          id="grid"
                          width="40"
                          height="40"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke="white"
                            strokeWidth="0.5"
                          />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>

                  <div className="absolute inset-0 z-10">
                    <img
                      src="/swayamsutra.jpg" // <- your image path here
                      alt="SwayamSutra Initiative"
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        isImageHovered ? "scale-105" : "scale-100"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              {isImageHovered && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl animate-pulse" />
              )}
            </div>

            {/* Info box below image */}
            <div
              className="mt-8 p-6 rounded-xl backdrop-blur-md bg-white/5 border border-purple-500/30"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
              }}
            >
              <h3 className="text-xl font-bold text-purple-300 mb-2">Impact</h3>
              <p className="text-gray-300">
                15+ rural women empowered through sustainable livelihoods and
                skill development
              </p>
            </div>
          </a>

          {/* Content Section */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Founder & Community Leader
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            </div>

            {/* Content points with stagger effect */}
            <div className="space-y-6">
              {contentPoints.map((point, index) => (
                <div
                  key={index}
                  className="group flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-purple-500/50"
                  style={{
                    transform: `translateY(${Math.max(
                      0,
                      scrollY * 0.05 - index * 10
                    )}px)`,
                    opacity: 1 - Math.max(0, (scrollY - 800) / 300),
                  }}
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-3 group-hover:w-3 transition-all duration-300" />
                  <p className="text-gray-300 group-hover:text-purple-200 transition-colors duration-300">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recognition Section */}
        <div className="mb-32 mt-32">
          <div
            className="p-8 md:p-12 rounded-2xl backdrop-blur-md bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/50 hover:border-purple-500/100 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
            style={{
              transform: `translateY(${scrollY * 0.15}px)`,
            }}
          >
            <div className="flex items-start gap-6">
              <div className="text-4xl">🏆</div>
              <div>
                <h3 className="text-2xl font-bold text-purple-300 mb-3">
                  Youth President Recognition
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Secured recognition as{" "}
                  <span className="text-purple-400 font-semibold">
                    Youth President, Vaish World Foundation
                  </span>{" "}
                  for outstanding community leadership, demonstrating
                  exceptional commitment to women empowerment and sustainable
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="flex justify-center py-20 opacity-50 hover:opacity-100 transition-opacity"
          style={{
            opacity: Math.max(0, 1 - scrollY / 300),
          }}
        >
          <ChevronDown className="w-8 h-8 animate-bounce text-purple-400" />
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-32 py-12 border-t border-purple-500/20 text-center text-gray-400">
        <p>Part of the Leadership Journey | Omisaa Bansal</p>
      </div>
    </div>
  );
}

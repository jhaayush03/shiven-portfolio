"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Award, Users, Trophy, Sparkles } from "lucide-react";

export default function TheatreClubPage() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
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

  const achievements = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Theatron 2025",
      description:
        "Organised Delhi NCR's largest theatre festival with a footfall of 1500+ theatre enthusiasts and 45+ schools participating in 12 different competitions",
      color: "from-rose-500 to-orange-500",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Leadership Excellence",
      description:
        "Collaborated with sponsors and school partners ensuring their participation. Performed as one of the leads in front of Principal, Chairman of the DPS Society and other esteemed members twice",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Competition Success",
      description:
        "Won various inter-school theatre competitions and selected to represent the school at New Zealand High Commission Sustainability Carnival by performing a mime promoting environmental awareness",
      color: "from-amber-500 to-yellow-500",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Recognition & Growth",
      description:
        "Awarded a Pin by school to honour achievements in the inter school competitions. Spearheaded the Expressions Theatre Club Inductions 2025-2026",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  const images = [
    { id: 1, alt: "Street Plays", src: "/i17.jpg", rotation: -5 },
    { id: 2, alt: "Theatron'25", src: "/i16.jpg", rotation: 3 },
    { id: 3, alt: "Performance", src: "/i13.jpg", rotation: -3 },
    { id: 4, alt: "Team leadership", src: "/i15.jpg", rotation: 5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-rose-950 to-purple-950 text-white overflow-hidden">
      {/* Dynamic background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] bg-rose-500/20 rounded-full blur-3xl"
          style={{
            left: `${mousePos.x * 0.05}px`,
            top: `${mousePos.y * 0.05}px`,
            transition: "all 0.8s ease-out",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-3xl"
          style={{
            right: `${(windowSize.width - mousePos.x) * 0.03}px`,
            bottom: `${(windowSize.height - mousePos.y) * 0.03}px`,
            transition: "all 1s ease-out",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl"
          style={{
            left: "50%",
            top: `${mousePos.y * 0.02}px`,
            transform: "translateX(-50%)",
            transition: "all 0.6s ease-out",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 px-4 md:px-8 lg:px-16">
        {/* Hero Section */}
        <div className="mb-24">
          <div
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-rose-300 via-amber-300 to-purple-300 bg-clip-text text-transparent leading-tight"
            style={{
              transform: `translateY(${scrollY * 0.25}px) rotateX(${
                scrollY * 0.02
              }deg)`,
              opacity: Math.max(0.2, 1 - scrollY / 600),
            }}
          >
            Expressions
            <br />
            Theatre Club
          </div>
          <div
            className="flex items-center gap-4 text-xl md:text-2xl text-rose-200"
            style={{
              transform: `translateY(${scrollY * 0.15}px)`,
            }}
          >
            <div className="w-12 h-1 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full" />
            <span>President | DPS RK Puram | Grade 10-12</span>
          </div>
        </div>

        {/* Image Gallery with unique hover effects */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-rose-300 to-amber-300 bg-clip-text text-transparent">
            Journey Highlights
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {images.map((img, index) => (
              <div
                key={img.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredImage(img.id)}
                onMouseLeave={() => setHoveredImage(null)}
                style={{
                  transform: `translateY(${
                    scrollY * 0.05 * (index % 2 === 0 ? 1 : -1)
                  }px)`,
                }}
              >
                <div
                  className="relative aspect-square rounded-2xl overflow-hidden transition-all duration-500"
                  style={{
                    transform:
                      hoveredImage === img.id
                        ? `rotate(0deg) scale(1.05)`
                        : `rotate(${img.rotation}deg) scale(1)`,
                  }}
                >
                  {/* Animated border glow */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-rose-500 via-amber-500 to-purple-500 rounded-2xl"
                    style={{
                      opacity: hoveredImage === img.id ? 1 : 0.4,
                      transition: "opacity 0.3s ease-out",
                    }}
                  />

                  {/* Image container */}
                  <div className="absolute inset-1 bg-gradient-to-br from-slate-900 to-purple-900 rounded-xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-rose-800/30 via-slate-800 to-purple-800/30 flex items-center justify-center relative">
                      {/* Decorative pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <svg className="w-full h-full">
                          <defs>
                            <pattern
                              id={`pattern-${img.id}`}
                              width="30"
                              height="30"
                              patternUnits="userSpaceOnUse"
                            >
                              <circle
                                cx="15"
                                cy="15"
                                r="1"
                                fill="white"
                                opacity="0.3"
                              />
                            </pattern>
                          </defs>
                          <rect
                            width="100%"
                            height="100%"
                            fill={`url(#pattern-${img.id})`}
                          />
                        </svg>
                      </div>

                      {/* Actual Image */}
                      <img
                        src={img.src}
                        alt={img.alt}
                        className={`relative z-10 w-full h-full object-cover transition-all duration-500 ${
                          hoveredImage === img.id
                            ? "opacity-70 scale-105"
                            : "opacity-100"
                        }`}
                      />

                      {/* Hover overlay */}
                      {hoveredImage === img.id && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center pb-6 animate-pulse">
                          <p className="text-white font-medium">{img.alt}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Corner accent */}
                  {hoveredImage === img.id && (
                    <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-400 rounded-tr-lg animate-pulse" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-amber-300 via-rose-300 to-purple-300 bg-clip-text text-transparent">
            Leadership & Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  transform: `translateY(${
                    scrollY * 0.03 + index * 5
                  }px) rotateY(${
                    (mousePos.x - windowSize.width / 2) * 0.01
                  }deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden group-hover:shadow-2xl group-hover:shadow-rose-500/20">
                  {/* Animated background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Sliding line effect */}
                  <div
                    className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${achievement.color} w-0 group-hover:w-full transition-all duration-500`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${achievement.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {achievement.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-rose-200 group-hover:text-white transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute bottom-2 right-2 w-16 h-16 border-b-2 border-r-2 border-white/20 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section /}
        <div
          className="mb-32"
          style={{
            transform: `translateY(${scrollY * 0.08}px)`,
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "1500+", label: "Theatre Enthusiasts" },
              { number: "45+", label: "Participating Schools" },
              { number: "12", label: "Competitions" },
              { number: "2025", label: "Theatron Festival" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl backdrop-blur-md bg-white/5 border border-rose-500/30 hover:border-rose-500/60 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-300 to-amber-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="flex justify-center py-20"
          style={{
            opacity: Math.max(0, 1 - scrollY / 400),
          }}
        >
          <ChevronDown className="w-8 h-8 animate-bounce text-rose-400" />
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-32 py-12 border-t border-rose-500/20 text-center text-gray-400">
        <p>Part of the Leadership Journey | Omisaa Bansal</p>
      </div>
    </div>
  );
}

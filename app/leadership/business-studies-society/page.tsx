"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Heart,
  Users,
  Book,
  Droplets,
  Award,
  ExternalLink,
  X,
} from "lucide-react";

export default function InteractClubPage() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
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

  const initiatives = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Volunteering",
      description: "Helped organise various Intra-Section competitions",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Awards",
      description:
        "Won 2nd position at Ramjas International School's Commerce Festival under the idea pitching category",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "School Carnival",
      description: "Volunteered at DPSRKP's Commerce Festival",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const certificates = [
    { id: 1, title: "Leadership Certificate", year: "2025" },
    { id: 2, title: "Community Service Award", year: "2024" },
    { id: 3, title: "Literacy Campaign Recognition", year: "2024" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
          style={{
            left: `${Math.sin(scrollY * 0.001) * 200 + mousePos.x * 0.1}px`,
            top: `${Math.cos(scrollY * 0.001) * 200 + mousePos.y * 0.1}px`,
            transition: "all 0.5s ease-out",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-teal-500/15 rounded-full blur-3xl"
          style={{
            right: `${
              Math.cos(scrollY * 0.002) * 150 +
              (windowSize.width - mousePos.x) * 0.08
            }px`,
            bottom: `${
              Math.sin(scrollY * 0.002) * 150 +
              (windowSize.height - mousePos.y) * 0.08
            }px`,
            transition: "all 0.6s ease-out",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 px-4 md:px-8 lg:px-16">
        {/* Hero Section */}
        <div className="mb-32">
          <div
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent leading-tight"
            style={{
              transform: `translateY(${scrollY * 0.3}px) scale(${Math.max(
                0.9,
                1 - scrollY / 2000
              )})`,
              opacity: Math.max(0.3, 1 - scrollY / 500),
            }}
          >
            Member of Business Studies Society
          </div>
          <div
            className="flex flex-wrap items-center gap-4 text-lg md:text-xl text-emerald-200"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Member</span>
            </div>
            <div className="w-px h-6 bg-emerald-500/30" />
            <span>DPS RK Puram</span>
            <div className="w-px h-6 bg-emerald-500/30" />
            <span>Grade 11-12</span>
          </div>
        </div>

        {/* Social Impact Project - Featured */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
            Featured Social Impact Project
          </h2>
          <div
            className="block"
            onMouseEnter={() => setHoveredProject(true)}
            onMouseLeave={() => setHoveredProject(false)}
          >
            <div
              className="relative p-8 md:p-12 rounded-3xl backdrop-blur-md bg-gradient-to-br from-emerald-900/40 to-teal-900/40 border-2 border-emerald-500/50 hover:border-emerald-400 transition-all duration-500 overflow-hidden group"
              style={{
                transform: `translateY(${scrollY * 0.1}px) rotateX(${
                  hoveredProject ? "5deg" : "0deg"
                })`,
                transformStyle: "preserve-3d",
                boxShadow: hoveredProject
                  ? "0 20px 60px rgba(16, 185, 129, 0.3)"
                  : "0 10px 30px rgba(16, 185, 129, 0.1)",
              }}
            >
              {/* Animated background waves */}
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20"
                  style={{
                    transform: `translateX(${hoveredProject ? "0%" : "-100%"})`,
                    transition: "transform 1s ease-out",
                  }}
                />
              </div>

              {/* Content Grid */}
              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                {/* Left: Project Info */}
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 mb-6">
                    <Heart className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm text-emerald-300">
                      Commerce Society & Entrepreneurship Initiatives
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-200 group-hover:text-white transition-colors duration-300">
                    Business Innovation
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    Helped organize multiple intra-section commerce
                    competitions, encouraging financial literacy and teamwork.
                    Secured 2nd position at Ramjas International School's
                    Commerce Festival in the Idea Pitching category. Also
                    volunteered at DPS RK Puram's Commerce Festival, assisting
                    with event coordination and participant management.
                  </p>
                </div>

                {/* Right: Visual Element */}
                <div className="relative">
                  <div
                    className="aspect-square rounded-2xl overflow-hidden cursor-pointer"
                    onClick={() => setIsImageModalOpen(true)}
                    style={{
                      transform: hoveredProject
                        ? "scale(1.05) rotate(-2deg)"
                        : "scale(1) rotate(0deg)",
                      transition: "transform 0.5s ease-out",
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-emerald-800/50 via-teal-800/50 to-cyan-800/50 flex items-center justify-center relative">
                      {/* Decorative grid */}
                      <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full">
                          <defs>
                            <pattern
                              id="project-grid"
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
                          <rect
                            width="100%"
                            height="100%"
                            fill="url(#project-grid)"
                          />
                        </svg>
                      </div>

                      {/* Icon/Emoji */}
                      <img
                        src="/ex3.png"
                        alt="Business Innovation"
                        className="relative z-10 w-3/4 h-auto object-contain mx-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Impact overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-emerald-300 mb-1">
                            2nd
                          </div>
                          <div className="text-sm text-gray-300">
                            Position
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div
                    className="absolute -top-4 -right-4 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg"
                    style={{
                      transform: hoveredProject
                        ? "scale(1.1) rotate(5deg)"
                        : "scale(1) rotate(-5deg)",
                      transition: "transform 0.3s ease-out",
                    }}
                  >
                    <span className="font-bold text-white">Featured</span>
                  </div>
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-emerald-400/50 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-emerald-400/50 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* Initiatives Grid /}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
            Community Initiatives
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  transform: `translateY(${
                    Math.sin((scrollY + index * 100) * 0.003) * 20
                  }px)`,
                }}
              >
                <div className="relative p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:border-emerald-400/50 transition-all duration-500 h-full overflow-hidden">
                  {/* Animated background /}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${initiative.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Ripple effect /}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1/2 left-1/2 w-0 h-0 group-hover:w-full group-hover:h-full bg-emerald-500/5 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700" />
                  </div>

                  <div className="relative z-10">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${initiative.color} mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      {initiative.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-emerald-200 group-hover:text-white transition-colors duration-300">
                      {initiative.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {initiative.description}
                    </p>
                  </div>

                  {/* Progress bar animation /}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 w-0 group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div
          className="mb-32"
          style={{
            transform: `translateY(${scrollY * 0.08}px)`,
          }}
        >
          <div className="p-8 md:p-12 rounded-3xl backdrop-blur-md bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-500/50">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
              Community Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "₹3000+", label: "Funds Raised" },
                { number: "100+", label: "Students Engaged" },
                { number: "5+", label: "Initiatives Led" },
                { number: "4", label: "Years of Service" },
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-emerald-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="flex justify-center py-20"
          style={{
            opacity: Math.max(0, 1 - scrollY / 400),
          }}
        >
          <ChevronDown className="w-8 h-8 animate-bounce text-emerald-400" />
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-32 py-12 border-t border-emerald-500/20 text-center text-gray-400">
        <p>Part of the Leadership Journey | Omisaa Bansal</p>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsImageModalOpen(false)}
        >
          <button
            onClick={() => setIsImageModalOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-white transition-colors duration-300 z-10 group"
          >
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
          </button>
          <div
            className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/ex3.png"
              alt="Business Innovation - Full Size"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

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
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
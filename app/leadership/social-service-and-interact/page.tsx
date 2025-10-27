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
} from "lucide-react";

export default function InteractClubPage() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState(false);
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
      icon: <Users className="w-6 h-6" />,
      title: "Youth Leadership Assembly",
      description:
        "Set up a game stall at Youth Delhi Interact Leadership Assembly and raised Rs3000+",
      color: "from-emerald-500 to-teal-500",
      amount: "₹3000+",
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Cleanliness Drive",
      description:
        "Organised Cleanliness drive in school to prevent water stagnation",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Adult Literacy Campaign",
      description:
        "Participated in the Adult Literacy Campaign and took the responsibility to teach illiterate adults",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "School Carnival",
      description:
        "Set up a game stall at our school's annual carnival to promote our club",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Leadership",
      description: "Spearheaded the Social Service League Inductions 2025-2026",
      color: "from-purple-500 to-indigo-500",
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
            Interact Club &<br />
            Social Service League
          </div>
          <div
            className="flex flex-wrap items-center gap-4 text-lg md:text-xl text-emerald-200"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Core Member</span>
            </div>
            <div className="w-px h-6 bg-emerald-500/30" />
            <span>DPS RK Puram</span>
            <div className="w-px h-6 bg-emerald-500/30" />
            <span>Grade 9-12</span>
          </div>
        </div>

        {/* Social Impact Project - Featured */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
            Featured Social Impact Project
          </h2>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            onMouseEnter={() => setHoveredProject(true)}
            onMouseLeave={() => setHoveredProject(false)}
          >
            <div
              className="relative p-8 md:p-12 rounded-3xl backdrop-blur-md bg-gradient-to-br from-emerald-900/40 to-teal-900/40 border-2 border-emerald-500/50 hover:border-emerald-400 transition-all duration-500 overflow-hidden group cursor-pointer"
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
                      Community Impact
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-200 group-hover:text-white transition-colors duration-300">
                    Adult Literacy Campaign
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    Leading educational initiative to empower adults through
                    literacy. Taking responsibility to teach and transform lives
                    through education, making a lasting impact in the community.
                  </p>
                  <div className="flex items-center gap-3 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                    <span className="font-semibold">View Project Details</span>
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Right: Visual Element */}
                <div className="relative">
                  <div
                    className="aspect-square rounded-2xl overflow-hidden"
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

                      {/* Icon/Image */}
                      <img
                        src="/image202.jpeg"
                        alt="Adult Literacy Campaign"
                        className="relative z-10 w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Impact overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-emerald-300 mb-1">
                            100+
                          </div>
                          <div className="text-sm text-gray-300">
                            Adults Educated
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
          </a>
        </div>

        {/* Initiatives Grid */}
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
                  {/* Animated background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${initiative.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Ripple effect */}
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
                    {initiative.amount && (
                      <div className="mt-4 inline-flex px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30">
                        <span className="text-emerald-300 font-bold">
                          {initiative.amount}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Progress bar animation */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 w-0 group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section /}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Certificates & Recognition
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredCert(cert.id)}
                onMouseLeave={() => setHoveredCert(null)}
                style={{
                  transform: `translateY(${scrollY * 0.05}px) rotateY(${
                    hoveredCert === cert.id ? "10deg" : "0deg"
                  })`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.5s ease-out",
                }}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  {/* Glowing border /}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl"
                    style={{
                      opacity: hoveredCert === cert.id ? 1 : 0.4,
                      transition: "opacity 0.3s ease-out",
                    }}
                  />

                  {/* Certificate container /}
                  <div className="absolute inset-1 bg-gradient-to-br from-slate-900 to-emerald-900 rounded-xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-emerald-800/20 via-slate-800 to-teal-800/20 p-6 flex flex-col items-center justify-center relative">
                      {/* Decorative border pattern /}
                      <div className="absolute inset-4 border-2 border-emerald-500/30 rounded-lg" />

                      {/* Content /}
                      <div className="relative z-10 text-center">
                        <Award className="w-16 h-16 mx-auto mb-4 text-emerald-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                        <h3 className="text-lg font-bold text-emerald-200 mb-2 group-hover:text-white transition-colors duration-300">
                          {cert.title}
                        </h3>
                        <div className="px-4 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 inline-block">
                          <span className="text-sm text-emerald-300">
                            {cert.year}
                          </span>
                        </div>
                      </div>

                      {/* Shine effect /}
                      {hoveredCert === cert.id && (
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          style={{
                            animation: "shine 1.5s ease-in-out infinite",
                          }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Floating sparkle /}
                  {hoveredCert === cert.id && (
                    <div className="absolute top-4 right-4 text-2xl animate-bounce">
                      ✨
                    </div>
                  )}
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
                { number: "100+", label: "Adults Taught" },
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

      {/* Custom shine animation */}
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

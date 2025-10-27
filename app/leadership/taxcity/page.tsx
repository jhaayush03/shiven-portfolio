"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  TrendingUp,
  Award,
  Users,
  FileText,
  Download,
  ExternalLink,
  Landmark,
} from "lucide-react";

export default function VPFinancePage() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [certHovered, setCertHovered] = useState(false);
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
      number: "9,250+",
      label: "Students Impacted",
      description: "Across 14 states nationwide",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      number: "₹5.5L+",
      label: "Revenue Generated",
      description: "Through strategic initiatives",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Landmark className="w-6 h-6" />,
      number: "14",
      label: "States Reached",
      description: "Pan-India educational impact",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const responsibilities = [
    {
      title: "Tax Education Innovation",
      description:
        "Created an engaging tax education board game to make financial literacy accessible and fun for students",
      icon: "🎮",
    },
    {
      title: "National Recognition",
      description:
        "Played a vital role in backend work which helped organization gain national recognition from the Honourable Minister of Education in Rajasthan",
      icon: "🏆",
    },
    {
      title: "Strategic Leadership",
      description:
        "Appointed Vice President Finance and Vice President Taxation to honour meticulous work and dedication",
      icon: "⚡",
    },
    {
      title: "Pan-India Operations",
      description:
        "Managed financial operations and taxation compliance across 14 states, ensuring smooth nationwide execution",
      icon: "🌏",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white overflow-hidden">
      {/* Dynamic background with financial theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"
          style={{
            left: `${mousePos.x * 0.08 - 250}px`,
            top: `${mousePos.y * 0.08 - 250}px`,
            transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-3xl"
          style={{
            right: `${(windowSize.width - mousePos.x) * 0.05}px`,
            top: `${mousePos.y * 0.06}px`,
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        <div
          className="absolute w-[350px] h-[350px] bg-green-500/10 rounded-full blur-3xl"
          style={{
            left: "30%",
            bottom: `${(windowSize.height - mousePos.y) * 0.04}px`,
            transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 px-4 md:px-8 lg:px-16">
        {/* Hero Section */}
        <div className="mb-32">
          <div
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{
              transform: `translateY(${
                scrollY * 0.25
              }px) perspective(1000px) rotateX(${scrollY * 0.01}deg)`,
              opacity: Math.max(0.3, 1 - scrollY / 600),
            }}
          >
            <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Vice President
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
              Finance & Taxation
            </span>
          </div>
          <div
            className="flex flex-wrap items-center gap-4 text-lg md:text-xl text-blue-200"
            style={{
              transform: `translateY(${scrollY * 0.15}px)`,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>September 2024 - June 2025</span>
            </div>
            <div className="w-px h-6 bg-blue-500/30" />
            <span>Strategic Leadership</span>
          </div>
        </div>

        {/* Certificate Section - Prominent Display */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
            Official Recognition
          </h2>

          <div className="max-w-5xl mx-auto">
            <div
              className="relative group"
              onMouseEnter={() => setCertHovered(true)}
              onMouseLeave={() => setCertHovered(false)}
            >
              {/* Certificate Container */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  transform: certHovered
                    ? "scale(1.02) rotateX(2deg)"
                    : "scale(1) rotateX(0deg)",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {/* Glowing border effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl"
                  style={{
                    opacity: certHovered ? 1 : 0.5,
                    transition: "opacity 0.4s ease-out",
                  }}
                />

                {/* Inner container */}
                <div className="absolute inset-1 bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl overflow-hidden">
                  {/* Certificate Image */}
                  <div className="relative aspect-[16/11] bg-gradient-to-br from-blue-900/30 via-slate-800 to-indigo-900/30">
                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <svg className="w-full h-full">
                        <defs>
                          <pattern
                            id="cert-grid"
                            width="30"
                            height="30"
                            patternUnits="userSpaceOnUse"
                          >
                            <path
                              d="M 30 0 L 0 0 0 30"
                              fill="none"
                              stroke="white"
                              strokeWidth="0.5"
                            />
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          fill="url(#cert-grid)"
                        />
                      </svg>
                    </div>

                    {/* Placeholder content - Replace with actual certificate image */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                      <div className="text-center">
                        <Award className="w-24 h-24 mx-auto mb-6 text-blue-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                        <h3 className="text-2xl md:text-3xl font-bold text-blue-200 mb-4">
                          Ministerial Recognition Certificate
                        </h3>
                        <p className="text-gray-400 mb-2">
                          Honourable Minister of Education, Rajasthan
                        </p>
                        <p className="text-sm text-gray-500">
                          Certificate image will appear here
                        </p>

                        {/* You can replace the above with an actual image: */}
                        {/* <img 
                          src="/path-to-your-certificate.jpg" 
                          alt="Recognition Certificate"
                          className="w-full h-full object-contain"
                        /> */}
                      </div>
                    </div>

                    {/* Shine effect on hover */}
                    {certHovered && (
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        style={{
                          animation: "shine 2s ease-in-out infinite",
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Floating badge */}
                <div
                  className="absolute -top-4 -right-4 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-xl z-20"
                  style={{
                    transform: certHovered
                      ? "scale(1.1) rotate(-5deg)"
                      : "scale(1) rotate(5deg)",
                    transition: "transform 0.4s ease-out",
                  }}
                >
                  <span className="font-bold text-white">
                    National Recognition
                  </span>
                </div>
              </div>

              {/* PDF Download Button */}
              <div className="mt-6 flex justify-center">
                <button
                  className="group/btn flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105"
                  onClick={() => {
                    // Add your PDF link here
                    window.open("/internship.pdf", "_blank");
                  }}
                >
                  <FileText className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                  <span className="font-semibold text-lg">
                    View Certificate PDF
                  </span>
                  <Download className="w-5 h-5 group-hover/btn:translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
            Impact & Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                style={{
                  transform: `translateY(${
                    Math.sin((scrollY + index * 200) * 0.002) * 15
                  }px)`,
                }}
              >
                <div
                  className="relative p-8 rounded-2xl backdrop-blur-md bg-white/5 border-2 border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden h-full"
                  style={{
                    boxShadow:
                      hoveredStat === index
                        ? "0 20px 60px rgba(59, 130, 246, 0.3)"
                        : "none",
                  }}
                >
                  {/* Animated background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Rotating ring effect */}
                  {hoveredStat === index && (
                    <div className="absolute inset-0 opacity-20">
                      <div
                        className={`absolute inset-4 rounded-full border-4 border-dashed ${
                          achievement.color.includes("blue")
                            ? "border-blue-400"
                            : achievement.color.includes("green")
                            ? "border-green-400"
                            : "border-purple-400"
                        }`}
                        style={{
                          animation: "spin 10s linear infinite",
                        }}
                      />
                    </div>
                  )}

                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${achievement.color} mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                    >
                      {achievement.icon}
                    </div>

                    {/* Number */}
                    <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {achievement.number}
                    </div>

                    {/* Label */}
                    <h3 className="text-xl font-bold text-blue-200 mb-2 group-hover:text-white transition-colors duration-300">
                      {achievement.label}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Responsibilities */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Key Responsibilities & Innovations
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {responsibilities.map((resp, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  transform: `translateY(${scrollY * 0.04 + index * 10}px)`,
                }}
              >
                <div className="relative p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-blue-400/50 transition-all duration-500 overflow-hidden h-full">
                  {/* Diagonal stripe animation */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10"
                      style={{
                        transform: "translateX(-100%)",
                        animation:
                          hoveredStat === index
                            ? "slideIn 1s ease-out forwards"
                            : "none",
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 inline-block">
                      {resp.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-blue-200 group-hover:text-white transition-colors duration-300">
                      {resp.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {resp.description}
                    </p>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-blue-400/0 group-hover:border-blue-400/50 rounded-tr-lg transition-all duration-500" />
                  <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-indigo-400/0 group-hover:border-indigo-400/50 rounded-bl-lg transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Period */}
        <div
          className="mb-32 max-w-4xl mx-auto"
          style={{
            transform: `translateY(${scrollY * 0.06}px)`,
          }}
        >
          <div className="p-8 md:p-12 rounded-3xl backdrop-blur-md bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border-2 border-blue-500/50 hover:border-blue-400 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-200 mb-3">
                  Tenure Period
                </h3>
                <p className="text-xl text-gray-300">
                  September 2024 - June 2025
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                <Award className="w-12 h-12 text-blue-400" />
              </div>
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
          <ChevronDown className="w-8 h-8 animate-bounce text-blue-400" />
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-32 py-12 border-t border-blue-500/20 text-center text-gray-400">
        <p>Part of the Leadership Journey | Omisaa Bansal</p>
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
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes slideIn {
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

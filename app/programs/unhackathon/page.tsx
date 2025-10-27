"use client";

import React, { useState } from "react";
import { Award, X } from "lucide-react";

export default function Portfolio() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // ✅ Add image srcs here
  const images = [
    {
      id: 1,
      placeholder: "The Team",
      src: "/unhackthon1.png",
    },
    {
      id: 2,
      placeholder: "The Cohort",
      src: "/unhackthon2.png",
    },
    {
      id: 3,
      placeholder: "Cash Prize Rs 50,000",
      src: "/unhackthon3.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="pt-20 px-6 sm:px-12 text-center mb-20">
          <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            UnHackthon'23
          </h1>
          <p
            className="text-gray-300 text-lg max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Achievements, projects, and professional milestones
          </p>
        </header>

        {/* Images Gallery */}
        <section className="px-6 sm:px-12 mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {images.map((img) => (
              <div
                key={img.id}
                className="group relative h-80 overflow-hidden rounded-2xl cursor-pointer"
                onMouseEnter={() => setHoveredItem(`img-${img.id}`)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => setSelectedImage(img.src)}
                style={{
                  transform:
                    hoveredItem === `img-${img.id}`
                      ? "translateY(-8px)"
                      : "translateY(0)",
                  transition:
                    "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Image container */}
                <div className="relative m-0.5 rounded-2xl overflow-hidden h-full">
                  <img
                    src={img.src}
                    alt={`Portfolio ${img.id}`}
                    className="w-full h-full object-cover bg-gradient-to-br from-slate-700 to-slate-600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <span className="text-sm font-semibold text-white">
                      {img.placeholder}
                    </span>
                  </div>
                </div>

                {/* Floating glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500 -z-10"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificate Section */}
        <section className="px-6 sm:px-12 mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Certifications
          </h2>
          <div
            className="group relative"
            onMouseEnter={() => setHoveredItem("cert")}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              transform:
                hoveredItem === "cert" ? "scale(1.02) rotateY(5deg)" : "scale(1)",
              transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
              perspective: "1000px",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-orange-400/20 to-red-400/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            <div className="relative bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-xl border border-slate-600/30 group-hover:border-yellow-400/50 rounded-2xl p-8 sm:p-12 overflow-hidden transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Certificate Image */}
                <div className="md:col-span-1">
                  <div 
                    className="w-64 h-64 md:w-72 md:h-72 mx-auto rounded-xl overflow-hidden border-2 border-yellow-400/30 group-hover:border-yellow-400/60 transition-all duration-500 cursor-pointer"
                    onClick={() => setSelectedImage("/image136.jpeg")}
                  >
                    <img
                      src="/image136.jpeg"
                      alt="Certificate"
                      className="w-full h-full object-cover bg-gradient-to-br from-slate-600 to-slate-700 hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="md:col-span-2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6 text-yellow-400" />
                    <span className="text-sm font-semibold text-yellow-400">
                      ACHIEVEMENT
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-500">
                    Won 1st place in UnHackathon’23,Rishihood University
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-500">
                    Awarded cash prize of ₹50,000 for developing an
innovative phone screen guard designed to induce sleep after prolonged viewing, reducing screen time and alleviating
anxiety.  
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <time className="text-sm font-semibold text-yellow-400">
                      July 2023
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Space */}
        <div className="h-20"></div>
      </div>

      {/* Modal for viewing full image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors duration-300 z-50"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Full view"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
"use client";
import { useState, useEffect } from "react";
import { X, Award, TrendingUp, BookOpen, Star } from "lucide-react";

interface Certificate {
  id: number;
  title: string;
  image: string;
}

export default function AcademicsPage() {
  const [selectedImage, setSelectedImage] = useState<Certificate | null>(null);
  const [visibleElements, setVisibleElements] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisibleElements(true), 100);
  }, []);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "",
      image: "/berley3.png",
    },
    {
      id: 2,
      title: "",
      image: "/berley2.png",
    },
    {
      id: 3,
      title: "",
      image: "/berley1.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl animate-float-slow"></div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-1000 ${
              visibleElements
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse-slow"></div>
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">
              Berkeley was Chaotic.
            </span>
          </div>

          <h1
            className={`text-6xl md:text-7xl font-black mb-6 transition-all duration-1000 delay-100 ${
              visibleElements
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Berkeley Stock Pitch Competition
            </span>
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="px-4 sm:px-8 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            className={`bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-purple-100 transition-all duration-1000 delay-700 ${
              visibleElements
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Berkeley was chaotic. The good kind.
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Our team spent nights meddling with DCF models like mad
                scientists, arguing over WACCs and terminal growth rates. Every
                line in that spreadsheet had been reworked numerous times, and
                then pulled apart again. We wanted a bulletproof pitch.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                The preparation wasn't glamorous either. We rehearsed over and
                over again, each run slightly sharper than the last. I'd learnt
                the hard way at the Wharton competition that you can never
                rehearse enough. So this time, we came armed - numbers,
                narratives, and memorised scripts.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Before we even settled on the pitch, we screened through
                hundreds of tech companies, trying to find the one that was
                fundamentally mispriced. It felt less like picking a stock and
                more like uncovering something everyone else had missed. When
                the dust settled, that obsession paid off, we walked away as
                Global Champions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* View PDF Button Section */}
      <section className="px-4 sm:px-8 pb-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            className={`flex justify-center transition-all duration-1000 delay-800 ${
              visibleElements
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="/Berkeley.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <BookOpen className="h-6 w-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">View Certificate</span>
              <TrendingUp className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Certificates Gallery */}
      <section className="px-4 sm:px-8 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-12 transition-all duration-1000 delay-900 ${
              visibleElements
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Showcase
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certificates.map((cert, idx) => (
              <div
                key={cert.id}
                className={`group cursor-pointer transition-all duration-700 ${
                  visibleElements
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${1000 + idx * 150}ms` }}
                onClick={() => setSelectedImage(cert)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white border-4 border-transparent hover:border-purple-300 transform hover:scale-105 hover:-rotate-2">
                  <div className="aspect-[3/4] relative">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Award className="h-8 w-8 text-purple-600" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-bold text-sm text-center">
                      {cert.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-purple-400 transition-colors duration-300 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 hover:rotate-90 transform transition-all"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-500">
                <h3 className="text-2xl font-bold text-white text-center">
                  {selectedImage.title}
                </h3>
              </div>
              <div className="p-8">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(-15px); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(20px); }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
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

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
          animation-delay: 4s;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

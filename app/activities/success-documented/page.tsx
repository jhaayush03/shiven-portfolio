"use client";
import { useState, useEffect } from "react";
import { X, Award, BookOpen } from "lucide-react";

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
      image: "/academic1.png",
    },
    {
      id: 2,
      title: "",
      image: "/academic2.png",
    },
    {
      id: 3,
      title: "",
      image: "/academic3.png",
    },
    {
      id: 4,
      title: "",
      image: "/academic4.png",
    },
  ];

  const videos = [
    {
      title: "My Disability is not my Weakness",
      url: "https://www.youtube.com/watch?v=h-uF4w5ZFbE&pp=2AbWEQ%3D%3D",
      thumbnail: "https://img.youtube.com/vi/h-uF4w5ZFbE/hqdefault.jpg",
    },
    {
      title: "India Embodies Enterpreneurship",
      url: "https://www.youtube.com/watch?v=H-MIBi2zK5E&pp=2AYt",
      thumbnail: "https://www.youtube.com/watch?v=H-MIBi2zK5E&pp=2AYt",
    },
    {
      title: "This is an area that would see Explosive Growth",
      url: "https://www.youtube.com/watch?v=qCWxXJLcQyo&pp=2Ab4BQ%3D%3D",
      thumbnail: "https://www.youtube.com/watch?v=qCWxXJLcQyo&pp=2Ab4BQ%3D%3D",
    },
    {
      title: "A billion dollar National Trade in a single day",
      url: "https://www.youtube.com/watch?v=SCF1bTtl2TM&pp=2AbpGw%3D%3D",
      thumbnail: "https://www.youtube.com/watch?v=SCF1bTtl2TM&pp=2AbpGw%3D%3D",
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
          </div>

          <h1
            className={`text-6xl md:text-7xl font-black mb-6 transition-all duration-1000 delay-100 ${
              visibleElements
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Success Documented
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
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                I’ve always loved listening to podcasts, the kind where people
                tell raw stories about how they built things, broke things, and
                got back up again. At some point, I got tired of just being on
                the listening end. I wanted to flip the script. So, I borrowed
                my dad’s camera, “borrowed” my mom’s microphones (she didn’t
                know at first), and started cold-outreaching people on LinkedIn
                who, frankly, had no reason to respond to a teenager. But some
                did.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                One of my first guests was Mrinal Singh, a fund manager whose
                insights changed how I looked at fundamental investing. (I later
                went on to do research with him - more on that in the research
                section of this website.) A few months later Rishi Kohli, CIO of
                BlackRock India. Each conversation felt like sitting inside the
                engine room of how investors and athletes actually work. And
                over time, Success Documented grew. More recently, I had the
                chance to host Shekar Naik, captain of the Indian Blind Cricket
                Team, a conversation that was less about cricket and more about
                resilience, leadership, and perspective.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                From the very beginning, I wanted to question them, to ask why
                they believe what they believe, and to challenge their
                frameworks with the curiosity of someone who isn’t afraid to
                look stupid if it means learning something real.s
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Because, at its heart, Success Documented is about access. It’s
                about making the playbooks of entrepreneurs, investors, and
                athletes open to anyone who’s curious enough to listen. I wanted
                a kid sitting in a small town with big ambitions to hear these
                stories and think, “If they can do it, why can’t I?”
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                Today, Success Documented has reached over 500,000 unique
                viewers across Spotify, YouTube, Instagram, Apple Podcasts, and
                more, ranking in 120+ countries and releasing 300+ pieces of
                content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="px-4 sm:px-8 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-12 transition-all duration-1000 delay-800 ${
              visibleElements
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Watch Our Journey
            </h2>
            <p className="text-gray-600 text-lg">
              See the impact we're making through our video stories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {videos.map((video, idx) => (
              <a
                key={idx}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group cursor-pointer transition-all duration-700 ${
                  visibleElements
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${900 + idx * 150}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-red-500 to-pink-500 border-4 border-transparent hover:border-red-300 transform hover:scale-105 hover:rotate-1">
                  <div className="aspect-video relative bg-black/10 backdrop-blur-sm">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                        <div className="w-0 h-0 border-l-[20px] border-l-red-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-red-600 to-pink-600">
                    <p className="text-white font-bold text-sm text-center group-hover:text-yellow-200 transition-colors">
                      {video.title}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Gallery */}
      <section className="px-4 sm:px-8 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-12 transition-all duration-1000 delay-1200 ${
              visibleElements
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Showcase
            </h2>
            <p className="text-gray-600 text-lg">
              Click on any image to view it in full screen
            </p>
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
                style={{ transitionDelay: `${1300 + idx * 150}ms` }}
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
                  {cert.title && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-bold text-sm text-center">
                        {cert.title}
                      </p>
                    </div>
                  )}
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
              {selectedImage.title && (
                <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-500">
                  <h3 className="text-2xl font-bold text-white text-center">
                    {selectedImage.title}
                  </h3>
                </div>
              )}
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

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
              Book Publication
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
              Distressed Value
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
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                I started writing my book back in Grade 9, when my investing
                “philosophy” was mostly made up of Warren Buffett quotes. Over
                the years, that messy Google Doc grew alongside how I thought
                about markets. I went from idolizing investors to dissecting
                their teachings. From looking for “winners” to looking for
                mispriced resilience.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                What began as an experiment slowly became Distressed Value, a
                book about contrarian investing, mean reversion, and the quiet
                power of patience in markets that love noise. Finishing the book
                was about documenting how I grew up as an investor. A
                coming-of-age story, just with more valuation spreadsheets and
                fewer dramatic revelations.
              </p>

              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  <a href="https://www.amazon.in/dp/9361854364/ref=sr_1_1?crid=QLH3BDC4K7Q9&dib=eyJ2IjoiMSJ9.jwGCWckVpQhKsZtbWqbkkjGdSmXOPrvLxNvCUzcdEwya5IHM1rtZqFQ8Jd4N5S1QCYtINVPBGPXyXPIgAJnmASLr2udGVoK7011qY3jzIzRNfYqtmzuuhlXfMyteRjSqEfgNM3iF1RgVm019KQa_rSZUU57Ax0aOGcGLnBH-8b-oXJJAzqso5rkjoZPaz3rninG4ZHifl7818xaAlZuNi9KIm9JhJU8DJNzMl9dzAGQ.Ws-xU7XdGsFoPkGQ8bLRR1fW0auY7sf_gl7R-VJrJoQ&dib_tag=se&keywords=distressed+value&qid=1761452922&sprefix=distressed+value+shiven+khandelwal%2Caps%2C307&sr=8-1">
                    Click to View Amazon Link
                  </a>
                </h2>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Summary
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Distressed Value Investing is a guide to finding opportunity
                where most investors see only risk. While markets are quick to
                punish companies that stumble, they are just as quick to forget
                that distress does not always mean demise. This book explores
                how sharp declines, market pessimism, and cycles of fear often
                mask businesses with real potential for recovery. Drawing on
                timeless principles of value investing from the Warren Buffet’s
                and the Peter Lynch’s, Distressed Value Investing shows how to
                separate the companies that are truly broken from those unfairly
                discarded, and how to evaluate them through rigorous discounted
                cash flow modeling, and deep study of industry cycles. With a
                blend of history, case studies, and practical frameworks, the
                book reveals how patience, contrarian thinking, and temperament
                can result in lasting gains. Whether you are a student of the
                markets, an aspiring investor, or a seasoned professional
                looking for fresh perspective, Distressed Value Investing offers
                a roadmap to one of the most misunderstood, and most rewarding
                corners of investing.
              </p>
            </div>
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

"use client";
import { useState, useEffect } from "react";
import { TrendingUp, BookOpen } from "lucide-react";

export default function AcademicsPage() {
  const [visibleElements, setVisibleElements] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisibleElements(true), 100);
  }, []);

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
              Essay Competition
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
              John Locke
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

            <div className="grid md:grid-cols-[1fr_400px] gap-8 items-start">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  John Locke was a journey in philosophical rabbit holes,
                  obsessing over a single question - "Should politicians ever be
                  punished for lying?" What started as a casual draft quickly
                  spiraled into long nights of arguing with dead philosophers.
                  One day I was siding with Machiavelli, the next Rawls threw
                  everything off, and then John Locke himself decided to make it
                  worse.
                </p>

                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  I'd corner friends in hallways to test arguments, talk to
                  myself mid-shower, rewrite entire sections at ungodly hours
                  because a single line didn't sit right. Slowly, the essay
                  turned into less of a competition and more of a duel with the
                  idea itself. By the time I submitted it, I'd memorized every
                  twist in my argument.
                </p>

                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  And when the results came in, that stubbornness paid off - I
                  walked away with a Very High Commendation Award for the John
                  Locke Essay Competition.
                </p>
              </div>

              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-4 border-purple-200 hover:border-purple-400 transform hover:scale-105">
                  <img
                    src="/john1.png"
                    alt="John Locke Award Certificate"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
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
              href="/john.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <BookOpen className="h-6 w-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">View Essay</span>
              <TrendingUp className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

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
      `}</style>
    </div>
  );
}

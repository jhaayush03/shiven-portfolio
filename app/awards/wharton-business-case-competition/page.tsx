"use client";
import { useState, useEffect } from "react";
import { TrendingUp, BookOpen, Presentation } from "lucide-react";

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
              Business Case Competition
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
              Wharton (PennSEM)
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
                We spent weeks buried in case files, dissecting the business
                models of Burberry, Starbucks, and Nike like mechanics trying to
                figure out where the engine rattled. There were spreadsheets
                everywhere, the kind of deep research and fundamental analysis
                that only made sense at 3 a.m. after way too much caffeine.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                We built what we thought was a pretty airtight solution. But
                here's the thing, ideas don't present themselves. People do. And
                by the time the final round hit, we were nowhere near as
                prepared as we should've been. No clean rehearsals. No crisp
                transitions. Just a half-functional brain and an over-engineered
                deck.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                The strategy was solid, but the delivery wasn't. We stumbled,
                missed our timing, and couldn't land the punch the way we'd
                planned. We ended up placing 4th globally - painfully close, but
                close doesn't get the trophy. Still, Wharton gave us something
                better than a shiny first-place badge: a brutal, unforgettable
                lesson in the difference between having the right answer and
                telling the right story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* View PDF Buttons Section */}
      <section className="px-4 sm:px-8 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            className={`flex flex-col sm:flex-row justify-center gap-6 transition-all duration-1000 delay-800 ${
              visibleElements
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="/wharton1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Presentation className="h-6 w-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">View Presentation 1</span>
              <TrendingUp className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="/wharton2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <BookOpen className="h-6 w-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">View Presentation 2</span>
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

"use client";
import { useState, useEffect } from "react";
import { TrendingUp, BookOpen, FileText } from "lucide-react";

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
              Research Paper
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
              Bandhan AMC
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
                My research at Bandhan AMC started with a pretty simple
                question: does diversity inside an asset management company
                actually impact its performance? I've always cared deeply about
                inclusion - as a structural advantage. Diverse teams don't just
                look different, they think differently. And I wanted to see
                whether that translated into fund performance in a measurable
                way.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                At Bandhan AMC, I dug into data sets on management structures,
                risk-adjusted returns, and portfolio resilience, testing how
                representation and decision-making dynamics affect results. The
                was about challenging assumptions that sit in the background of
                finance. This project taught me markets aren't just shaped by
                numbers, but by the people who make those numbers move. And
                who's in the room matters more than most are willing to admit.
              </p>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Abstract
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Diversity and inclusion are no longer peripheral values in
                corporate governance. They are measurable drivers of financial
                performance. This study investigates the relationship between
                mutual fund management structures and long-term risk-adjusted
                performance through an interdisciplinary lens combining
                financial economics, behavioral psychology, organizational
                theory, and cultural sociology. A meta-analysis of 20+
                peer-reviewed studies was conducted to evaluate the effects of
                five explanatory variables on fund returns: management structure
                (centralized vs. decentralized), gender diversity, cultural
                diversity, managerial experience, and educational diversity.
                Across the literature, decentralized structures were associated
                with higher alpha and Sharpe ratios but also greater
                coordination costs and risk exposure. Gender diversity,
                particularly mixed-gender teams, corresponded with lower
                volatility and more stable returns, while cultural diversity
                decreased systematic risk. Managerial experience showed
                non-linear effects, with experienced managers offering stability
                but reduced adaptability, whereas less experienced managers
                responded more dynamically to feedback. Educational diversity
                demonstrated a consistent positive relationship with performance
                metrics. Overall, results indicate that organizational and human
                factors exert measurable influence on fund performance,
                complementing traditional financial variables. These findings
                depict the importance of incorporating behavioral and structural
                considerations into mutual fund governance design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* View Paper Button Section */}
      <section className="px-4 sm:px-8 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            className={`flex justify-center transition-all duration-1000 delay-800 ${
              visibleElements
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="/Bandhan_AMC.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FileText className="h-7 w-7 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">View Research Paper</span>
              <TrendingUp className="h-6 w-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
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

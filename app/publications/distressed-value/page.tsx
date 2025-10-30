"use client";
import { useState, useEffect } from "react";
import {
  TrendingUp,
  BookOpen,
  FileText,
  ExternalLink,
  ShoppingCart,
} from "lucide-react";

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
                "philosophy" was mostly made up of Warren Buffett quotes. Over
                the years, that messy Google Doc grew alongside how I thought
                about markets. I went from idolizing investors to dissecting
                their teachings. From looking for "winners" to looking for
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
                <a
                  href="https://www.amazon.in/dp/9361854364/ref=sr_1_1?crid=QLH3BDC4K7Q9&dib=eyJ2IjoiMSJ9.jwGCWckVpQhKsZtbWqbkkjGdSmXOPrvLxNvCUzcdEwya5IHM1rtZqFQ8Jd4N5S1QCYtINVPBGPXyXPIgAJnmASLr2udGVoK7011qY3jzIzRNfYqtmzuuhlXfMyteRjSqEfgNM3iF1RgVm019KQa_rSZUU57Ax0aOGcGLnBH-8b-oXJJAzqso5rkjoZPaz3rninG4ZHifl7818xaAlZuNi9KIm9JhJU8DJNzMl9dzAGQ.Ws-xU7XdGsFoPkGQ8bLRR1fW0auY7sf_gl7R-VJrJoQ&dib_tag=se&keywords=distressed+value&qid=1761452922&sprefix=distressed+value+shiven+khandelwal%2Caps%2C307&sr=8-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Buy on Amazon</span>
                  <ExternalLink className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </a>
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
                timeless principles of value investing from the Warren Buffet's
                and the Peter Lynch's, Distressed Value Investing shows how to
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

      {/* View Sample Button Section */}
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
              href="/distressed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FileText className="h-7 w-7 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">View Sample Chapter</span>
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

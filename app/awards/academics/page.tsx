"use client";
import { useState, useEffect } from "react";
import { X, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";

interface Certificate {
  id: number;
  title: string;
  date: string;
  image: string;
  issuer?: string;
}

export default function CertificatePage() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [visibleCerts, setVisibleCerts] = useState<number[]>([]);

  useEffect(() => {
    certificates.forEach((cert, idx) => {
      setTimeout(() => {
        setVisibleCerts((prev) => [...prev, cert.id]);
      }, idx * 50);
    });
  }, []);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "7 Years of Academic Excellence",
      date: "2018-25",
      image: "/academic1.png",
      issuer: "",
    },
    {
      id: 2,
      title: "Section Topper of Class 11",
      date: "2024-25",
      image: "/academic2.png",
      issuer: "",
    },
    {
      id: 3,
      title: "International Finance Olympiad",
      date: "2024-25",
      image: "/image64.jpeg",
      issuer: "",
    },
    {
      id: 4,
      title: "Global Economics Olympiad",
      date: "2024-25",
      image: "/image65.jpeg",
      issuer: "",
    },
    {
      id: 5,
      title: "International Chemistry Quiz",
      date: "2023",
      image: "/academic3.png",
      issuer: "",
    },
    {
      id: 6,
      title: "Green Olympiad",
      date: "2023",
      image: "/academic4.png",
      issuer: "",
    },
    {
      id: 7,
      title: "SOF Commerce Olympiad",
      date: "",
      image: "/academic5.png",
      issuer: "",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6 animate-fade-in-down">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
            <span className="text-blue-400 font-semibold">Achievements</span>
          </div>

          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-down bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            style={{ animationDelay: "0.1s" }}
          >
            Certificates & Credentials
          </h1>

          <p
            className="text-lg text-gray-300 max-w-2xl animate-fade-in-down"
            style={{ animationDelay: "0.2s" }}
          >
            A comprehensive collection of professional certifications,
            achievements, and credentials earned throughout my academic and
            professional journey.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-8 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Total Certificates", value: certificates.length },
              { label: "Years Span", value: "2023-2024" },
              { label: "Organizations", value: "15+" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg p-4 text-center hover:border-blue-500/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="px-4 sm:px-8 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certificates.map((cert, idx) => (
              <div
                key={cert.id}
                className={`group bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-xl border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-2 ${
                  visibleCerts.includes(cert.id)
                    ? "animate-card-pop"
                    : "opacity-0"
                }`}
                style={{
                  animationDelay: `${idx * 0.05}s`,
                }}
              >
                {/* Certificate Image */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Hover overlay with icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40">
                    <Eye className="h-8 w-8 text-white transform scale-75 group-hover:scale-100 transition-transform" />
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-5 relative z-10">
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors">
                    {cert.title}
                  </h3>

                  {cert.issuer && (
                    <p className="text-sm text-gray-400 mb-2 group-hover:text-purple-300 transition-colors">
                      {cert.issuer}
                    </p>
                  )}

                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    {cert.date}
                  </div>

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group/btn"
                  >
                    <Eye className="h-4 w-4 group-hover/btn:scale-125 transition-transform" />
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* View All Certificate Button */}
      <section className="px-4 sm:px-8 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <a
              href="/academics.pdf"
              download
              className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-3 transform group-hover:scale-105 active:scale-95"
            >
              <Download className="h-5 w-5 group-hover:animate-bounce" />
              <span>Download All Certificates (PDF)</span>
              <span className="text-sm opacity-75">
                ({certificates.length} certs)
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Modal for Full Certificate View */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col border border-slate-600 overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-1">
                  {selectedCert.title}
                </h2>
                {selectedCert.issuer && (
                  <p className="text-sm text-blue-300 font-medium">
                    Issued by {selectedCert.issuer}
                  </p>
                )}
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-gray-400 hover:text-white transition-all duration-300 hover:bg-slate-700 p-2 rounded-lg group"
              >
                <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            {/* Modal Content with Scroll */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
              <div className="p-8">
                <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-slate-700">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-slate-700 p-6 bg-gradient-to-r from-slate-900/50 to-slate-800/50 flex items-center justify-between gap-4 flex-wrap">
              <div className="text-gray-400 text-sm">
                <p className="font-medium">Date Earned:</p>
                <p className="text-white">{selectedCert.date}</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-300"
                >
                  Close
                </button>
                <a
                  href={selectedCert.image}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  <Download className="h-4 w-4" />
                  Download Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes card-pop {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes scale-in {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-card-pop {
          animation: card-pop 0.5s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.4s ease-out forwards;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .group:hover .animate-bounce {
          animation: bounce 1s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }

        .scrollbar-thumb-slate-700::-webkit-scrollbar-thumb {
          background-color: rgb(51 65 85);
          border-radius: 3px;
        }

        .scrollbar-track-slate-900::-webkit-scrollbar-track {
          background-color: rgb(15 23 42);
        }
      `}</style>
    </div>
  );
}

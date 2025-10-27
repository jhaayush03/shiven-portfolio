"use client";
import { useState, useEffect } from "react";
import {
  Download,
  ExternalLink,
  Calendar,
  Users,
  Award,
  BookOpen,
  Zap,
  Quote,
  Share2,
  FileText,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";

interface ResearchPaper {
  id: number;
  title: string;
  authors: string[];
  date: string;
  publishedIn: string;
  abstract: string;
  introduction: string;
  keyFindings: string[];
  methodology: string;
  conclusion: string;
  keywords: string[];
  citations: number;
  pdfUrl: string;
  externalLink: string;
  image: string;
  volume?: string;
  issue?: string;
  pages?: string;
}

export default function ResearchPaperPage() {
  const [selectedSection, setSelectedSection] = useState<string>("abstract");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [visibleAuthors, setVisibleAuthors] = useState<number[]>([]);

  useEffect(() => {
    researchPaper.authors.forEach((_, idx) => {
      setTimeout(() => {
        setVisibleAuthors((prev) => [...prev, idx]);
      }, idx * 50);
    });
  }, []);

  const researchPaper: ResearchPaper = {
    id: 1,
    title:
      "Advanced Machine Learning Approaches for Real-Time Predictive Analytics in Cloud Infrastructure",
    authors: [
      "Alexandra Chen",
      "Dr. Michael Thompson",
      "Dr. Sarah Williams",
      "Prof. James Rodriguez",
    ],
    date: "March 2024",
    publishedIn: "Journal of Machine Learning and Data Science",
    volume: "Volume 15",
    issue: "Issue 3",
    pages: "pp. 234-267",
    abstract:
      "This research paper presents a comprehensive framework for implementing advanced machine learning algorithms in cloud-based infrastructure to enable real-time predictive analytics. We introduce novel optimization techniques that reduce computational overhead by 65% while maintaining high accuracy. Our methodology combines federated learning with edge computing to process streaming data efficiently across distributed systems. The results demonstrate that our approach outperforms traditional centralized methods in both latency and scalability metrics.",
    introduction:
      "The exponential growth of data generation in modern applications has created unprecedented challenges for real-time analytics. Traditional centralized machine learning approaches struggle with scalability and latency issues when processing massive data streams. This paper addresses these challenges by proposing an innovative distributed architecture that leverages cloud computing resources and edge computing nodes. Our solution is designed to be production-ready and has been validated across multiple cloud platforms including AWS, Google Cloud, and Azure.",
    methodology:
      "Our research methodology consists of four phases: (1) Data Collection and Preprocessing, where we gathered 50GB of real-world data from various IoT sensors and cloud services; (2) Model Development, implementing both traditional ML algorithms and deep learning models; (3) Optimization and Tuning, using automated hyperparameter optimization; (4) Deployment and Testing, evaluating performance across different cloud environments. We used Python, TensorFlow, and Apache Spark for implementation, with validation on production datasets containing over 100 million records.",
    keyFindings: [
      "Achieved 65% reduction in computational overhead compared to baseline methods",
      "Reduced inference latency from 850ms to 120ms on average",
      "Improved prediction accuracy by 12% using ensemble methods",
      "Successfully scaled to handle 1 million events per second",
      "Implemented federated learning reducing data transmission by 80%",
      "Cost reduction of 45% compared to traditional cloud solutions",
    ],
    conclusion:
      "This research successfully demonstrates that advanced machine learning combined with intelligent cloud architecture can achieve significant improvements in real-time predictive analytics. The proposed framework addresses key industry challenges and provides practical solutions for enterprise-scale deployments. Future work will focus on incorporating reinforcement learning for dynamic optimization and expanding the framework to support multi-cloud environments. Our contributions have direct applicability to finance, healthcare, e-commerce, and IoT sectors.",
    keywords: [
      "Machine Learning",
      "Cloud Computing",
      "Predictive Analytics",
      "Edge Computing",
      "Federated Learning",
      "Real-time Processing",
      "Data Science",
      "Distributed Systems",
    ],
    citations: 234,
    pdfUrl: "https://example.com/research-paper.pdf",
    externalLink: "https://example.com/paper-doi-link",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  };

  const sections = [
    { id: "abstract", label: "Abstract", icon: BookOpen },
    { id: "introduction", label: "Introduction", icon: Zap },
    { id: "methodology", label: "Methodology", icon: FileText },
    { id: "findings", label: "Key Findings", icon: Award },
    { id: "conclusion", label: "Conclusion", icon: Quote },
  ];

  const getSectionContent = () => {
    switch (selectedSection) {
      case "abstract":
        return researchPaper.abstract;
      case "introduction":
        return researchPaper.introduction;
      case "methodology":
        return researchPaper.methodology;
      case "findings":
        return null;
      case "conclusion":
        return researchPaper.conclusion;
      default:
        return researchPaper.abstract;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6 animate-fade-in-down">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
            <span className="text-blue-400 font-semibold">
              Research Publication
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight animate-fade-in-down bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            style={{ animationDelay: "0.1s" }}
          >
            {researchPaper.title}
          </h1>

          {/* Authors and Meta Info */}
          <div className="space-y-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {researchPaper.authors.map((author, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 bg-gradient-to-r from-slate-800/60 to-slate-900/60 border border-slate-700 hover:border-blue-400/50 rounded-full text-sm text-gray-300 hover:text-blue-300 transition-all duration-300 transform hover:scale-105 animate-fade-in ${
                    visibleAuthors.includes(idx) ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                >
                  {author}
                </span>
              ))}
            </div>

            <div
              className="flex flex-wrap gap-6 text-gray-400 text-sm animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-2 group hover:text-gray-300 transition-colors">
                <Calendar className="h-4 w-4 text-blue-400 group-hover:rotate-12 transition-transform" />
                {researchPaper.date}
              </div>
              <div className="flex items-center gap-2 group hover:text-gray-300 transition-colors">
                <BookOpen className="h-4 w-4 text-purple-400 group-hover:rotate-12 transition-transform" />
                {researchPaper.publishedIn}
              </div>
              {researchPaper.volume && (
                <div className="flex items-center gap-2 group hover:text-gray-300 transition-colors">
                  <FileText className="h-4 w-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
                  {researchPaper.volume}
                </div>
              )}
              {researchPaper.pages && (
                <div className="text-gray-400 group hover:text-gray-300 transition-colors">
                  {researchPaper.pages}
                </div>
              )}
              <div className="flex items-center gap-2 group hover:text-gray-300 transition-colors">
                <Award className="h-4 w-4 text-yellow-400 group-hover:scale-125 transition-transform" />
                {researchPaper.citations} Citations
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className="flex flex-wrap gap-4 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href={researchPaper.pdfUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transform hover:scale-105 active:scale-95 group"
            >
              <Download className="h-5 w-5 group-hover:scale-125 transition-transform" />
              Download PDF
            </a>
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 border border-slate-700 hover:border-purple-500/50 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 group"
            >
              <ExternalLink className="h-5 w-5 group-hover:scale-125 transition-transform" />
              View Paper
            </button>
            <a
              href={researchPaper.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 border border-slate-700 hover:border-emerald-500/50 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 group"
            >
              <Share2 className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              External Link
            </a>
          </div>
        </div>
      </section>

      {/* Paper Image */}
      <section className="px-4 sm:px-8 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            className="relative h-96 rounded-xl overflow-hidden border border-slate-700 group animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <img
              src={researchPaper.image}
              alt={researchPaper.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent group-hover:from-slate-900/80 transition-colors duration-300"></div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="px-4 sm:px-8 pb-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 border-b border-slate-700 pb-4">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setSelectedSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 animate-fade-in transform hover:scale-105 active:scale-95 ${
                    selectedSection === section.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50"
                      : "text-gray-400 hover:text-white hover:bg-slate-800/50 border border-slate-700 hover:border-blue-500/50"
                  }`}
                  style={{ animationDelay: `${0.8 + idx * 0.1}s` }}
                >
                  <Icon className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                  <span className="hidden sm:inline">{section.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 sm:px-8 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            className="bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 border border-slate-700 rounded-xl p-8 backdrop-blur-xl animate-fade-in hover:border-blue-500/50 transition-colors duration-300"
            style={{ animationDelay: "1.1s" }}
          >
            {selectedSection === "findings" ? (
              <div className="space-y-4 animate-fade-in">
                <h2 className="text-3xl font-bold text-white mb-6 animate-slide-in-left">
                  Key Findings
                </h2>
                <div className="space-y-4">
                  {researchPaper.keyFindings.map((finding, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/30 border border-slate-700 rounded-lg hover:border-blue-500/50 hover:from-slate-800/70 hover:to-slate-700/50 transition-all duration-300 group transform hover:translate-x-2 animate-card-pop"
                      style={{ animationDelay: `${1.2 + idx * 0.1}s` }}
                    >
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-shadow group-hover:scale-125 transform">
                        {idx + 1}
                      </div>
                      <p className="text-gray-300 leading-relaxed flex-1 pt-1 group-hover:text-gray-100 transition-colors">
                        {finding}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-white mb-6 animate-slide-in-left">
                  {sections.find((s) => s.id === selectedSection)?.label}
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line group-hover:text-gray-200 transition-colors">
                  {getSectionContent()}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Keywords Section */}
      <section className="px-4 sm:px-8 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl font-bold text-white mb-6 animate-fade-in"
            style={{ animationDelay: "1.3s" }}
          >
            Keywords
          </h2>
          <div className="flex flex-wrap gap-3">
            {researchPaper.keywords.map((keyword, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50 rounded-full text-blue-300 font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:from-blue-500/30 hover:to-purple-500/30 animate-fade-in"
                style={{ animationDelay: `${1.4 + idx * 0.05}s` }}
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Paper Preview Modal */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col border border-slate-600 overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-1 animate-fade-in">
                  {researchPaper.title}
                </h2>
                <p
                  className="text-sm text-blue-300 font-medium animate-fade-in"
                  style={{ animationDelay: "0.1s" }}
                >
                  Issued by {researchPaper.publishedIn}
                </p>
              </div>
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="text-gray-400 hover:text-white transition-all duration-300 hover:bg-slate-700 p-2 rounded-lg group"
              >
                <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
              <div
                className="p-8 space-y-4 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {researchPaper.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {researchPaper.abstract}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {researchPaper.keywords.slice(0, 5).map((keyword, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-blue-500/20 border border-blue-500/50 text-blue-300 rounded hover:bg-blue-500/30 transition-colors"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg p-6 hover:border-purple-500/50 transition-colors">
                  <h4 className="text-lg font-bold text-white mb-3">
                    Publication Details
                  </h4>
                  <div className="space-y-2 text-gray-300">
                    <p>
                      <strong className="text-white">Journal:</strong>{" "}
                      {researchPaper.publishedIn}
                    </p>
                    <p>
                      <strong className="text-white">Date:</strong>{" "}
                      {researchPaper.date}
                    </p>
                    {researchPaper.volume && (
                      <p>
                        <strong className="text-white">Volume:</strong>{" "}
                        {researchPaper.volume}
                      </p>
                    )}
                    {researchPaper.pages && (
                      <p>
                        <strong className="text-white">Pages:</strong>{" "}
                        {researchPaper.pages}
                      </p>
                    )}
                    <p>
                      <strong className="text-white">Citations:</strong>{" "}
                      {researchPaper.citations}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-slate-700 p-6 bg-gradient-to-r from-slate-900/50 to-slate-800/50 flex gap-3">
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="flex-1 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-300 transform hover:scale-105 active:scale-95"
              >
                Close
              </button>
              <a
                href={researchPaper.pdfUrl}
                download
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 group"
              >
                <Download className="h-4 w-4 group-hover:scale-125 transition-transform" />
                Download Certificate
              </a>
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

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
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

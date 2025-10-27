"use client";
import { useState, useEffect } from "react";
import {
  FileText,
  Download,
  ExternalLink,
  Calendar,
  Users,
  Award,
  Briefcase,
  MapPin,
  ArrowRight,
  Code,
  Target,
  TrendingUp,
  ChevronDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Eye, Mail, Phone, Linkedin } from "lucide-react";
import { Navigation } from "@/components/navigation";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  skills: string[];
  image?: string;
  type: "work" | "internship" | "project";
}

export default function ExperiencePage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [filterType, setFilterType] = useState<string>("all");
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    experiences.forEach((exp, idx) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, exp.id]);
      }, idx * 50);
    });
  }, []);

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Senior Product Designer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      duration: "2 years 6 months",
      startDate: "Jan 2022",
      endDate: "Present",
      description:
        "Led product design strategy for flagship mobile and web applications, managing a team of 5 designers while collaborating with cross-functional teams to deliver exceptional user experiences.",
      highlights: [
        "Increased user engagement by 45% through redesigned onboarding flow",
        "Led design system implementation improving development efficiency by 30%",
        "Managed product launches reaching 2M+ downloads",
        "Mentored junior designers and conducted design reviews",
      ],
      skills: [
        "UI/UX Design",
        "Figma",
        "Design Systems",
        "User Research",
        "Prototyping",
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      type: "work",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "New York, NY",
      duration: "1 year 8 months",
      startDate: "May 2020",
      endDate: "Dec 2021",
      description:
        "Developed and maintained multiple full-stack web applications using React and Node.js, managing databases and deploying to cloud infrastructure. Contributed to architectural decisions and performance optimization.",
      highlights: [
        "Built RESTful APIs serving 500K+ daily requests",
        "Reduced application load time by 60% through optimization",
        "Implemented automated testing improving code quality by 40%",
        "Led migration from legacy system to modern tech stack",
      ],
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker"],
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      type: "work",
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "AI Research Labs",
      location: "Boston, MA",
      duration: "3 months",
      startDate: "Jun 2019",
      endDate: "Aug 2019",
      description:
        "Worked on machine learning projects involving data analysis, model training, and visualization. Collaborated with senior data scientists to solve real-world business problems.",
      highlights: [
        "Built predictive models achieving 92% accuracy",
        "Created interactive dashboards for stakeholder reporting",
        "Processed and cleaned 10M+ data points",
        "Published research findings in technical blog",
      ],
      skills: ["Python", "Machine Learning", "Data Analysis", "SQL", "Tableau"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      type: "internship",
    },
    {
      id: 4,
      title: "UX Research Lead",
      company: "Creative Studios",
      location: "Los Angeles, CA",
      duration: "1 year 4 months",
      startDate: "Feb 2018",
      endDate: "May 2019",
      description:
        "Conducted comprehensive user research studies, user testing sessions, and created actionable insights to guide product development. Led a team of 3 researchers.",
      highlights: [
        "Conducted 200+ user interviews across 5 countries",
        "Identified key user pain points improving retention by 35%",
        "Established research best practices and documentation",
        "Presented findings to executive leadership and stakeholders",
      ],
      skills: [
        "User Research",
        "Qualitative Analysis",
        "User Testing",
        "Surveys",
        "Data Visualization",
      ],
      type: "work",
    },
    {
      id: 5,
      title: "Personal Portfolio Project",
      company: "Self-Directed",
      location: "Remote",
      duration: "Ongoing",
      startDate: "2023",
      endDate: "Present",
      description:
        "Building an advanced AI-powered project portfolio showcasing machine learning applications, data visualizations, and innovative solutions to complex problems.",
      highlights: [
        "Integrated machine learning algorithms for smart recommendations",
        "Developed interactive data visualizations",
        "Achieved 98% Lighthouse performance score",
        "Open-sourced components on GitHub",
      ],
      skills: ["Next.js", "Python", "TensorFlow", "D3.js", "Cloud Deployment"],
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      type: "project",
    },
    {
      id: 6,
      title: "Frontend Developer Intern",
      company: "StartUp Hub",
      location: "Austin, TX",
      duration: "2 months",
      startDate: "Jul 2017",
      endDate: "Aug 2017",
      description:
        "Developed responsive web pages and interactive components for client-facing applications. Focused on performance optimization and cross-browser compatibility.",
      highlights: [
        "Built 10+ responsive web pages using React",
        "Improved CSS performance by 50%",
        "Implemented accessibility standards (WCAG 2.1)",
        "Collaborated with UI/UX team",
      ],
      skills: ["React", "JavaScript", "CSS", "HTML", "Git"],
      type: "internship",
    },
  ];

  const filteredExperiences =
    filterType === "all"
      ? experiences
      : experiences.filter((exp) => exp.type === filterType);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "bg-blue-500/20 border-blue-500/50 text-blue-300";
      case "internship":
        return "bg-purple-500/20 border-purple-500/50 text-purple-300";
      case "project":
        return "bg-emerald-500/20 border-emerald-500/50 text-emerald-300";
      default:
        return "bg-gray-500/20 border-gray-500/50 text-gray-300";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="h-4 w-4" />;
      case "internship":
        return <Award className="h-4 w-4" />;
      case "project":
        return <Target className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

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
            <span className="text-blue-400 font-semibold">My Journey</span>
          </div>

          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-down bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            style={{ animationDelay: "0.1s" }}
          >
            Professional Experience
          </h1>

          <p
            className="text-xl text-gray-300 max-w-2xl leading-relaxed animate-fade-in-down"
            style={{ animationDelay: "0.2s" }}
          >
            A comprehensive overview of my career journey, from internships to
            senior roles, showcasing my growth, achievements, and contributions
            to impactful projects.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 sm:px-8 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {[
              { label: "All", value: "all" },
              { label: "Work", value: "work" },
              { label: "Internships", value: "internship" },
              { label: "Projects", value: "project" },
            ].map((filter, idx) => (
              <button
                key={filter.value}
                onClick={() => setFilterType(filter.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 animate-fade-in ${
                  filterType === filter.value
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50 transform scale-105"
                    : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700 hover:border-blue-500/50"
                }`}
                style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="px-4 sm:px-8 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent md:translate-x-px animate-pulse"></div>

            {/* Experience Cards */}
            <div className="space-y-8">
              {filteredExperiences.map((exp, idx) => (
                <div
                  key={exp.id}
                  className={`relative animate-slide-in-left ${
                    visibleCards.includes(exp.id) ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${idx * 0.1}s`,
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-0 md:left-1/2 md:translate-x--1/2 z-20">
                    <div className="flex items-center justify-center">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center ring-4 ring-slate-900 animate-pulse group hover:scale-125 transition-transform">
                        {getTypeIcon(exp.type)}
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`md:w-1/2 ${
                      idx % 2 === 0
                        ? "md:ml-0 md:mr-auto md:pr-8"
                        : "md:ml-auto md:pl-8"
                    } ml-16`}
                  >
                    <div
                      onClick={() =>
                        setExpandedId(expandedId === exp.id ? null : exp.id)
                      }
                      className="group bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-xl border border-slate-700 hover:border-blue-500/60 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 cursor-pointer transform hover:-translate-y-2 animate-card-pop"
                      style={{
                        animationDelay: `${idx * 0.1 + 0.05}s`,
                      }}
                    >
                      {/* Animated background glow on hover */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:via-purple-600/5 group-hover:to-pink-600/10 transition-all duration-500 pointer-events-none"></div>

                      {/* Image Section */}
                      {exp.image && (
                        <div className="relative h-48 overflow-hidden bg-slate-900">
                          <img
                            src={exp.image}
                            alt={exp.company}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                        </div>
                      )}

                      {/* Content Section */}
                      <div className="p-6 relative z-10">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                              {exp.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm mb-3">
                              <span className="flex items-center gap-1 group-hover:text-gray-300 transition-colors">
                                <Briefcase className="h-4 w-4" />
                                {exp.company}
                              </span>
                              <span className="flex items-center gap-1 group-hover:text-gray-300 transition-colors">
                                <MapPin className="h-4 w-4" />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 border ${getTypeColor(
                              exp.type
                            )} group-hover:shadow-lg transition-all`}
                          >
                            {getTypeIcon(exp.type)}
                            {exp.type.charAt(0).toUpperCase() +
                              exp.type.slice(1)}
                          </span>
                        </div>

                        {/* Duration */}
                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 pb-4 border-b border-slate-700/50 group-hover:text-gray-300 transition-colors">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {exp.startDate} - {exp.endDate}
                          </span>
                          <span className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                            ({exp.duration})
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors">
                          {exp.description}
                        </p>

                        {/* Expandable Content */}
                        {expandedId === exp.id && (
                          <div className="space-y-4 pt-4 border-t border-slate-700/50 animate-in fade-in duration-300">
                            {/* Highlights */}
                            <div
                              className="animate-slide-in-left"
                              style={{ animationDelay: "0.1s" }}
                            >
                              <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-blue-400 animate-bounce" />
                                Key Achievements
                              </h4>
                              <ul className="space-y-2">
                                {exp.highlights.map((highlight, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors group/item"
                                    style={{
                                      animation: `fade-in-left 0.5s ease-out ${
                                        0.1 + idx * 0.1
                                      }s forwards`,
                                      opacity: 0,
                                    }}
                                  >
                                    <ArrowRight className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Skills */}
                            <div
                              className="animate-slide-in-left"
                              style={{ animationDelay: "0.2s" }}
                            >
                              <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                <Code className="h-4 w-4 text-purple-400 animate-pulse" />
                                Skills & Technologies
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 bg-gradient-to-r from-slate-700/50 to-slate-600/50 border border-slate-600 rounded-full text-sm text-gray-300 hover:border-blue-400/50 hover:bg-gradient-to-r hover:from-slate-600/60 hover:to-slate-500/60 transition-all transform hover:scale-105"
                                    style={{
                                      animation: `fade-in 0.5s ease-out ${
                                        0.2 + idx * 0.05
                                      }s forwards`,
                                      opacity: 0,
                                    }}
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Expand Button */}
                        <button className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-blue-500/50 rounded-lg text-blue-300 font-medium transition-all duration-300 group/btn hover:shadow-lg hover:shadow-blue-500/20 transform hover:scale-105 active:scale-95">
                          <span>
                            {expandedId === exp.id ? "Show Less" : "Show More"}
                          </span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform group-hover/btn:scale-125 ${
                              expandedId === exp.id ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-8 py-20 bg-slate-900/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Years of Experience", value: "6+" },
              { label: "Companies", value: "5" },
              { label: "Skills Mastered", value: "25+" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 animate-text-shimmer">
                  {stat.value}
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
            transform: translateX(-40px);
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

        @keyframes text-shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
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

        .animate-text-shimmer {
          background-size: 200% 200%;
          animation: text-shimmer 3s ease-in-out infinite;
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
      `}</style>
    </div>
  );
}

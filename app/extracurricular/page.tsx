"use client";
import { useState } from "react";
import {
  Users,
  Award,
  Calendar,
  MapPin,
  ArrowRight,
  Heart,
  Music,
  Zap,
  Sparkles,
  X,
  ChevronDown,
  Trophy,
  Lightbulb,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";

interface Activity {
  id: number;
  title: string;
  category: string;
  duration: string;
  startDate: string;
  endDate: string;
  role: string;
  description: string;
  impact: string[];
  location: string;
  images: string[];
  achievements: string[];
  skills: string[];
  icon: string;
}

export default function ExtracurricularPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [selectedActivityId, setSelectedActivityId] = useState<number | null>(
    null
  );
  const [filterCategory, setFilterCategory] = useState("all");

  const activities: Activity[] = [
    {
      id: 1,
      title: "Tech Leadership Summit Organizer",
      category: "Leadership",
      duration: "2 years",
      startDate: "2022",
      endDate: "Present",
      role: "Co-Founder & Event Director",
      description:
        "Founded and organized an annual summit bringing together 500+ tech leaders, entrepreneurs, and innovators. The event features keynote speeches, panel discussions, and networking sessions focused on innovation, AI, and digital transformation.",
      impact: [
        "Attracted 500+ attendees from 15 countries",
        "Generated $50K+ sponsorship revenue",
        "Featured 30+ industry speakers",
        "Created networking opportunities resulting in 10+ partnerships",
      ],
      location: "San Francisco, CA",
      images: [
        "https://images.unsplash.com/photo-1540575467063-178f50002ccd?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1552664899-b0a9b0ae6bf8?w=500&h=300&fit=crop",
      ],
      achievements: [
        "Won 'Best Event Organization' award in 2023",
        "Featured in TechCrunch and Forbes",
        "Increased attendance by 200% year-over-year",
      ],
      skills: [
        "Event Management",
        "Leadership",
        "Public Speaking",
        "Networking",
      ],
      icon: "🎤",
    },
    {
      id: 2,
      title: "Student Robotics Team Captain",
      category: "Competition",
      duration: "3 years",
      startDate: "2018",
      endDate: "2021",
      role: "Team Captain & Technical Lead",
      description:
        "Led a team of 15 engineering students in designing and building competitive robots for FIRST Robotics competition. Managed budget, coordinated training, and led technical strategy for national competitions.",
      impact: [
        "Won 8 regional competitions",
        "Placed top 16 at national championships",
        "Secured $30K in sponsorships",
        "Mentored 20+ new team members",
      ],
      location: "Boston, MA",
      images: [
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1626399885933-ddae42c520aa?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      ],
      achievements: [
        "Innovation Award for mechanical design",
        "Team placed in top 5 nationally",
        "Published technical paper on robotics design",
      ],
      skills: ["Robotics", "Engineering", "Team Leadership", "CAD Design"],
      icon: "🤖",
    },
    {
      id: 3,
      title: "Women in Technology Mentor",
      category: "Mentoring",
      duration: "4 years",
      startDate: "2019",
      endDate: "Present",
      role: "Senior Mentor & Program Coordinator",
      description:
        "Mentored 50+ women entering the technology field, providing guidance on career development, technical skills, and leadership. Organized workshops, panel discussions, and networking events focused on diversity in tech.",
      impact: [
        "Mentored 50+ aspiring tech professionals",
        "80% of mentees secured tech jobs within 12 months",
        "Organized 20+ workshops and seminars",
        "Built community of 200+ female tech professionals",
      ],
      location: "Multiple Cities",
      images: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1552664899-b0a9b0ae6bf8?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      ],
      achievements: [
        "Won 'Mentor of the Year' award",
        "Featured in Women Who Code blog",
        "Expanded program to 5 new cities",
      ],
      skills: [
        "Mentoring",
        "Community Building",
        "Career Coaching",
        "Leadership",
      ],
      icon: "👩‍💼",
    },
    {
      id: 4,
      title: "Open Source Contributor & Maintainer",
      category: "Tech Community",
      duration: "5 years",
      startDate: "2019",
      endDate: "Present",
      role: "Lead Maintainer",
      description:
        "Active open-source contributor maintaining 3 popular projects with 10K+ GitHub stars. Managed community, reviewed pull requests, and drove technical roadmap for open-source machine learning library.",
      impact: [
        "Maintained projects with 10K+ stars",
        "Reviewed 500+ pull requests",
        "Grew community to 5K+ contributors",
        "Tools used by 100K+ developers worldwide",
      ],
      location: "Remote",
      images: [
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1626399885933-ddae42c520aa?w=500&h=300&fit=crop",
      ],
      achievements: [
        "Top 1% contributor on GitHub",
        "Presented at 10+ tech conferences",
        "Built thriving global community",
      ],
      skills: ["Open Source", "Community Management", "Software Architecture"],
      icon: "💻",
    },
    {
      id: 5,
      title: "Debate Club President",
      category: "Communication",
      duration: "2 years",
      startDate: "2017",
      endDate: "2019",
      role: "President & Debate Champion",
      description:
        "Led debate club as president, organizing weekly meetings and competitions. Won multiple debate championships including state-level competitions, refining public speaking and argumentation skills.",
      impact: [
        "Won 12 debate tournaments",
        "State debate champion 2018",
        "Grew club membership from 15 to 60 members",
        "Won 'Best Speaker' award 5 times",
      ],
      location: "Boston, MA",
      images: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1552664899-b0a9b0ae6bf8?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      ],
      achievements: [
        "State debate champion",
        "Best Speaker award",
        "Coached winning team members",
      ],
      skills: ["Public Speaking", "Debate", "Leadership", "Critical Thinking"],
      icon: "🎯",
    },
    {
      id: 6,
      title: "Volunteer Community Organizer",
      category: "Community Service",
      duration: "3 years",
      startDate: "2020",
      endDate: "Present",
      role: "Community Coordinator",
      description:
        "Organized and led community service initiatives including coding workshops for underprivileged youth, environmental cleanup drives, and tech literacy programs for seniors.",
      impact: [
        "Taught 200+ kids basic coding",
        "Organized 15+ community service events",
        "Reached 500+ community members",
        "Raised $20K for local charities",
      ],
      location: "Local Community",
      images: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1552664899-b0a9b0ae6bf8?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      ],
      achievements: [
        "Community Service Award",
        "Featured in local news",
        "Expanded program to 3 neighborhoods",
      ],
      skills: [
        "Community Engagement",
        "Teaching",
        "Event Organization",
        "Fundraising",
      ],
      icon: "🤝",
    },
  ];

  const categories = [
    "All",
    "Leadership",
    "Competition",
    "Mentoring",
    "Tech Community",
    "Communication",
    "Community Service",
  ];

  const filteredActivities =
    filterCategory === "all"
      ? activities
      : activities.filter(
          (activity) =>
            activity.category.toLowerCase() === filterCategory.toLowerCase()
        );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Leadership":
        return "bg-blue-500/20 border-blue-500/50 text-blue-300";
      case "Competition":
        return "bg-red-500/20 border-red-500/50 text-red-300";
      case "Mentoring":
        return "bg-emerald-500/20 border-emerald-500/50 text-emerald-300";
      case "Tech Community":
        return "bg-purple-500/20 border-purple-500/50 text-purple-300";
      case "Communication":
        return "bg-orange-500/20 border-orange-500/50 text-orange-300";
      case "Community Service":
        return "bg-pink-500/20 border-pink-500/50 text-pink-300";
      default:
        return "bg-gray-500/20 border-gray-500/50 text-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <span className="text-blue-400 font-semibold">
              Beyond the Classroom
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Extracurricular Activities
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            My passion extends beyond professional work. I'm deeply involved in
            leadership, community service, and initiatives that drive positive
            change. Here's a showcase of my extracurricular journey.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 sm:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setFilterCategory(category === "All" ? "all" : category)
                }
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  (category === "All" && filterCategory === "all") ||
                  filterCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50"
                    : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="px-4 sm:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {filteredActivities.map((activity) => (
              <div
                key={activity.id}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={activity.images[0]}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold border flex items-center gap-1 ${getCategoryColor(
                        activity.category
                      )}`}
                    >
                      <Sparkles className="h-4 w-4" />
                      {activity.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-4xl">{activity.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {activity.title}
                      </h3>
                      <p className="text-sm text-blue-400 font-semibold">
                        {activity.role}
                      </p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-3 text-sm text-gray-400 mb-4 pb-4 border-b border-slate-700/50">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {activity.startDate} - {activity.endDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {activity.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                    {activity.description}
                  </p>

                  {/* Expandable Content */}
                  {expandedId === activity.id && (
                    <div className="space-y-5 pt-4 border-t border-slate-700/50 animate-in fade-in duration-300">
                      {/* Description Full */}
                      <div>
                        <p className="text-gray-300 leading-relaxed">
                          {activity.description}
                        </p>
                      </div>

                      {/* Image Gallery */}
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-blue-400" />
                          Gallery
                        </h4>
                        <div className="grid grid-cols-3 gap-2">
                          {activity.images.map((image, idx) => (
                            <button
                              key={idx}
                              onClick={() => {
                                setSelectedImageIndex(idx);
                                setSelectedActivityId(activity.id);
                              }}
                              className="relative h-24 rounded-lg overflow-hidden group/img hover:ring-2 ring-blue-500 transition-all"
                            >
                              <img
                                src={image}
                                alt={`${activity.title} ${idx + 1}`}
                                className="w-full h-full object-cover group-hover/img:scale-110 transition-transform"
                              />
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                <Eye className="h-5 w-5 text-white" />
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Impact */}
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-yellow-400" />
                          Key Impact
                        </h4>
                        <ul className="space-y-2">
                          {activity.impact.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-gray-300 text-sm"
                            >
                              <ArrowRight className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                          <Award className="h-4 w-4 text-emerald-400" />
                          Achievements
                        </h4>
                        <div className="space-y-2">
                          {activity.achievements.map((achievement, idx) => (
                            <div
                              key={idx}
                              className="p-2 bg-slate-700/30 border border-slate-600 rounded text-sm text-gray-300 flex items-center gap-2"
                            >
                              <Lightbulb className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                          <Zap className="h-4 w-4 text-purple-400" />
                          Skills Developed
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {activity.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-xs text-gray-300 hover:border-blue-400/50 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Expand Button */}
                  <button
                    onClick={() =>
                      setExpandedId(
                        expandedId === activity.id ? null : activity.id
                      )
                    }
                    className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-blue-500/50 rounded-lg text-blue-300 font-medium transition-all duration-300"
                  >
                    <span>
                      {expandedId === activity.id
                        ? "Show Less"
                        : "Explore More"}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        expandedId === activity.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImageIndex !== null && selectedActivityId !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedImageIndex(null);
                setSelectedActivityId(null);
              }}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Image */}
            <div className="flex-1 flex items-center justify-center bg-black/50 rounded-lg overflow-hidden">
              <img
                src={
                  activities.find((a) => a.id === selectedActivityId)?.images[
                    selectedImageIndex
                  ]
                }
                alt="Activity"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Thumbnails */}
            <div className="mt-4 flex gap-2 justify-center">
              {activities
                .find((a) => a.id === selectedActivityId)
                ?.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`h-16 w-16 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx
                        ? "border-blue-500 ring-2 ring-blue-500/50"
                        : "border-slate-600 hover:border-slate-500"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="px-4 sm:px-8 py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Total Activities", value: activities.length },
              { label: "Years of Involvement", value: "10+" },
              { label: "Awards & Recognition", value: "15+" },
              { label: "People Impacted", value: "1000+" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl hover:border-blue-500/50 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Collaborate
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Interested in working together on community initiatives or
            collaborative projects? Let's create something meaningful together.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70"
          >
            Get In Touch
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}

const Eye = ({ className }: { className: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

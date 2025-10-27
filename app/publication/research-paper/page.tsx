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
  pdfUrl: string;
  externalLink: string;
  image: string;
  volume?: string;
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
      "Consumer Perception and Buying Behaviour Regarding Eco-Friendly Product",
    authors: [
      "Omisaa Bansal",
    ],
    date: "Oct 2023- June 2024 ",
    publishedIn: "Journal of Business Management and Information Systems",
    pages: "pp. 12",
    abstract:
      " The shift towards eco-friendly products has gained significant attention in recent years due to growing environmental concerns globally. This study investigates the attitudes of consumers towards eco-friendly products and their impact on purchase behaviour. Through a comprehensive literature review and empirical research, the study explores various factors influencing consumer attitudes including environmental consciousness, perceived product benefits, and demographic variables. Additionally, it examines the extent to which these attitudes translate into actual purchase decisions. Data was collected through surveys distributed among a diverse sample of consumers, and analysed using statistical methods to draw meaningful insights. The findings suggest a positive correlation between favourable attitudes towards eco-friendly products and increased purchase intent. However, the study also identifies barriers and challenges that hinder widespread adoption, such as price sensitivity and a lack of awareness. The implications of these findings for marketers and policymakers are discussed, emphasizing the need for targeted strategies to enhance consumer awareness and address barriers to adoption. Overall, this research contributes to understanding consumer behavior in the context of sustainability and provides valuable insights for promoting eco-friendly products in the marketplace.",
    introduction:
      "Consumers are now more aware of environmental concerns than they were a decade ago. State governments are primarily concerned with global environmental challenges, such as air and water pollution, depletion of the ozone layer, global warming, and others, in addition to raising public awareness of these issues.Environment deterioration was a major issue during the 1970s but was only limited to the purview of state governments. The population at large was not aware of or did not exhibit care towards the issues at hand (Akehurst, Afonso, & Gonçalves, 2012). A series of environmental catastrophes in the late 1980s made people reevaluate their lives and become conscious of environmental concerns (Titterington, Davies, & Cochrane, 1996). The 1990s were dubbed the Earth decade or the decade of the environment. It was during this time that environmental and social concerns gained traction in the economy and people began to gather more information concerning the environment (Prothero, 1996). It was the time period in which consumers became more conscious about the environment. People began to take individual and group action as a result of growing environmental consciousness and sensitivity. Nevertheless, consumers have also been held accountable for their unmanageable consumption of commodities, careless handling of the environment (Banerjee, 2002; Menon & Menon, 1997), and ecological imbalance. The existing literature, however, is not entirely in agreement on what really motivates consumers to act in a way that is environmentally friendly. More precisely, the link between conduct and attitude was shown to be different due to sociocultural, psychological, and demographic aspects (Diamantopoulos et al., 2003; Okr￿glicka, Mittal, & Navickas, 2023) . It is not well understood what factors influence consumers' desire to purchase environmentally friendly products (WTB-EFP) and their attitude towards the environment. Several writers contend that although many customers claim to be environmentally conscious, their purchasing decisions do not necessarily back up these claims (Gardyn, 2003; Kalafatis et al., 1999). Therefore, the purpose of this study is to investigate how consumers perceive eco-friendly products and offer insights into the variables influencing their purchase decisions. By means of an extensive examination of extant literature, the present study seeks to elucidate customer attitudes and behaviours toward environmentally friendly products. Additionally, the study intends to offer suggestions for businesses seeking to efficiently advertise and sell their eco-friendl merchandise",
    methodology:
      " This study employs a quantitative approach to examine respondents' purchasing behaviours regarding eco-friendly products. Primary data were gathered through a structured questionnaire through Google Forms. Secondary data was sourced from articles, journals, books, and websites. Simple random sampling was utilized as it was challenging to access the entire population. Garrett's ranking technique was used to analyse respondents' buying behaviours. The survey included 250 consumers from various areas across Delhi. The sampling technique used in this study was simple random sampling because it was difficult to reach the entire population. Graphic representation of different factors for different groups and further analysis through Garrett's classification technique are used to identify the purchasing behaviour of respondents. By converting ranks into scores, Garrett Ranking provides a nuanced view of respondents' preferences or priorities. The transformation to scores enables easy comparison of different items or factors. Garrett Rankings were used to identify the preference order of various criteria for different particulars, and the Garrett Score was used to test the level of significance among the different socio-economic group using ANOVA. ANOVA (Analysis of Variance) is a powerful statistical tool used to compare the means of different groups and determine if there are significant differences among them. In ANOVA, the primary outputs are the F-statistic and the p-value.<br/> • F-statistic: This value compares the variance between the groups to the variance within the groups. A larger F-statistic suggests a more substantial difference between groups compared to the variability within groups.<br/> • p-value: This indicates the probability that the observed differences are due to chance. A p-value less than the significance level (typically 0.05) suggests that the differences between groups are statistically significant.",
    keyFindings: [
      "Over 50% of respondents are young (18–44 years) and belong to the middle-income group. This group shows higher awareness and purchasing frequency of eco-friendly products compared to older age groups.",
      "Respondents believe eco-friendly products are primarily good for the environment and health, but consider high prices and limited availability as major obstacles.ANOVA results show significant differences in perception scores across socio-economic groups.",
      "Middle-income groups' attitudes closely match the overall trend, whereas high-income respondents are more influenced by advertisements.The ANOVA test confirms attitudinal differences exist between income groups.",
      "Most consumers express the intention to preserve the earth and like eco-friendly products, though some feel purchasing them enhances their social image.Differences among income groups are statistically significant, as shown by the ANOVA test.",
      "High-income consumers focus on healthcare and cosmetics products.",
      "Middle-income consumers prioritize household and essential goods.",
"Overall, income level influences category preference, but not the frequency of eco-friendly product purchases",
    ],
    conclusion:
      "Eco-friendly products play a crucial role in preserving the planet by reducing pollution, conserving natural resources, and promoting sustainable living. As environmental awareness increases, more people are realizing the importance of choosing green alternatives. However, the higher cost of these products often discourages widespread use. Governments can help by providing subsidies and tax benefits, while businesses can focus on innovation to make sustainable goods more affordable. Consumers, too, must support eco-friendly initiatives through conscious purchasing. With collective effort, eco-friendly products can become both accessible and affordable, paving the way for a cleaner, greener, and more sustainable future for all.",
    keywords: [
      "Eco-friendly products",
      "Consumer attitudes",
      "Purchase behaviour",
      "Environmental awareness",
      "Sustainable consumption",
    ],
    pdfUrl: "/research_paper.pdf",
    externalLink: "https://example.com/paper-doi-link",
    image:
      "/researchbanner.jpg",
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

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = researchPaper.pdfUrl;
    link.download = 'research_paper.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPDF = () => {
    window.open(researchPaper.pdfUrl, '_blank');
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
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className="flex flex-wrap gap-4 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transform hover:scale-105 active:scale-95 group"
            >
              <Download className="h-5 w-5 group-hover:scale-125 transition-transform" />
              Download PDF
            </button>
            <button
              onClick={handleViewPDF}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 border border-slate-700 hover:border-purple-500/50 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 group"
            >
              <ExternalLink className="h-5 w-5 group-hover:scale-125 transition-transform" />
              View Paper
            </button>
          </div>
        </div>
      </section>

      {/* Paper Image /}
      <section className="px-4 sm:px-8 pb-16 relative z-10">
  <div className="max-w-xl mx-auto"> {/* reduce max width /}
    <div
      className="relative h-64 rounded-lg overflow-hidden border border-slate-700 group animate-fade-in"
      style={{ animationDelay: "0.7s" }}
    >
      <img
        src={researchPaper.image}
        alt={researchPaper.title}
        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
      />
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
                   {/* <p>
                      <strong className="text-white">Citations:</strong>{" "}
                      {researchPaper.citations}
                    </p> */}
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
              <button
                onClick={handleDownloadPDF}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 group"
              >
                <Download className="h-4 w-4 group-hover:scale-125 transition-transform" />
                Download Certificate
              </button>
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
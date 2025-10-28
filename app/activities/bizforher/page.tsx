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
      image: "/BizForHer-Evidence-1.pdf",
    },
    {
      id: 2,
      title: "",
      image: "/BizForHer-Evidence-2.pdf",
    },
    {
      id: 3,
      title: "",
      image: "/BizForHer-Evidence-3.pdf",
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
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm"></span>
          </div>

          <h1
            className={`text-6xl md:text-7xl font-black mb-6 transition-all duration-1000 delay-100 ${
              visibleElements
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              BizForHer
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
              <h2 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Why BizForHer?
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                BizForHer started as a question I couldn’t shake off during
                business competitions: “Why are there so few girls here?” I was
                looking at a lack of opportunity and, honestly, a lack of
                invitation. I grew up watching my mom absolutely crush it in the
                corporate world, sharp, capable, and often outworking the men in
                the room. But when she became an entrepreneur, I saw another
                side of that world. A quieter one. Where talent doesn’t always
                get the same microphone.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                That’s where BizForHer comes in. I wanted to build something
                that doesn’t just “talk” about female participation, rather
                creating a stage for it. A space where high-school girls get to
                try, fail, learn, and get rewarded for doing so. Because real
                confidence comes from doing, not just being told you’re
                “capable.” We started with business case competitions. But
                honestly, it’s less about finance or pitch decks and more about
                changing the default setting of who gets to walk into the room.
              </p>

              <h2 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Intial Days:
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                BizForHer started with two teenagers, a laptop, and an absurd
                number of cold emails to people who had zero clue who we were.
                My co-founder and I were basically in “whoever replies first
                wins” mode. We reached out to anyone willing (and very often,
                not willing) to listen. One of our early calls was with the team
                at AlgoEd, just trying to figure out how big competitions are
                actually run behind the curtain. Meanwhile, we were looking up
                how to compete with the IIMs and SRCCs of the world when our
                entire “team” was essentially a Google Sheet and a shared dream.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Money, of course, was a different circus. We experimented with
                everything: crowdfunding, chasing independent donors, sliding
                into CSR inboxes, applying for government grants, even entering
                social competitions hoping for that one lucky cheque. We didn’t
                have a rulebook. We just had stubbornness, a Gmail account, and
                a belief that this thing had to exist.
              </p>
              <h2 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Later Days:
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                At some point, the cold calls and scrappy pitches actually
                started working.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Slowly, our crowdfunding campaigns began to snowball. Between
                individual donors, CSR funds, and competitions, we ended up
                raising tens of thousands of dollars in cash. That opened doors
                to conversations we never thought we’d have as teenagers, with
                institutions like Wesleyan College and FLAME University.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                The result? Over $2.5 million in scholarships for young women
                across India. Our programs have now reached more than 20,000
                high school girls, with 1,700 teams participating in our
                flagship competition alone. But it wasn’t just about who “won.”
                We ran workshops for both participants and non-participants,
                because changing the ratio in boardrooms starts with changing
                the ratio in classrooms.
              </p>
              <h2 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Impact:
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                In just a short span, BizForHer has grown to a movement. We’ve
                raised $2.5M in scholarships through partnerships with NITI
                Aayog, Wesleyan College, and FLAME University, giving young
                women access to opportunities they were once left out of. Our
                programs have reached 20,000+ high-school girls, with 1,700
                teams competing in our flagship competition alone. We’ve seen
                female participation in business activities jump from 10% to 52%
                in partner schools, and our 2,500+ alumni have gone on to build
                11,000+ entrepreneurial communities. BizForHer is about
                rewriting who gets to lead.
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

"use client";

import { Navigation } from "@/components/navigation";
import { Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-gray-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-180px)]">
          {/* Left Side - Professional Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm aspect-[3/3.5] overflow-hidden rounded-lg shadow-2xl">
              <img src="/1.jpg" alt="" className="h-full w-full object-cover" />
            </div>
          </div>

          {/* Right Side - Introduction Text */}
          <div className="flex flex-col justify-center space-y-6 lg:pl-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Hi There
            </h1>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm a passionate student, entrepreneur, investor, researcher,
                and athlete. My interests span across finance, entrepreneurship,
                sports, and research. I believe in the power of continuous
                learning and pushing boundaries in every aspect of life.
              </p>

              <p>
                Whether I'm analyzing investment opportunities, building
                ventures, conducting research, or training for athletic goals, I
                approach each endeavor with dedication and a growth mindset. I'm
                always excited to connect with like-minded individuals and
                explore new opportunities.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=",
                    "_blank"
                  )
                }
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors"
              >
                Learn More
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-6 pt-4 border-t border-gray-200 mt-6">
              <a
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=xyz@gmail.com",
                    "_blank"
                  )
                }
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                xyz@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

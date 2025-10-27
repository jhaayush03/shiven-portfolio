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
              Hi there — I’m Shiven.
            </h1>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                I’m the kind of person who once woke up at 4:30 AM for swim
                practice, spent the afternoon arguing about Fama-French factors,
                and then ended the day powerlifting to Nas’s Illmatic. (Yes, I
                contain multitudes.) I’m currently a high-school student with a
                mild obsession for markets, contrarian investing, and ideas that
                make experts tilt their heads a little and say, “Huh. That’s
                interesting.” I co-founded initiatives like InveshAI, Dwaar and
                BizForHer, because I saw problems and decided someone had to
                stop just talking about them.
              </p>

              <p>
                When I’m not knee-deep in spreadsheets or podcasting with fund
                managers, you’ll probably find me trekking through the Aravalis,
                cycling absurd distances for “fun,” or explaining distressed
                equities at social gatherings where absolutely no one asked. My
                friends call me a “shapeshifter of uniforms,” swimmer trunks,
                powerlifting belt, kurta with a tabla, or a blazer at an
                investment pitch. I call it refusing to pick just one life.
                Welcome to my corner of the internet. No jargon. No
                LinkedIn-speak. Just the story, unpolished and honest.
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

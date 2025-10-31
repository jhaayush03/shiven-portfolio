"use client";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navSections = [
  {
    title: "Activities",
    items: [
      "BizForHer",
      "Invesh AI",
      "Success Documented",
      "Yale Young Global Scholars",
      "Compounding Gems",
      "Project Dwaar",
      "Swimming",
    ],
  },
  {
    title: "Awards",
    items: [
      "Berkeley Stock Pitch Competition",
      "John Locke Essay Competition",
      "Wharton Business Case Competition",
      "Cambridge Re-think Essay Competition",
      "MUN Awards",
      "Youth Excellence in Economics",
    ],
  },
  {
    title: "Publications",
    items: ["Bandhan AMC", "CEO Fitness Stock Price", "Distressed Value"],
  },
  {
    title: "Shiven Tidbits",
    items: ["Cycling", "Music", "Reading"],
  },
];

export function Navigation() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeClick = () => {
    window.open("/OMISAA_BANSAL_.pdf", "_blank");
  };

  const formatLink = (section: string, item?: string) => {
    // generate clean slugs like /leadership/swayamsutra
    if (item) {
      return `/${section.toLowerCase().replace(/\s+/g, "-")}/${item
        .toLowerCase()
        .replace(/\s+/g, "-")}`;
    }
    return `/${section.toLowerCase().replace(/\s+/g, "-")}`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 px-4 py-4 sm:px-8 sm:py-6 transition-all duration-300 ${
        isScrolled
          ? "bg-blue-200 backdrop-blur-md border-b border-gray-300"
          : "bg-transparent"
      }`}
    >
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between">
        <a href="/" className="text-2xl font-extrabold text-black">
          SHIVEN
        </a>

        <div className="flex items-center gap-8">
          {navSections.map((section) => (
            <div key={section.title} className="relative group">
              {section.items.length > 0 ? (
                <>
                  <button className="text-sm font-medium text-black hover:text-gray-700 flex items-center gap-1 transition-colors">
                    {section.title}
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 12L3 7h10l-5 5z" />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-0 w-52 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {section.items.map((item) => (
                      <a
                        key={item}
                        href={formatLink(section.title, item)}
                        className="block px-4 py-3 text-sm text-gray-600 hover:bg-blue-50 first:rounded-t-md last:rounded-b-md transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={formatLink(section.title)}
                  className="text-sm font-medium text-black hover:text-gray-700 transition-colors"
                >
                  {section.title}
                </a>
              )}
            </div>
          ))}

          <Button
            variant="secondary"
            className="bg-blue-600 text-white hover:bg-blue-700"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=skhandelwal6@jpischool.com",
                "_blank"
              )
            }
          >
            Contact Me
          </Button>

          <Button
            variant="secondary"
            className="bg-blue-600 text-white hover:bg-blue-700"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/shiven-khandelwal-61915a2a4/",
                "_blank"
              )
            }
          >
            LinkedIn
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex lg:hidden items-center justify-between">
        <a href="/" className="text-2xl font-extrabold text-black">
          SHIVEN
        </a>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-600 p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-full bg-blue-100 border-t border-gray-300">
          <div className="flex flex-col p-4 space-y-1">
            {navSections.map((section) => (
              <div key={section.title} className="space-y-1">
                {section.items.length > 0 ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenMenu(
                          openMenu === section.title ? null : section.title
                        )
                      }
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-600 hover:bg-blue-200 rounded-md"
                    >
                      {section.title}
                      <svg
                        className={`h-4 w-4 transition-transform ${
                          openMenu === section.title ? "rotate-180" : ""
                        }`}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 12L3 7h10l-5 5z" />
                      </svg>
                    </button>
                    {openMenu === section.title && (
                      <div className="pl-4 space-y-1">
                        {section.items.map((item) => (
                          <a
                            key={item}
                            href={formatLink(section.title, item)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-200 rounded-md"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={formatLink(section.title)}
                    className="block px-4 py-3 text-sm font-medium text-gray-600 hover:bg-blue-200 rounded-md"
                  >
                    {section.title}
                  </a>
                )}
              </div>
            ))}

            <Button
              asChild
              variant="secondary"
              className="bg-blue-600 text-white hover:bg-blue-700 mt-4"
            >
              <a href="mailto:skhandelwal6@jpischool.com">Contact Me</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

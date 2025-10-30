"use client";
import { useState } from "react";
import { X } from "lucide-react";

export function About() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "/2.jpg", alt: "Image 1" },
    { src: "/3.JPG", alt: "Image 2" },
    { src: "/4.jpg", alt: "Image 3" },
  ];

  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center bg-white px-8 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Full Screen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage}
            alt="Full screen view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

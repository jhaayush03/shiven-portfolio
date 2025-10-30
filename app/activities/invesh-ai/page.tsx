"use client";
import { useEffect } from "react";
import { FileText } from "lucide-react";

export default function AcademicsPage() {
  useEffect(() => {
    // Open PDF in new tab when component mounts
    window.open("/mathematical-modals", "_blank");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
          <FileText className="h-10 w-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Opening PDF...
        </h1>
        <p className="text-gray-600 mb-6">
          The PDF should open in a new tab automatically.
        </p>
        <button
          onClick={() => window.open("/invesh.pdf", "_blank")}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Click here if it doesn't open
        </button>
      </div>
    </div>
  );
}

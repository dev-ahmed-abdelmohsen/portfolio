"use client";

import { motion } from "framer-motion";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Professional Resume
            </h1>
            <p className="text-gray-600">
              ATS-Optimized PDF • Ready for Download
            </p>
          </div>
          <a
            href="/CV-ats.pdf"
            download
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
              />
            </svg>
            Download PDF
          </a>
        </div>
        <div className="w-full aspect-[8.5/11] bg-white rounded-lg shadow-2xl overflow-hidden flex items-center justify-center border">
          <iframe
            src="/CV-ats.pdf"
            title="Resume PDF"
            className="w-full h-full min-h-[700px]"
            style={{ minHeight: "80vh", border: "none" }}
          />
        </div>
      </motion.div>
    </main>
  );
}
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ResumeContent = () => {
  const [resumeHTML, setResumeHTML] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch the ATS-optimized HTML resume
  useEffect(() => {
    fetch('/ats-resume.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch resume');
        }
        return response.text();
      })
      .then(html => {
        // Extract only the body content from the HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const bodyContent = doc.body.innerHTML;
        setResumeHTML(bodyContent);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading resume:', error);
        setLoading(false);
      });
  }, []);

  const handlePrintResume = () => {
    window.print();
  };

  const handleViewOnline = () => {
    window.open('/ats-resume.html', '_blank');
  };  

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 py-8"
    >
      {/* Enhanced Header with multiple options */}
      <div className="print-header flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Professional Resume</h1>
          <p className="text-gray-600">ATS-Optimized • Ready for Applications</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">✓ ATS Compatible</span>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">✓ Professional Format</span>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">✓ Up to Date</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleViewOnline}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View ATS Version
          </button>
          
          <button
            onClick={handlePrintResume}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H9.5a2 2 0 01-2-2v-4a2 2 0 012-2H16" />
            </svg>
            Print Resume
          </button>
        </div>
      </div>

      {/* Professional Resume Preview */}
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden border">
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div 
            className="resume-content p-8 sm:p-12"
            dangerouslySetInnerHTML={{ __html: resumeHTML }}
            style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              lineHeight: '1.6',
              color: '#333'
            }}
          />
        )}
      </div>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          
          .resume-content, .resume-content * {
            visibility: visible;
          }
          
          .print-header {
            display: none !important;
          }
          
          .resume-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 0.5in;
            background: white;
          }
          
          @page {
            size: A4;
            margin: 0.5in;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <ResumeContent />
    </main>
  );
}
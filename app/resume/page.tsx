"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ResumeContent = () => {
  // State to store markdown content
  const [resumeHTML, setResumeHTML] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch and convert markdown to HTML
  useEffect(() => {
    fetch('/resume.md')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch resume');
        }
        return response.text();
      })
      .then(markdown => {
        // Enhanced markdown to HTML converter for better ATS compatibility
        const html = convertMarkdownToHTML(markdown);
        setResumeHTML(html);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading resume:', error);
        setLoading(false);
      });
  }, []);

  // Enhanced markdown to HTML converter for better ATS compatibility
  const convertMarkdownToHTML = (markdown: string) => {
    // Process sections separately for better structure
    const sections = markdown.split(/(?=^## |^# )/gm);
    
    let processedHTML = '';
    
    sections.forEach(section => {
      // Process the section header
      let sectionHTML = section
        .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-teal-600">$1</h1>')
        .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-teal-700 mt-8 mb-4">$1</h2>')
        .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">$1</h3>');
      
      // Process lists with proper indentation and spacing
      const listRegex = /^- (.*)$/gm;
      let listMatch;
      let listItems = [];
      let lastIndex = 0;
      
      while ((listMatch = listRegex.exec(sectionHTML)) !== null) {
        if (listItems.length === 0) {
          // First item in a list
          lastIndex = listMatch.index;
        }
        
        listItems.push(`<li class="mb-2 text-gray-700">${listMatch[1]}</li>`);
        
        // Check if next line is not a list item
        const nextLineStart = listMatch.index + listMatch[0].length + 1;
        const nextLine = sectionHTML.substring(nextLineStart, nextLineStart + 2);
        
        if (nextLine !== '- ' || nextLineStart >= sectionHTML.length) {
          // End of list
          const listContent = listItems.join('');
          const fullList = `<ul class="list-disc pl-6 mb-6 space-y-1">${listContent}</ul>`;
          
          // Replace the entire list in the section
          const beforeList = sectionHTML.substring(0, lastIndex);
          const afterList = sectionHTML.substring(listMatch.index + listMatch[0].length);
          sectionHTML = beforeList + fullList + afterList;
          
          // Reset for next list
          listItems = [];
          // Need to reset regex after modifying the string
          listRegex.lastIndex = 0;
        }
      }
      
      // Process bold text
      sectionHTML = sectionHTML.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>');
      
      // Process links
      sectionHTML = sectionHTML.replace(
        /\[(.*?)\]\((.*?)\)/g, 
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-teal-600 hover:underline">$1</a>'
      );
      
      // Convert newlines to paragraphs
      sectionHTML = '<p class="mb-4 text-gray-700">' + 
                    sectionHTML
                      .replace(/\n\n/g, '</p><p class="mb-4 text-gray-700">') +
                    '</p>';
                    
      // Fix paragraph tags around other elements
      sectionHTML = sectionHTML
        .replace(/<p class="mb-4 text-gray-700"><h1/g, '<h1')
        .replace(/<p class="mb-4 text-gray-700"><h2/g, '<h2')
        .replace(/<p class="mb-4 text-gray-700"><h3/g, '<h3')
        .replace(/<p class="mb-4 text-gray-700"><ul/g, '<ul')
        .replace(/<\/h1><\/p>/g, '</h1>')
        .replace(/<\/h2><\/p>/g, '</h2>')
        .replace(/<\/h3><\/p>/g, '</h3>')
        .replace(/<\/ul><\/p>/g, '</ul>');
      
      // Add to the complete HTML
      processedHTML += sectionHTML;
    });
    
    return processedHTML;
  };

  const handleDownloadPDF = () => {
    // Redirect to PDF version of resume
    window.open('/resume.pdf', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 py-16"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Professional Resume</h1>
        <div className="flex space-x-4">
          <button
            onClick={handleDownloadPDF}
            className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition flex items-center shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </button>
          
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition flex items-center shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-8 sm:p-10 print:shadow-none print:p-0">
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
          </div>
        ) : (
          <div 
            className="resume-content prose prose-slate prose-headings:font-bold prose-headings:text-gray-900 prose-h1:text-3xl prose-h2:text-teal-700 prose-h3:text-gray-800 prose-p:text-gray-700 prose-li:text-gray-700 prose-a:text-teal-600 max-w-none"
            dangerouslySetInnerHTML={{ __html: resumeHTML }}
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
          .resume-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 1.5rem;
          }
          .resume-content h1 {
            font-size: 24px;
          }
          .resume-content h2 {
            font-size: 20px;
          }
          .resume-content h3 {
            font-size: 16px;
          }
          .resume-content p, .resume-content li {
            font-size: 12px;
            line-height: 1.4;
          }
          @page {
            size: A4;
            margin: 1.5cm;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-50 print:bg-white">
      <ResumeContent />
    </main>
  );
} 
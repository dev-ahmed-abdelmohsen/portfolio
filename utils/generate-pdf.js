const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

// Professional resume content
const resumeContent = `
# Ahmed Abd Elmohsen
**Full Stack Software Engineer**

📧 ashams3719262@gmail.com | 📱 +20 123 456 7890  
🌐 [LinkedIn](https://linkedin.com/in/ahmed-838-shams/) | 💻 [GitHub](https://github.com/ahmed-838) | 🌍 Cairo, Egypt

## Professional Summary

Full Stack Software Engineer with 3+ years of expertise in building scalable web and mobile applications. Specialized in React, Next.js, Node.js, and TypeScript development with experience in creating multi-platform solutions across e-commerce, healthcare, and property management sectors. Proven track record of delivering high-performance applications with modern UI/UX design, achieving 95+ Google PageSpeed scores and serving 20,000+ combined monthly users.

## Technical Skills

### Frontend Development
- **Web Technologies:** React, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS
- **UI Libraries:** Material-UI, Framer Motion, React Icons
- **Mobile Development:** React Native, Expo

### Backend Development
- **Core Technologies:** Node.js, Express.js, Java
- **API Development:** RESTful APIs, GraphQL, JWT Authentication
- **Databases:** MongoDB, PostgreSQL, MySQL, Redis

### DevOps & Deployment
- **Cloud Platforms:** AWS (EC2, S3, Lambda), Vercel, Netlify
- **Tools:** Docker, Git, CI/CD
- **Testing:** Jest, Cypress

## Professional Experience

### Full Stack Developer | Freelance
**July 2021 - Present | Cairo, Egypt**
- Designed and developed 4 major full-stack applications serving 20,000+ combined monthly users
- Implemented multi-tenant architectures for property management and e-commerce platforms
- Built cross-platform mobile solutions with React Native reaching 10,000+ downloads
- Created comprehensive backend services with Node.js, Express, and MongoDB
- Deployed and maintained production systems with 99.9% uptime
- Integrated AI capabilities for healthcare applications with 85% accuracy rate
- Implemented RTL interfaces for Arabic markets, increasing regional engagement by 45%

## Featured Projects

### Athkar - Islamic Supplications App
**Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion**
- Developed interactive web application for daily Islamic supplications and Quran learning
- Implemented responsive design with smooth animations for enhanced user experience
- Created morning/evening Adhkar collections and Tajweed lessons with articulation points
- Built dark/light mode support with automatic preference detection
- Optimized performance achieving 97 PageSpeed score

### GenCare - Pregnancy Care Application
**React Native, Expo, Node.js, Express, MongoDB, AWS, Machine Learning**
- Built comprehensive mobile app supporting expecting mothers throughout pregnancy
- Implemented AI-powered ultrasound image analysis for potential disease detection
- Created personalized health tracking and pregnancy information delivery system
- Developed cross-platform solution for both Android and iOS users
- Integrated notification system for health reminders and important milestones

### ViewStore - E-Commerce Platform
**Next.js 15, React 19, Node.js, Express, MongoDB, JWT**
- Architected multi-tiered e-commerce solution with separate customer and admin interfaces
- Developed comprehensive product management system with color variants and inventory
- Implemented promotional offers system with time-limited deals and discounts
- Created secure authentication with role-based access control
- Built RTL support for Arabic-speaking markets, increasing regional sales by 35%

### Mawa - Student Housing Platform
**Next.js 15, React 19, Node.js, MongoDB, Leaflet Maps**
- Designed housing management system with map-based property search functionality
- Implemented multi-role architecture with separate interfaces for different user types
- Created interactive map interface for property exploration with advanced filtering
- Built property management workflows including approval processes and requests
- Developed RTL interface optimized for Arabic markets

## Education

### Bachelor of Science in Computer Science
**Egyptian E-Learning University (EELU) | Cairo, Egypt | 2019 - 2023**
- **Relevant Coursework:** Data Structures & Algorithms, Software Engineering, Database Systems
- **Senior Project:** Comprehensive e-learning platform with video streaming
- **Academic Achievement:** Maintained top 10% standing in Computer Science program

## Certifications

- **Cisco Certified Network Associate (CCNA)** | 2022
- **DevOps Engineer Professional Certificate - DEPI** | 2023
- **Microsoft Security Training Certificate** | 2022
- **AWS Solutions Architect Associate** | In Progress

## Languages

- **Arabic:** Native
- **English:** Professional Working Proficiency

## Additional Information

- **Availability:** Open to full-time opportunities and freelance projects
- **Location:** Cairo, Egypt (Open to remote work)
- **Interests:** Open source contribution, mobile app development, AI integration
`;

async function generatePDF() {
  try {
    console.log('Starting professional PDF generation...');
    
    // Convert markdown to professional HTML
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ahmed Abd Elmohsen - Professional Resume</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Arial', 'Helvetica', sans-serif;
            line-height: 1.4;
            color: #333;
            background: white;
            font-size: 11px;
          }
          
          .resume-container {
            max-width: 8.5in;
            margin: 0 auto;
            padding: 0.5in;
          }
          
          h1 {
            font-size: 24px;
            font-weight: bold;
            color: #1e3a8a;
            text-align: center;
            margin-bottom: 5px;
          }
          
          .title {
            font-size: 16px;
            font-weight: bold;
            color: #475569;
            text-align: center;
            margin-bottom: 10px;
          }
          
          .contact-info {
            text-align: center;
            margin-bottom: 20px;
            font-size: 10px;
            color: #64748b;
          }
          
          h2 {
            font-size: 14px;
            font-weight: bold;
            color: #1e3a8a;
            border-bottom: 2px solid #1e3a8a;
            margin-top: 20px;
            margin-bottom: 10px;
            padding-bottom: 2px;
            text-transform: uppercase;
          }
          
          h3 {
            font-size: 12px;
            font-weight: bold;
            color: #334155;
            margin-top: 12px;
            margin-bottom: 5px;
          }
          
          .job-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 5px;
          }
          
          .job-title {
            font-weight: bold;
            color: #1e293b;
          }
          
          .job-duration {
            font-style: italic;
            color: #64748b;
            font-size: 10px;
          }
          
          .company {
            color: #475569;
            font-style: italic;
            margin-bottom: 8px;
          }
          
          ul {
            margin-left: 18px;
            margin-bottom: 12px;
          }
          
          li {
            margin-bottom: 3px;
            text-align: justify;
            line-height: 1.3;
          }
          
          .skills-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 15px;
          }
          
          .skill-category {
            margin-bottom: 8px;
          }
          
          .skill-category strong {
            color: #1e3a8a;
            display: block;
            margin-bottom: 3px;
          }
          
          .project-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 3px;
          }
          
          .project-title {
            font-weight: bold;
            color: #1e293b;
          }
          
          .tech-stack {
            color: #64748b;
            font-style: italic;
            font-size: 10px;
          }
          
          .summary {
            text-align: justify;
            margin-bottom: 15px;
            line-height: 1.4;
          }
          
          @page {
            size: A4;
            margin: 0.5in;
          }
        </style>
      </head>
      <body>
        <div class="resume-container">
          ${convertMarkdownToHTML(resumeContent)}
        </div>
      </body>
      </html>
    `;
    
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    console.log('Setting page content...');
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    
    console.log('Generating professional PDF...');
    const pdfPath = path.join(__dirname, '../public/resume.pdf');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.5in',
        bottom: '0.5in',
        left: '0.5in',
        right: '0.5in'
      },
      preferCSSPageSize: true
    });
    
    // Also save the HTML version for ATS
    const atsHtmlPath = path.join(__dirname, '../public/ats-resume.html');
    fs.writeFileSync(atsHtmlPath, htmlContent);
    
    await browser.close();
    
    console.log(`Professional PDF generated successfully: ${pdfPath}`);
    console.log(`ATS-optimized HTML saved: ${atsHtmlPath}`);
    return pdfPath;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}

// Enhanced markdown to HTML converter for professional formatting
function convertMarkdownToHTML(markdown) {
  // Split content into lines for better processing
  const lines = markdown.split('\n');
  let html = '';
  let inList = false;
  let currentSection = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Skip empty lines
    if (!line) {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      html += '\n';
      continue;
    }

    // Main title (h1)
    if (line.startsWith('# ')) {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      html += `<h1>${line.substring(2)}</h1>\n`;
    }
    // Job title format (bold with pipe)
    else if (line.match(/^\*\*.*\|\*\*$/)) {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      const match = line.match(/^\*\*(.*?)\s*\|\s*(.*?)\*\*$/);
      if (match) {
        html += `<div class="job-info">
          <span class="job-title">${match[1]}</span>
          <span class="job-duration">${match[2]}</span>
        </div>\n`;
      }
    }
    // Subtitle (bold on its own line)
    else if (line.match(/^\*\*.*\*\*$/) && !line.includes('|')) {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      const title = line.replace(/^\*\*(.*)\*\*$/, '$1');
      if (i === 1) { // Second line is typically the job title
        html += `<div class="title">${title}</div>\n`;
      } else {
        html += `<div class="company">${title}</div>\n`;
      }
    }
    // Contact info line (starts with emoji)
    else if (line.match(/^📧|^🌐|^💻|^🌍/)) {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      // Process links in contact info
      const processedLine = line.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
      html += `<div class="contact-info">${processedLine}</div>\n`;
    }
    // Section headers (h2)
    else if (line.startsWith('## ')) {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      currentSection = line.substring(3);
      html += `<h2>${currentSection}</h2>\n`;
    }
    // Subsection headers (h3)
    else if (line.startsWith('### ')) {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      html += `<h3>${line.substring(4)}</h3>\n`;
    }
    // List items
    else if (line.startsWith('- ')) {
      if (!inList) {
        html += '<ul>';
        inList = true;
      }
      const listItem = line.substring(2);
      // Process bold text and links in list items
      const processedItem = listItem
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
      html += `<li>${processedItem}</li>\n`;
    }
    // Project/Job titles with tech stack
    else if (line.match(/^###?\s+.*/) && lines[i + 1] && lines[i + 1].startsWith('**') && lines[i + 1].includes(',')) {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      const title = line.replace(/^###?\s+/, '');
      const techStack = lines[i + 1].replace(/^\*\*(.*)\*\*$/, '$1');
      html += `<div class="project-header">
        <span class="project-title">${title}</span>
        <span class="tech-stack">${techStack}</span>
      </div>\n`;
      i++; // Skip the next line as we've processed it
    }
    // Regular paragraphs
    else {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      // Process bold text and links
      const processedLine = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
      
      // Special handling for Professional Summary
      if (currentSection === 'Professional Summary') {
        html += `<p class="summary">${processedLine}</p>\n`;
      } else {
        html += `<p>${processedLine}</p>\n`;
      }
    }
  }

  // Close any remaining list
  if (inList) {
    html += '</ul>';
  }

  // Special handling for Technical Skills section
  html = html.replace(
    /<h2>Technical Skills<\/h2>(.*?)(?=<h2>|$)/s,
    (match, content) => {
      const skillsFormatted = content.replace(
        /<h3>(.*?)<\/h3>\s*<ul>(.*?)<\/ul>/gs,
        '<div class="skill-category"><strong>$1</strong><ul>$2</ul></div>'
      );
      return `<h2>Technical Skills</h2><div class="skills-grid">${skillsFormatted}</div>`;
    }
  );

  return html;
}

// Run the function if this file is executed directly
if (require.main === module) {
  generatePDF()
    .then(() => {
      console.log('PDF generation completed successfully!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('PDF generation failed:', error);
      process.exit(1);
    });
}

module.exports = generatePDF;
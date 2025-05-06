const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function generatePDF() {
  try {
    console.log('Starting PDF generation...');
    
    // Read the markdown file
    const markdownPath = path.join(__dirname, '../public/resume.md');
    const markdown = fs.readFileSync(markdownPath, 'utf8');
    
    // Create a simple HTML template with the markdown content
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ahmed Abd Elmohsen - Resume</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          h1 {
            color: #111;
            border-bottom: 2px solid #0d9488;
            padding-bottom: 10px;
            font-size: 28px;
            margin-top: 0;
          }
          h2 {
            color: #0d9488;
            margin-top: 20px;
            font-size: 22px;
            border-bottom: 1px solid #eee;
            padding-bottom: 5px;
          }
          h3 {
            color: #333;
            margin-top: 15px;
            font-size: 18px;
          }
          ul {
            padding-left: 20px;
            margin-bottom: 20px;
          }
          li {
            margin-bottom: 6px;
            line-height: 1.4;
          }
          a {
            color: #0d9488;
            text-decoration: none;
          }
          strong {
            font-weight: bold;
          }
          p {
            margin-bottom: 10px;
          }
          .contact-info {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-bottom: 20px;
          }
          .contact-item {
            margin-bottom: 10px;
          }
          .section {
            margin-bottom: 20px;
          }
          .skills-container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }
          .skills-section {
            flex: 1;
            min-width: 45%;
          }
        </style>
      </head>
      <body>
        <div id="resume-content">
          ${convertMarkdownToHTML(markdown)}
        </div>
      </body>
      </html>
    `;
    
    // Write the HTML to a temporary file
    const tempHtmlPath = path.join(__dirname, '../temp-resume.html');
    fs.writeFileSync(tempHtmlPath, htmlContent);
    
    // Launch a browser instance
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    // Create a new page
    const page = await browser.newPage();
    
    // Navigate to the HTML file
    await page.goto(`file://${tempHtmlPath}`, { waitUntil: 'networkidle0' });
    
    // Generate PDF
    const pdfPath = path.join(__dirname, '../public/resume.pdf');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      margin: { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' },
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: ' ',
      footerTemplate: `
        <div style="width: 100%; font-size: 8px; padding: 0 1cm; color: #777; text-align: center;">
          <span>Ahmed Abd Elmohsen • Resume • Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
        </div>
      `
    });
    
    // Close browser
    await browser.close();
    
    // Remove the temporary HTML file
    fs.unlinkSync(tempHtmlPath);
    
    console.log('PDF successfully generated and saved to public/resume.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
}

// Enhanced markdown to HTML converter for better structure
function convertMarkdownToHTML(markdown) {
  // Process sections separately for better structure
  const sections = markdown.split(/(?=^## |^# )/gm);
  
  let processedHTML = '';
  
  sections.forEach(section => {
    // Process the section header
    let sectionHTML = section
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^### (.*$)/gm, '<h3>$1</h3>');
    
    // Process lists
    const listRegex = /^- (.*)$/gm;
    let match;
    let listItems = [];
    let lastIndex = 0;
    
    // Clone the section HTML for processing
    let tempHTML = sectionHTML;
    
    while ((match = listRegex.exec(tempHTML)) !== null) {
      if (listItems.length === 0) {
        // First item in a list
        lastIndex = match.index;
      }
      
      listItems.push(`<li>${match[1]}</li>`);
      
      // Check if next line is not a list item
      const nextLineStart = match.index + match[0].length + 1;
      const nextLine = tempHTML.substring(nextLineStart, nextLineStart + 2);
      
      if (nextLine !== '- ' || nextLineStart >= tempHTML.length) {
        // End of list
        const listContent = listItems.join('');
        const fullList = `<ul>${listContent}</ul>`;
        
        // Replace the entire list in the section
        const beforeList = tempHTML.substring(0, lastIndex);
        const afterList = tempHTML.substring(match.index + match[0].length);
        tempHTML = beforeList + fullList + afterList;
        
        // Reset for next list
        listItems = [];
        // Need to reset regex after modifying the string
        listRegex.lastIndex = 0;
      }
    }
    
    // Update sectionHTML with the processed lists
    sectionHTML = tempHTML;
    
    // Process bold text
    sectionHTML = sectionHTML.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Process links
    sectionHTML = sectionHTML.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
    
    // Handle Contact Information section specially
    if (sectionHTML.includes('<h3>Contact Information</h3>')) {
      const contactStart = sectionHTML.indexOf('<h3>Contact Information</h3>') + '<h3>Contact Information</h3>'.length;
      const contactEnd = sectionHTML.indexOf('<h3>', contactStart);
      
      let contactSection = '';
      if (contactEnd !== -1) {
        contactSection = sectionHTML.substring(contactStart, contactEnd);
      } else {
        contactSection = sectionHTML.substring(contactStart);
      }
      
      // Convert contact list to a flex layout
      if (contactSection.includes('<ul>')) {
        const contactList = contactSection.substring(
          contactSection.indexOf('<ul>') + 4,
          contactSection.indexOf('</ul>')
        );
        
        const contactItems = contactList.split('</li>');
        let formattedContacts = '<div class="contact-info">';
        
        contactItems.forEach(item => {
          if (item.includes('<li>')) {
            formattedContacts += `<div class="contact-item">${item.replace('<li>', '')}</div>`;
          }
        });
        
        formattedContacts += '</div>';
        
        // Replace the contact section
        sectionHTML = sectionHTML.replace(
          contactSection,
          contactSection.replace(/<ul>.*?<\/ul>/s, formattedContacts)
        );
      }
    }
    
    // Handle Skills section specially
    if (sectionHTML.includes('<h3>Technical Skills</h3>') || sectionHTML.includes('<h2>Technical Skills</h2>')) {
      // Find all skill categories and create a flex layout
      const skillsList = sectionHTML.match(/<h3>([^<]+)<\/h3>\s*<ul>([^<]+)<\/ul>/g);
      
      if (skillsList) {
        let skillsHTML = '<div class="skills-container">';
        
        skillsList.forEach(skillGroup => {
          const title = skillGroup.match(/<h3>([^<]+)<\/h3>/)[1];
          const items = skillGroup.match(/<ul>([^<]+)<\/ul>/)[1];
          
          skillsHTML += `
            <div class="skills-section">
              <h3>${title}</h3>
              <ul>${items}</ul>
            </div>
          `;
        });
        
        skillsHTML += '</div>';
        
        // Replace the skills section
        sectionHTML = sectionHTML.replace(
          /<h2>Technical Skills<\/h2>.*?(?=<h2>|$)/s,
          '<h2>Technical Skills</h2>' + skillsHTML
        );
      }
    }
    
    // Convert newlines to paragraphs for regular text
    sectionHTML = sectionHTML.replace(/\n\n/g, '</p><p>');
    
    // Add to the complete HTML
    processedHTML += sectionHTML;
  });
  
  return processedHTML;
}

// Run the function
generatePDF(); 
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function generatePDF() {
  try {
    console.log('Starting PDF generation...');
    
    // Read the ATS-optimized HTML file
    const htmlPath = path.join(__dirname, '../public/ats-resume.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    console.log('Setting page content...');
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    
    console.log('Generating PDF...');
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
    
    await browser.close();
    
    console.log(`PDF generated successfully: ${pdfPath}`);
    return pdfPath;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
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

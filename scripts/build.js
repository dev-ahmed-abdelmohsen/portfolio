const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

async function cleanBuild() {
  try {
    // Remove .next directory if it exists
    const nextDir = path.join(process.cwd(), '.next');
    if (fs.existsSync(nextDir)) {
      fs.rmSync(nextDir, { recursive: true, force: true });
      console.log('Cleaned .next directory');
    }
    
    // Run the build
    exec('next build', (error, stdout, stderr) => {
      if (error) {
        console.error(`Build error: ${error}`);
        return;
      }
      console.log(stdout);
      if (stderr) console.error(stderr);
    });
  } catch (err) {
    console.error('Clean build failed:', err);
  }
}

cleanBuild();

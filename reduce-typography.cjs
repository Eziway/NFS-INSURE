const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'views');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  content = content.replace(/text-\[clamp\(2rem,4vw,3\.5rem\)\]/g, 'text-[clamp(1.8rem,3.5vw,3.2rem)]');
  content = content.replace(/text-\[clamp\(1\.8rem,3vw,2\.5rem\)\]/g, 'text-[clamp(1.6rem,2.8vw,2.2rem)]');
  content = content.replace(/text-\[clamp\(2\.5rem,4\.5vw,4rem\)\]/g, 'text-[clamp(2.2rem,4vw,3.5rem)]');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated typography in ${path.basename(filePath)}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.vue')) {
      replaceInFile(fullPath);
    }
  });
}

processDirectory(directoryPath);
console.log('Typography reduction complete.');

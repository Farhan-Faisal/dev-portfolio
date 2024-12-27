// resumeProcessor.js
const fs = require('fs');
const path = require('path');


const resumePath = path.join(__dirname, 'data', 'resume.txt');

const resumeContent = fs.readFileSync(resumePath, 'utf-8');

const chunks = resumeContent
  .split('\n\n')
  .map(chunk => chunk.trim())
  .filter(chunk => chunk.length > 0);
  
module.exports = chunks;

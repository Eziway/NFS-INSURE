const fs = require('fs');
const pdf = require('pdf-parse');
let dataBuffer = fs.readFileSync('public/docs/Flyer_2025_Oct2025_english (2) (1).pdf');
// Sometimes it's default export
const parseFunc = typeof pdf === 'function' ? pdf : pdf.default || pdf.pdf;
parseFunc(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(function(error){
    console.log(error)
});

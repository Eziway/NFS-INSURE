const fs = await import('fs');
const pdfPath = 'public/docs/Flyer_2025_Oct2025_english (2) (1).pdf';
const dataBuffer = fs.readFileSync(pdfPath);

import('pdf-parse').then(async (pdfModule) => {
    try {
        const pdf = pdfModule.default;
        const data = await pdf(dataBuffer);
        console.log(data.text);
    } catch (e) {
        console.log('Error inside:', e);
    }
}).catch(console.error);

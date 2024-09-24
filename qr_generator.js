import QRCode from 'qrcode';
import { createCanvas } from 'canvas';
import fs from 'fs';

const generateSimpleQRCode = async (url, outputFilePath) => {
    try {
        const canvas = createCanvas(300, 300);
        await QRCode.toCanvas(canvas, url, {
            errorCorrectionLevel: 'L',
            version: 4,
        });
        const buffer = canvas.toBuffer('image/jpeg');
        fs.writeFileSync(outputFilePath, buffer);
    } catch (err) {
        console.error('Error generating QR code:', err);
    }
};

// const url = 'https://api.cactusplants.org/sub/Q3RzMTAwMywxNzI3MTY4MTg07n5e5V72lD';

// const outputFilePath = path.join(subscriptionsDir, 'simplified-qrcode.jpg');

// generateSimpleQRCode(url, outputFilePath);

export { generateSimpleQRCode }

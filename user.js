import { HttpService } from "./axios.js";
import { generateUserNameAndUserId } from "./helper.js";
import { body } from "./request_body.js";
import { generateSimpleQRCode } from './qr_generator.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url'; // Import to convert URL to path

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const subscriptionsDir = path.join(__dirname, 'subscriptions');

function addUsers(count) {
    let users = generateUserNameAndUserId(count);

    users.forEach(async user => {
        const requestBody = body(user);
        const response = await HttpService.post('api/user', requestBody);
        user.subscription = response.data.subscription_url;
        const outputFilePath = path.join(subscriptionsDir, `${user.userName}.jpg`);
        generateSimpleQRCode(response.data.subscription_url, outputFilePath);
    });

    const jsonString = JSON.stringify(users, null, 2);
    const filePath = path.join(__dirname, 'users.json');
    fs.writeFileSync(filePath, jsonString, 'utf-8');
}

addUsers(187);

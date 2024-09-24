import axios from 'axios';
import { TOKEN, URL } from './constants.js';

const HttpService = axios.create({
    // Configuration
    baseURL: URL,
    timeout: 30000,
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${TOKEN}`
    },
});

export { HttpService }
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://x.x.x.x:3333'
});

export default api;
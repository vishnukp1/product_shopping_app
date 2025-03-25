
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://product-shopping-app.onrender.com/api', 
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;


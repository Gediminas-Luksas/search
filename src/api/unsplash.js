import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 35f39508ecb381f1e2236993319820d04681dd73f64b736a35940214684a71e3' 
    }
});

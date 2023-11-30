import axios from 'axios';


export default axios.create({
    baseURL: 'http://localhost:8080',
    headers: {"ngrok-skip-browser-warning": "true"} //put this to avoid cors origin
});

 
import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/e-clone-2c31a/us-central1/api' //api (cloud function) URL
});

export default instance;
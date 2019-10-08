import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-pizza-builder-86234.firebaseio.com/'
});

export default instance;


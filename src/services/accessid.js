import axios from 'axios';
/**
 * AccessID
 * @type {AxiosInstance}
 */

const accessid = axios.create({
    baseURL: 'http://3.135.82.96:81/',
    headers: {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}});

export default accessid;
/* eslint-disable */
import axios, { AxiosInstance } from 'axios';
// import store from '../store';

// Default API will be your root
const API_ROOT = 'http://localhost:4000';
const TIMEOUT = 20000;
const HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*'
};


interface BaseServiceProps {
    baseURL?: string,
    timeout?: number,
    headers?: any,
    auth?: any
}

class BaseService {
    client: AxiosInstance;
    constructor() {
        const client = axios.create({
            baseURL: API_ROOT,
            timeout: TIMEOUT,
            headers: HEADERS
        });

        client.interceptors.response.use(this.handleSuccess, this.handleError);
        client.interceptors.request.use(function (config) {
            let token = ""; //get from redux
            if (token) {
                console.log("asddada ", config.headers.Authorization)
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });
        this.client = client;
    }

    handleSuccess(response) {
        return response;
    }

    handleError(error?: any, con?: any) {
        let message = error.response && error.response.data && error.response.data.message;
        if (Array.isArray(message)) {
            message = message.reduce((res, m) => {
                res += `${m}\n`;
                return res;
            }, '');
        }
        return Promise.reject(message);
    }

    get(path: string = "") {
        return this.client.get(path).then((response) => response.data);
    }

    post(path: any, payload?: any, headers?: any) {
        return this.client.post(path, payload, headers).then((response) => response.data);
    }

    put(path, payload) {
        // return this.client.put(path, payload).then((response) => response.data);
    }

    patch(path, payload) {
        // return this.client.patch(path, payload).then((response) => response.data);
    }

    delete(path) {
        // return this.client.delete(path).then((response) => response.data);
    }
}

export default BaseService;
import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";

const instance: AxiosInstance = axios.create({
    timeout: 60000,
    headers: {
      "Accept-Language": "en",
    },
});

interface IRequest {
    baseUrl: string;
    headers?: {};
    instance: AxiosInstance;
}

class Request {
    private readonly self: IRequest;

    constructor(baseUrl: string, headers?: {}, axiosInstance?: AxiosInstance) {
        this.self = {
          baseUrl,
          headers,
          instance: axiosInstance || instance,
        };
    }

    post: (
        endpoint: string,
        data?: any,
        config?: AxiosRequestConfig
      ) => AxiosPromise<any> = (endpoint, data, config) => {
        const url = `${this.self.baseUrl}${endpoint}`;
        return this.self.instance({
          url,
          data,
          method: "POST",
          headers: this.self.headers,
          ...config,
        });
    };

    get: (
        fullEndpoint: string,
        params?: any,
        config?: AxiosRequestConfig
      ) => AxiosPromise<any> = (fullEndpoint, params, config) => {
        const url = `${this.self.baseUrl}${fullEndpoint}`;
        return this.self.instance({
          url,
          params,
          method: "GET",
          headers: this.self.headers,
          ...config,
        });
      };
}

export default Request;
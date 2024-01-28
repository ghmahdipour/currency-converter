import Request from "./requestUtil";

interface IRequestBuilder {
  baseUrl: string;
  headers?: {};
}

interface IOption {
  mock?: boolean;
}

class RequestBuilder {
  private readonly self: IRequestBuilder;

  constructor() {
    this.self = {
      baseUrl: "",
      headers: {},
    };
  }

  withHeaders(headers: {}): RequestBuilder {
    this.self.headers = { ...this.self.headers, ...headers };
    return this;
  }

  build(option?: IOption): Request {
    return new Request(
      this.self.baseUrl,
      this.self.headers,
    );
  }
}

const request = new RequestBuilder();

export default request;

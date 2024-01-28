import request from "@helpers/request";

function login(params: {
    country: string;
    city: string;
    username: string;
    password: string;
}) {
    return request
        .withHeaders({ "Content-Type": "application/json;utf-8" })
        .build()
        .post(`https://65b098f1d16d31d11bdcd550.mockapi.io/api/v1/login`, {
            params
        });
}

const loginServices = {
    login
};

export default loginServices;

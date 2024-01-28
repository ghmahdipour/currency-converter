import request from "@helpers/request";

function fetchCurrency(currency: string) {
    return request
        .withHeaders({ "Content-Type": "application/json;utf-8" })
        .build()
        .get(`https://v6.exchangerate-api.com/v6/612b511a8b86f2f917a7b3df/latest/${currency}`);
}

const currencyServices = {
    fetchCurrency
};

export default currencyServices;

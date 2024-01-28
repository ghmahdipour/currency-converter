import { AxiosResponse } from "axios";
import request from "@helpers/request";

function fetchChartData(): Promise<AxiosResponse<any>> {
    const categories = 
    [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
    ];
    const index = Math.floor(Math.random() * categories.length);
    const category = categories[index];
    return request
        .withHeaders({ "Content-Type": "application/json;utf-8" })
        .build()
        .get(`https://fakestoreapi.com/products/category/${category}`);
}


const chartServices = {
    fetchChartData
};

export default chartServices;
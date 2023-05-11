import {products} from "../data/products.js";

export const getProducts = () => {
    return products;
}

export const calculeTotal = (items) => {
    return items.reduce((accumulator, item) => accumulator + item.product.price*item.amount, 0)
}

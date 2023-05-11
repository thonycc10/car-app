import {CatalogView} from "./components/CatalogView.jsx";
import {CartView} from "./components/CartView.jsx";
import {useState} from "react";
import {products} from "./data/products.js";

const initialCartItems = []
export const CatalogApp = () => {

    const [cartItems, setCartItems] = useState(initialCartItems);

    const handlerAddProductCart = (product) => {

        const hasItem = cartItems.find((item) => item.product.id === product.id);

        if (hasItem) {
            setCartItems(
                cartItems.map((item) => {
                        if (item.product.id === product.id) {
                            item.amount = item.amount + 1;
                        }

                        return item;
                    }
                )
            )
        } else {
            setCartItems([
                ...cartItems,
                {
                    product,
                    amount: 1,
                }])
        }
    }

    return (
        <>
            <div className="container">
                <h1>Cart App</h1>
                <CatalogView handler={handlerAddProductCart}/>
                <div className="my-4 w-50">
                    <CartView items={cartItems}/>
                </div>
            </div>
        </>
    )
}

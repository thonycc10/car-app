import {CatalogView} from "./components/CatalogView.jsx";
import {CartView} from "./components/CartView.jsx";
import {useState} from "react";

const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];
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

    const handlerDeleteProductCart = (id) => {
        setCartItems(
            [
                ...cartItems.filter((item) => item.product.id !== id)
            ]
        )
    }

    return (
        <>
            <div className="container">
                <h1>Cart App</h1>
                <CatalogView handler={handlerAddProductCart}/>
                {
                    cartItems?.length <= 0 ||
                    (
                        <div className="my-4 w-50">
                            <CartView handlerDelete={handlerDeleteProductCart} items={cartItems}/>
                        </div>
                    )
                }
            </div>
        </>
    )
}

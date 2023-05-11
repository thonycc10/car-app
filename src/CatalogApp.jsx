import {CatalogView} from "./components/CatalogView.jsx";
import {CartView} from "./components/CartView.jsx";
import {useEffect, useReducer} from "react";
import {itemsReducer} from "./reducer/itemsReducer.js";
import {AddProductCart, DeleteProductCart, UpdateProductCart} from "./reducer/itemsActions.js";

const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];
export const CatalogApp = () => {

    // const [cartItems, setCartItems] = useState(initialCartItems);
    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

    useEffect(() => {
        sessionStorage.setItem("cart", JSON.stringify(cartItems))
    },[cartItems])

    const handlerAddProductCart = (product) => {

        const hasItem = cartItems.find((item) => item.product.id === product.id);

        if (hasItem) {
            dispatch (
                {
                    type: UpdateProductCart,
                    payload: product
                }
            )
        } else {
            dispatch (
                {
                    type: AddProductCart,
                    payload: product
                }
            )
        }
    }

    const handlerDeleteProductCart = (id) => {
        dispatch (
            {
                type: DeleteProductCart,
                payload: id
            }
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

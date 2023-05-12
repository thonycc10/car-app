const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];
import {useEffect, useReducer} from "react";
import {itemsReducer} from "../reducer/itemsReducer.js";
import {AddProductCart, DeleteProductCart, UpdateProductCart} from "../reducer/itemsActions.js";

// creas tu hooks para reutilizar cierta logica de negocio.
export const useItemsCart = () => {
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

    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart
    }
}

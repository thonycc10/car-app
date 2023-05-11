import {AddProductCart, DeleteProductCart, UpdateProductCart} from "./itemsActions.js";

export const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case AddProductCart:
            return [
                ...state,
                {
                    product: action.payload,
                    amount: 1,
                }]
        case UpdateProductCart: // pensar en react es inmutable los datos originales no cambia
            return state.map((item) => {
                    if (item.product.id === action.payload.id) {
                        return {
                            ...item,
                            amount: item.amount + 1
                        }
                    }
                    return item;
                }
            )
        case DeleteProductCart:
            return state.filter((item) => item.product.id !== action.payload)
        default:
            return state;
    }
}

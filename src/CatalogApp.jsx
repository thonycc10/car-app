import {CatalogView} from "./components/CatalogView.jsx";
import {CartView} from "./components/CartView.jsx";
import {useItemsCart} from "./hooks/useItemsCart.js";
import {Navigate, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/Navbar.jsx";

export const CatalogApp = () => {

    const {cartItems, handlerAddProductCart, handlerDeleteProductCart} = useItemsCart();

    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Cart App</h1>
                <Routes>
                    <Route path={"catalog"} element={<CatalogView handler={handlerAddProductCart}/>}/>
                    <Route path={"cart"} element={(
                        cartItems?.length <= 0 ?
                            <div className="alert alert-warning">No hay productos en el carrito de compras!</div>
                            :
                            (
                                <div className="my-4 w-50">
                                    <CartView handlerDelete={handlerDeleteProductCart} items={cartItems}/>
                                </div>
                            )
                    )}/>
                    <Route path={"/"} element={<Navigate to={"/catalog"}/>}/>
                </Routes>


            </div>
        </>
    )
}

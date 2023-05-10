import {useEffect, useState} from "react";
import {getProducts} from "../productService.js";
import {CartItemView} from "./CatalogItemView.jsx";
import PropTypes from "prop-types";

export const CatalogView = ({handler}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts());
    }, [])

    return (
        <>
            <div className="row">
                {
                    products.map(({id, name, price, description}) => (
                        <div className="col-4 my-2" key={id}>
                            <CartItemView handler={handler} id={id} name={name} price={price} description={description}/>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

CatalogView.propTypes = {
    handler: PropTypes.object
}

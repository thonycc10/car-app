import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {calculeTotal} from "../services/productService.js";

export const CartView = ({handlerDelete, items}) => {

    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(calculeTotal(items))
    },[items])

    const onDeleteProduct = (id) => {
        handlerDelete(id)
    }

    return (
        <>
            <table className={"table table-hover table-striped"}>
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Total</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    items.map(item => (
                        <tr key={item.product.id}>
                            <td>{item.product.name}</td>
                            <td>{item.product.price}</td>
                            <td>{item.amount}</td>
                            <td>{item.amount * item.product.price}</td>
                            <td><button onClick={() => onDeleteProduct(item.product.id)} className={"btn btn-danger"}>Eliminar</button></td>
                        </tr>
                    ))
                }
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan={"3"} className={"text-end fw-bold"}>Total</td>
                    <td colSpan={"2"} className={"text-start fw-bold"}>{total}</td>
                </tr>
                </tfoot>
            </table>
        </>
    )
}

CartView.prototype = {
    items: PropTypes.any,
    handlerDelete: PropTypes.func
}

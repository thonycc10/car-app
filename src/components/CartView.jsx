import PropTypes from "prop-types";

export const CartView = ({items}) => {

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
                            <td><button className={"btn btn-danger"}>Eliminar</button></td>
                        </tr>
                    ))
                }
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan={"3"} className={"text-end fw-bold"}>Total</td>
                    <td colSpan={"2"} className={"text-start fw-bold"}>123</td>
                </tr>
                </tfoot>
            </table>
        </>
    )
}

CartView.prototype = {
    items: PropTypes.any
}

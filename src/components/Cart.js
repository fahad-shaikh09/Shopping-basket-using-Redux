import React, {useContext} from "react";
import ShoppingContext from "./ShoppingContext";

const Cart = () => {
let contextObj = useContext(ShoppingContext)

    return (
        <div>
            <h2>You have {contextObj.ItemsInCart} items in Cart!</h2>
            <h2>Total Amount: Rs. {contextObj.AmountTotal} </h2>
        </div>
    )
}

export default Cart
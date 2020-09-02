import red from "./../Images/red.png"
import green from "./../Images/green.png"
import blue from "./../Images/blue.png"

export const initialState = [{
    id: 1,
    title: "Green Shirt",
    itemPrice: 1000,
    desc: "Lorem ipsum dolor sit amet, postea latine vidisse vim an, no iusto putent qui, mollis euismod adversarium vim ex. Velit mucius integre eam ex.",
    color: "green",
    src: green,
    isAdded: false
},
{
    id: 2,
    title: "Red Shirt",
    itemPrice: 2000,
    desc: "Lorem ipsum dolor sit amet, postea latine vidisse vim an, no iusto putent qui, mollis euismod adversarium vim ex. Velit mucius integre eam ex.",
    color: "red",
    src: red,
    isAdded: false
},
{
    id: 3,
    title: "Blue Shirt",
    itemPrice: 1000,
    desc: "Lorem ipsum dolor sit amet, postea latine vidisse vim an, no iusto putent qui, mollis euismod adversarium vim ex. Velit mucius integre eam ex.",
    color: "blue",
    src: blue,
    isAdded: false,
}]

export default function ShoppingReducer(state = initialState, action) {
    switch (action) {
        case "ADDTOCART":
            return { ...state, isAdded: true, itemsInCart: state.itemsInCart + 1 };
        case "REMOVEFROMCART":
            return { ...state, isAdded: false, itemsInCart: state.itemsInCart - 1 };


        default:
            return state;
    }

}

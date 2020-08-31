import red from "./../Images/red.png"
import green from "./../Images/green.png"
import blue from "./../Images/blue.png"

export const initialState = [{
    id: 1,
    title: "Green Shirt",
    itemPrice: 1000,
    desc: "Loem ipsum........",
    color: "green",
    src: green,
    isAdded: false
},
{
    id: 2,
    title: "Red Shirt",
    itemPrice: 2000,
    desc: "Loem ipsum........",
    color: "red",
    src: red,
    isAdded: false
},
{
    id: 3,
    title: "Blue Shirt",
    itemPrice: 1000,
    desc: "Loem ipsum........",
    color: "blue",
    src: blue,
    isAdded: false,
},
{
    itemsInCart: 0
}
]

export default function ShoppingReducer(state = initialState, action) {
    switch (action.type) {
        case "ADDTOCART":
            return { ...state, isAdded: true, itemsInCart: state.itemsInCart+1 };
        case "REMOVEFROMCART":
            return { ...state, isAdded: false, itemsInCart: state.itemsInCart-1 };
        // case "SETTITLE":
        //     return { ...state, title: props.title }
        // case "PRICEINCR":
        //     {...state, state.priceTotal: state.priceTotal+1};
        // case "PRICEDECR":
        //     {...state, state.priceTotal: state.priceTotal-1};

        default:
            return state;
    }

}

import {ADD_TO_CART} from "../../constants"
const addToCart = (data)=>{
    console.log("action",data);
    return {
        data,
        type: ADD_TO_CART
    }
}

// const removeCart= (data)=>{
//     console.log("action remove", data)
//     return {
//         data,
//         type:REMOVE_TO_CART
//     }
// }


export default addToCart;

































import { ADD_TO_CART} from "../../constants";

// const intailState={
//     cardData:[]
// }


export default function cardItems(state=[],action){
    switch(action.type){
        case ADD_TO_CART:
            // console.log("reducerDaa",action);
            return [
                ...state,
                {cardData:action.data}
                
    ]
            // break;

            default:
                return state
    }   
}































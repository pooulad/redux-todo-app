import { TOGGLE_TODO, ADD_TODO } from "./types";


const initialState = {
    data : []
}


const reducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_TODO : 
        case TOGGLE_TODO : 
        default : return state
    }
}
export default reducer
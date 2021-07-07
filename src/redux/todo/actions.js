import { TOGGLE_TODO, ADD_TODO } from "./types";

let initialId = 0

export const addTodo = row => {
    return {
        type : ADD_TODO,
        payload: {
            id: ++initialId,
            content: row
        }
    }
}
export const toggleTodo = id => {
    return {
        type : TOGGLE_TODO,
        payload: {
            id: id,
        }
    }
}
import { GET_ITEMS, Add_ITEM } from "../actions/types";

const initialState = {
    items: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload
            };
        case Add_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        default:
            return state;
    }
}
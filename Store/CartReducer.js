import { cartObject } from './type';

const initialState = {
    Data: [],
}

export function CartReducer(state = initialState, action) {
    switch (action.type) {
        case cartObject:
            return {
                ...state,
                Data: action.payload,
            };
        default:
            return state;
    }
}
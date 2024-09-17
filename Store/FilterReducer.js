import { dataObject } from './type';

const initialState = {
    Data: [],
}

export function FilterReducer(state = initialState, action) {
    switch (action.type) {
        case dataObject:
            return {
                ...state,
                Data: action.payload,
            };
        default:
            return state;
    }
}
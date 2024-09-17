import { wishObject } from './type';

const initialState = {
    Data: [],
}

export function WishListReducer(state = initialState, action) {
    switch (action.type) {
        case wishObject:
            return {
                ...state,
                Data: action.payload,
            };
        default:
            return state;
    }
}
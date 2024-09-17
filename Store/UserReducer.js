import { userId, userName, userAge, userEmail, userContact, userAddress, userPassword } from './type';

const initialState = {
    Id: '',
    Name: '',
    Age: '',
    Email: '',
    Contact: '',
    Address: '',
    Password: '',
};

export function UserReducer(state = initialState, action) {
    switch (action.type) {
        case userName:
            return {
                ...state,
                Name: action.payload,
            };
        case userAge:
            return {
                ...state,
                Age: action.payload,
            };
        case userEmail:
            return {
                ...state,
                Email: action.payload,
            };
        case userId:
            return {
                ...state,
                Id: action.payload,
            };
        case userContact:
            return {
                ...state,
                Contact: action.payload,
            };
        case userAddress:
            return {
                ...state,
                Address: action.payload,
            };
        case userPassword:
            return {
                ...state,
                Password: action.payload,
            };
        default:
            return state;
    }
}
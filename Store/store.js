import { createStore, combineReducers } from 'redux';
import { UserReducer } from './UserReducer';
import { FilterReducer } from './FilterReducer';
import { CartReducer } from './CartReducer';
import { WishListReducer } from './WishListReducer';


const rootReducer = combineReducers({
    UserReducer: UserReducer,
    FilterReducer: FilterReducer,
    CartReducer: CartReducer,
    WishListReducer:WishListReducer,
})

const Store = () => {
    // return configureStore({reducer: rootReducer});
    return createStore(rootReducer);
}

export default Store;
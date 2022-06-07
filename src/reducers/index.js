import { combineReducers } from "redux";
import cartReducers from './cart'

const allReducers = combineReducers({
    cart: cartReducers
});

export default allReducers;
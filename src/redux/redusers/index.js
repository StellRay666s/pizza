import filters from './filters';
import pizzas from './pizzas';
import { combineReducers } from 'redux';
import cart from './cart';
const rooteReducer = combineReducers({
  filters,
  pizzas,
  cart,
});

console.log(rooteReducer);

export default rooteReducer;

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};
const gettotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const currentPizza = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizza,
          totalPrice: gettotalPrice(currentPizza),
        },
      };
      const items = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = [].concat.apply([], items);
      const totalPrice = gettotalPrice(allPizzas);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice,
      };
    }
    case 'CLEAR_CART':
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };

    default:
      return state;
  }
};
export default cart;

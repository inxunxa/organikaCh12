// reducer: a simple fn that receives state and action, and return a new state
const cartProductsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      var copy = [...state]; // clone

      // here
      var alreadyThere = false;

      for (let i = 0; i < copy.length; i++) {
        var item = copy[i];
        if (action.payload.product.id === item.product.id) {
          item.quantity += action.payload.quantity;
          alreadyThere = true;
        }
      }

      if (!alreadyThere) {
        copy.push(action.payload);
      }

      // send the current cart (copy) to server

      return copy;

    case "REMOVE_PRODUCT":
      return state.filter((pc) => pc.product.id !== action.payload.product.id);

    default:
      return state;
  }
};

export default cartProductsReducer;

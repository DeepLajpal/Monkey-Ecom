const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, color, amount, product } = action.payload;
      const cartProduct = {
        id: id + color,
        name: product.name,
        color,
        image: product.image[0].url,
        amount,
        price: product.price,
        maxStock: product.stock,
      };

      // Check if the cartProduct's id is already present in the cart
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === cartProduct.id
      );

      if (existingProductIndex !== -1) {
        // If the product is already in the cart, update the amount
        const updatedCart = [...state.cart];
        const existingProduct = updatedCart[existingProductIndex];

        // Check if the updated amount exceeds the max stock
        const newAmount = existingProduct.amount + amount;
        if (newAmount > existingProduct.maxStock) {
          existingProduct.amount = existingProduct.maxStock;
        } else {
          existingProduct.amount = newAmount;
        }

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // If the product is not in the cart, add it to the cart
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }

    case "REMOVE_PRODUCT":
      const updatedItems = state.cart.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        cart: updatedItems,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "AMT_INCREASE":
      const tempCartItems = [...state.cart];
      const updatedCartItemsIndex = state.cart.findIndex(
        (product) => product.id === action.payload
      );
      tempCartItems[updatedCartItemsIndex].amount =
        tempCartItems[updatedCartItemsIndex].amount <
        tempCartItems[updatedCartItemsIndex].maxStock
          ? tempCartItems[updatedCartItemsIndex].amount + 1
          : tempCartItems[updatedCartItemsIndex].amount;
      return {
        ...state,
        cart: tempCartItems,
      };

    case "AMT_DECREASE":
      const tempCartItems2 = [...state.cart];
      const updatedCartItemsIndex2 = state.cart.findIndex(
        (product) => product.id === action.payload
      );
      tempCartItems2[updatedCartItemsIndex2].amount =
        tempCartItems2[updatedCartItemsIndex2].amount > 1
          ? tempCartItems2[updatedCartItemsIndex2].amount - 1
          : tempCartItems2[updatedCartItemsIndex2].amount;
      console.log(tempCartItems2[updatedCartItemsIndex2]);
      return {
        ...state,
        cart: tempCartItems2,
      };

    // case "TOTAL_CART_ITEM":
    //   let updatedTotalCartItems = state.cart.reduce((initialVal, curElm) => {
    //     initialVal = initialVal + curElm.amount;
    //     return initialVal;
    //   }, 0);
    //   return {
    //     ...state,
    //     total_Items: updatedTotalCartItems,
    //   };

    // case "TOTAL_CART_PRICE":
    //   let updatedTotalCartPrice = state.cart.reduce((initialVal, curElm) => {
    //     initialVal = initialVal + curElm.amount * curElm.price;
    //     return initialVal;
    //   }, 0);
    //   return {
    //     ...state,
    //     total_price: updatedTotalCartPrice,
    //   };

    case "CART_TOTAL_ITEM_PRICE":
      if (state.cart === null) {
        // Handle the case when cart is null, maybe set total_Items and total_price to 0 or return the state as is.
        return state;
      }

      const { total_Items, total_price } = state.cart.reduce(
        (accum, curElm) => {
          const { amount, price } = curElm;
          accum.total_Items += amount;
          accum.total_price += amount * price;
          return accum;
        },
        { total_Items: 0, total_price: 0 }
      );
      return {
        ...state,
        total_Items,
        total_price,
      };

    default:
      return state;
  }
};

export default cartReducer;

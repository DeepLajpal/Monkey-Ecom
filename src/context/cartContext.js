import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../reducers/cartReducer";

const cartContext = createContext();
// const getLocalCartData = () => {
//   const localCartData = localStorage.getItem("localCart");
//   if (localCartData === []) {
//     return [];
//   } else {
//     return JSON.parse(localCartData);
//   }
// };
const initialState = {
  // cart: [],
  // cart: getLocalCartData(),
  cart: JSON.parse(localStorage.getItem("localCart")),
  total_Items : "",
  total_price:"",
  total_shipping : 50000
};
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    return dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, amount, product },
    });
  };

  // to store cart data in localStorage
  useEffect(() => {
    dispatch({type: "TOTAL_CART_ITEM"})
    dispatch({type: "TOTAL_CART_PRICE"})
    localStorage.setItem("localCart", JSON.stringify(state.cart));
  }, [state.cart]);

  const removeItem = (id) => {
    return dispatch({ type: "REMOVE_PRODUCT", payload: id });
  };

  const clearCart = (id) => {
    return dispatch({ type: "CLEAR_CART" });
  };

  const amtIncrease = (id) => {
    return dispatch({ type: "AMT_INCREASE", payload: id });
  };
  const amtDecrease = (id) => {
    return dispatch({ type: "AMT_DECREASE", payload: id });
  };

  return (
    <cartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        amtIncrease,
        amtDecrease,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(cartContext);
};

export { cartContext, CartContextProvider, useCartContext };

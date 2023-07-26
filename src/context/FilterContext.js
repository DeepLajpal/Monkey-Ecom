import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducers/filterReducer";

const FilterContext = createContext();
const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "default",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  // sorting function
  const sorting = (event) => {
    const sort_value = event.target.value;
    return dispatch({ type: "GET_SORT_VALUE", payload: sort_value });
  };

  // to clear all filter
  const clearFilter = () => {
    return dispatch({ type: "CLEAR_FILTER" });
  };

  // to update filters value
  const updateFilterValue = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };
  // to sort the products
  useEffect(() => {
    dispatch({ type: "SORT_PRODUCT" });
  }, [state.sorting_value]);

  useEffect(() => {
    dispatch({ type: "UPDATE_FILTER_PRODUCTS" });
  }, [state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);

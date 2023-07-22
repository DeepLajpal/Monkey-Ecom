const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCT":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORT_PRODUCT":
      let newSortProducts;
      const { filter_products, sorting_value } = state;
      const tempSortingProducts = [...filter_products];

      const sortingProducts = (a, b) => {
        switch (state.sorting_value) {
          case "#":
            return state;
          case "a-z":
            return a.name.localeCompare(b.name);
          case "z-a":
            return b.name.localeCompare(a.name);
          case "lowest":
            return a.price - b.price;
          case "highest":
            return b.price - a.price;
          default:
            return state;
        }
      };

      newSortProducts = tempSortingProducts.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortProducts,
      };

    default:
      return state;
  }
};

export default filterReducer;

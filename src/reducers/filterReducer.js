const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCT":
      let priceArr = action.payload.map((product) => product.price);
      let maxPrice = Math.max(...priceArr);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
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

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: { ...state.filters, [name]: value },
      };

    case "CLEAR_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          minPrice: 0,
          maxPrice: state.filters.maxPrice,
          price: state.filters.maxPrice,
        },
      };

    case "UPDATE_FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProducts = [...all_products];
      const { text, category, company, color, price } = state.filters;

      if (text) {
        tempFilterProducts = tempFilterProducts.filter((product) => {
          return product.name.toLowerCase().includes(text);
        });
      }

      if (category.toLowerCase() !== "all") {
        tempFilterProducts = tempFilterProducts.filter(
          (product) => product.category.toLowerCase() === category.toLowerCase()
        );
      }

      if (company.toLowerCase() !== "all") {
        tempFilterProducts = tempFilterProducts.filter(
          (product) => product.company.toLowerCase() === company.toLowerCase()
        );
      }

      if (color.toLowerCase() !== "all") {
        tempFilterProducts = tempFilterProducts.filter((curElem) =>
          curElem.colors.includes(color)
        );
      }

      if (price === 0) {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.price === price
        );
      } else {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.price <= price
        );
      }

      return {
        ...state,
        filter_products: tempFilterProducts,
      };

    case "SORT_PRODUCT":
      let newSortProducts;
      const { filter_products, sorting_value } = state;
      const tempSortingProducts = [...filter_products];
      if (sorting_value !== "default") {
        const sortingProducts = (a, b) => {
          switch (sorting_value) {
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
      } else {
        // When sorting_value is "default", display all products in their original order
        newSortProducts = [...state.all_products];
      }

      return {
        ...state,
        filter_products: newSortProducts,
      };

    default:
      return state;
  }
};

export default filterReducer;

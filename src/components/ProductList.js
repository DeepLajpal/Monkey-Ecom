import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { useFilterContext } from "../context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";



const ProductList = () => {
  const { filter_products, all_products, grid_view } = useFilterContext();

  if (grid_view===true){
    return <GridView products={filter_products}/>
  }
  if (grid_view===false){
    return <ListView products={filter_products}/>
  }
};

const Wrapper = styled.section``;
export default ProductList;

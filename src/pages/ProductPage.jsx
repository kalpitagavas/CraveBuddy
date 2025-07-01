import React from "react";
import Product from "../components/Product/Product"; // assuming this is the listing
import Layout from "./Layout";

const ProductPage = () => {
  return (
    <Layout>
      <Product />
    </Layout>
  );
};

export default ProductPage;

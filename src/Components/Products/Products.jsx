import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  { id: 1, name: "Shoes", description: "running shoes", price: 30 },
  { id: 2, name: "hat", description: "runnign shoes", price: 12 },
  { id: 3, name: "bag", description: "trendy laptop bag", price: 55 },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={14} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

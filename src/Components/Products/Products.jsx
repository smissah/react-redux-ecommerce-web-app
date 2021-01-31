import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./Styles/Style";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "running shoes",
    price: "£30",
    image:
      "https://cdn1.cimalp.co.uk/8517-large_default/trail-running-shoes-with-progressive-drop.jpg",
  },
  {
    id: 2,
    name: "hat",
    description: "sun hat",
    price: "£12",
    image:
      "https://outdoor-and-country-res.cloudinary.com/image/upload/e_trim:2/bo_8px_solid_white/c_pad,b_white,w_1000,h_1200,f_auto,q_auto/v1594030981/product/240325.jpg",
  },
  {
    id: 3,
    name: "bag",
    description: "trendy laptop bag",
    price: "£55",
    image:
      "https://pyxis.nymag.com/v1/imgs/2ce/339/cda4fbe939f1074343e2f5e6bd7e41e426-kback.rhorizontal.w600.jpg",
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {/* used to push content just below the header! */}
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

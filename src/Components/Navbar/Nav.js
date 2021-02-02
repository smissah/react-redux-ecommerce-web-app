import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/logo.png";
import useStyles from "./Styles/Styles";

const Nav = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar positision="fixed" className="classes.appBar" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="hype logo"
              height="25px"
              className={classes.image}
            />
            Hype!
          </Typography>
          <div className="classes.grow"></div>
          {/* this is just a span for the middle */}
          <div className="classesbutton">
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={3} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;

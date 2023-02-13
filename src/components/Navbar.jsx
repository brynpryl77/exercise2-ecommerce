import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Badge, IconButton } from "@mui/material";
import { Home, ShoppingCart } from "@mui/icons-material";

const Navbar = ({
  cartItemsCount,
  showCartSummary,
  onToggleCartSummaryVisibility,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Commerce App
          </Typography>
          <Box sx={{ flexGrow: 1, marginLeft: 5 }} />
          <Box sx={{ display: "flex" }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={onToggleCartSummaryVisibility}
            >
              <Badge
                badgeContent={showCartSummary ? null : cartItemsCount}
                color="error"
              >
                {showCartSummary ? <Home /> : <ShoppingCart />}
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

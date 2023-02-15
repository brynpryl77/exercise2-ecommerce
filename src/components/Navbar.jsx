import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  Badge,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Switch,
} from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  Brightness4,
  MoreVert,
  ShoppingCart,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { UserInterfaceContext } from "../contexts/UserInterfaceContext";

const Navbar = () => {
  const { cartItemsCount } = useContext(CartContext);
  const { darkMode, onToggleDarkMode } = useContext(UserInterfaceContext);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            E-Commerce App
          </Typography>
          <Box sx={{ flexGrow: 1, marginLeft: 5 }} />
          <Box sx={{ display: "flex" }}>
            <IconButton
              size="large"
              color="inherit"
              LinkComponent={Link}
              to="/cart-summary"
            >
              <Badge badgeContent={cartItemsCount} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={handleMenu}>
              <MoreVert />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuList sx={{ width: 300 }}>
                <MenuItem onClick={() => navigate("/admin/products")}>
                  <ListItem>
                    <AdminPanelSettingsOutlined fontSize="medium" />
                  </ListItem>
                  <ListItemText>Admin</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Brightness4 fontSize="medium" />
                  </ListItemIcon>
                  <ListItemText>
                    Appearance: {darkMode ? "Dark" : "Light"}
                  </ListItemText>
                  <Typography variant="body2" color="secondary.text">
                    <Switch value={darkMode} onChange={onToggleDarkMode} />
                  </Typography>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

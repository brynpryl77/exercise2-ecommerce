import React, { Fragment, useContext } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { UserInterfaceContext } from "../contexts/UserInterfaceContext";

const ProductsList = () => {
  const { products, onDeleteProduct } = useContext(ProductContext);
  const { onOpenSnackBar } = useContext(UserInterfaceContext);
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {products.map((product) => (
        <Fragment key={product.id}>
          <ListItem
            alignItems="flex-start"
            secondaryAction={
              <>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  LinkComponent={Link}
                  to={`/admin/products/${product.id}/edit`}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    onDeleteProduct(product.id);
                    onOpenSnackBar({
                      severity: "success",
                      message: "Successfully deleted product",
                    });
                  }}
                >
                  <Delete />
                </IconButton>
              </>
            }
          >
            <ListItemAvatar>
              <Avatar alt={product.title} src={product.image} />
            </ListItemAvatar>
            <ListItemText
              primary={product.title}
              secondary={
                <Grid container spacing={1} component="span">
                  <Grid item xs={12}>
                    <Typography
                      sx={{ display: "inline", marginRight: 1 }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Price:
                    </Typography>
                    PHP {product.price}
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      sx={{ display: "inline", marginRight: 1 }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Stock:
                    </Typography>
                    {product.quantityInStock}
                  </Grid>
                  <Grid item component="span" xs={7}>
                    {product.description}
                  </Grid>
                </Grid>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </Fragment>
      ))}
    </List>
  );
};

export default ProductsList;

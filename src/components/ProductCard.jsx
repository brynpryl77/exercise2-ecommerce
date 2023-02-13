import { Add, AddShoppingCart, Remove } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const ProductCard = ({ product, onAddToCart, cartItem, onRemoveFromCart }) => {
  const renderCartActions = () => {
    return cartItem ? (
      <Grid container spacing={3} direction="row" justifyContent="center">
        <Grid item xs={5}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => onRemoveFromCart(product)}
          >
            <Remove />
          </Button>
        </Grid>
        <Grid item xs={2} sx={{ textAlign: "center" }}>
          <Typography variant="body2">{cartItem.quantity}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => onAddToCart(product)}
          >
            <Add />
          </Button>
        </Grid>
      </Grid>
    ) : (
      <Button
        fullWidth
        startIcon={<AddShoppingCart />}
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </Button>
    );
  };

  return (
    <Card>
      <CardHeader title={product.title} subheader={`PHP ${product.price}`} />
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="body2" color="secondary-text">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>{renderCartActions()}</CardActions>
    </Card>
  );
};

export default ProductCard;

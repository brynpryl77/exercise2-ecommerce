import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const CartSummary = ({ cartItems }) => {
  const getTotalPrice = () => {
    return cartItems.reduce(
      (acc, cartItem) => acc + cartItem.product.price * cartItem.quantity,
      0
    );

    //
  };
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="center">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((ci) => (
            <TableRow>
              <TableCell>{ci.product.title}</TableCell>
              <TableCell align="right">{ci.quantity}</TableCell>
              <TableCell align="right">{ci.product.price}</TableCell>
              <TableCell align="right">
                {ci.product.price * ci.quantity}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableRow>
          <TableCell rowSpan={3} />
          <TableCell colSpan={2}>
            <Typography variant="h5">Subtotal</Typography>
          </TableCell>
          <TableCell align="right">
            <Typography variant="h5">{getTotalPrice()}</Typography>
          </TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  );
};

export default CartSummary;

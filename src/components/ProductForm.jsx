import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from "@mui/material";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductForm = ({ onSubmit, initialValue }) => {
  const [form, setForm] = useState(
    initialValue || {
      title: "",
      description: "",
      price: "",
      quantityInStock: "",
      image: "",
    }
  );

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().min(0.1).required(),
    quantityInStock: Joi.number().min(0).required(),
    image: Joi.string().uri().allow("").optional(),
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.currentTarget.name]: event.currentTarget.value,
    });

    const error = schema
      .extract(event.currentTarget.name)
      .label(event.currentTarget.name)
      .validate(event.currentTarget.value);

    if (error) {
      setErrors({
        ...errors,
        [event.currentTarget.name]: error.details[0].message,
      });
    } else {
      delete errors[event.currentTarget.name];
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(form);
    navigate("/admin/products");
  };

  const isFormInvalid = () => {
    const result = schema.validate(form);
    return !!result.error;
  };
  return (
    <Grid
      container
      justifyContent="center"
      component="form"
      onSubmit={handleSubmit}
    >
      <Grid item xs={6}>
        <Card>
          <CardHeader title="Add Product" />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="title"
                  value={form.title}
                  label="Title"
                  error={!!errors.title}
                  helperText={errors.title}
                  variant="standard"
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="description"
                  value={form.description}
                  label="Description"
                  error={!!errors.description}
                  helperText={errors.description}
                  variant="standard"
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="price"
                  value={form.price}
                  label="Price"
                  error={!!errors.price}
                  helperText={errors.price}
                  variant="standard"
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="quantityInStock"
                  value={form.quantityInStock}
                  label="Stock"
                  error={!!errors.quantityInStock}
                  helperText={errors.quantityInStock}
                  variant="standard"
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="image"
                  value={form.image}
                  label="Image"
                  error={!!errors.image}
                  helperText={errors.image}
                  variant="standard"
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button fullWidth type="submit" disabled={isFormInvalid()}>
              Submit
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProductForm;

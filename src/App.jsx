import {
  Alert,
  createTheme,
  CssBaseline,
  Snackbar,
  ThemeProvider,
} from "@mui/material";
import { blue, green, pink } from "@mui/material/colors";
import { Container } from "@mui/system";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { UserInterfaceContext } from "./contexts/UserInterfaceContext";
import AddProductPage from "./pages/AddProductPage";
import AdminPage from "./pages/AdminPage";
import CartSummaryPage from "./pages/CartSummaryPage";
import EditProductPage from "./pages/EditProductPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  const { darkMode, snackBarConfig, onOpenSnackBar, onCloseSnackBar } =
    useContext(UserInterfaceContext);
  const theme = createTheme({
    palette: {
      primary: {
        main: pink[100],
      },
      secondary: green,
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Snackbar
        open={snackBarConfig.open}
        severity={snackBarConfig.severity}
        autoHideDuration={6000}
        onClose={onCloseSnackBar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={onCloseSnackBar}
          sx={{ width: "100%" }}
        >
          {snackBarConfig.message}
        </Alert>
      </Snackbar>
      <Container sx={{ marginTop: 3 }}>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart-summary" element={<CartSummaryPage />} />
          <Route path="/admin/products/new" element={<AddProductPage />} />
          <Route
            path="/admin/products/:id/edit"
            element={<EditProductPage />}
          />
          <Route path="/admin/products" element={<AdminPage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;

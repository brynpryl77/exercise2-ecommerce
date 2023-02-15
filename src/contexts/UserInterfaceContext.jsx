import { createContext, useState } from "react";

export const UserInterfaceContext = createContext({
  darkMode: false,
  onToggleDarkMode: () => {},
  snackBarConfig: null,
  onOpenSnackBar: () => {},
  onCloseSnackBar: () => {},
});

export const UserInterfaceProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const handleToggleDarkMode = () => {
    localStorage.setItem("darkMode", !darkMode);
    setDarkMode(!darkMode);
  };

  const [snackBarConfig, setSnackBarConfig] = useState({
    open: false,
    severity: "success",
    message: "",
  });
  const handleOpenSnackBar = (snackBarConfig) => {
    setSnackBarConfig({
      open: true,
      severity: snackBarConfig.severity,
      message: snackBarConfig.message,
    });
  };

  const handleCloseSnackBar = () => {
    setSnackBarConfig({
      open: false,
      severity: "",
      message: "",
    });
  };
  return (
    <UserInterfaceContext.Provider
      value={{
        darkMode,
        onToggleDarkMode: handleToggleDarkMode,
        snackBarConfig,
        onOpenSnackBar: handleOpenSnackBar,
        onCloseSnackBar: handleCloseSnackBar,
      }}
    >
      {children}
    </UserInterfaceContext.Provider>
  );
};

import { Components, Theme } from "@mui/material";

export const CardContentStylesOverrides: Components<Theme>["MuiCard"] = {
  styleOverrides: {
    root: {
      padding: "6px",
      width: "100%",
    },
  },
};

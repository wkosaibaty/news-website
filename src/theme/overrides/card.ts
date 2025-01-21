import { Components, Theme } from "@mui/material";

export const CardStylesOverrides: Components<Theme>["MuiCard"] = {
  defaultProps: {
    elevation: 0,
  },
  styleOverrides: {
    root: () => ({
      borderRadius: "12px",
      boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.07)",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.02)",
        boxShadow: "0px 10px 22px 0px rgba(0, 0, 0, 0.09)",
      },
      ".MuiCardActionArea-focusHighlight": {
        background: "transparent !important",
      },
    }),
  },
};

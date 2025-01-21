import { Theme } from "@emotion/react";
import { Components } from "@mui/material";

export const CardMediaStylesOverrides: Components<Theme>["MuiCardMedia"] = {
  styleOverrides: {
    root: {
      height: 190,
      width: "100%",
      objectFit: "cover",
      borderRadius: "12px",
    },
  },
};

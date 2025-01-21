import { createTheme } from "@mui/material";
import typography from "./typography";
import { componentsOverrides } from "./overrides";

export const theme = createTheme({
  typography,
  components: componentsOverrides,
  direction: "ltr",
});

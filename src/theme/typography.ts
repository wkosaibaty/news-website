import { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: TypographyOptions = {
  fontFamily: "var(--font-roboto)",
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  allVariants: {
    letterSpacing: 0,
    fontFamily: "var(--font-roboto)",
  },
  h1: {
    fontSize: "36px",
    fontWeight: 400,
  },
  h2: {
    fontSize: "31px",
    fontWeight: 400,
  },
  h3: {
    fontSize: "25px",
    fontWeight: 400,
  },
  h4: {
    fontSize: "20px",
    fontWeight: 500,
  },
  h5: {
    fontSize: "16px",
    fontWeight: 500,
  },
  h6: {
    fontSize: "13px",
    fontWeight: 500,
  },
  body1: {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "34px",
  },
  body2: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "0.25px",
  },
  caption: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "18px",
    letterSpacing: "0.25px",
  },
};

export default typography;

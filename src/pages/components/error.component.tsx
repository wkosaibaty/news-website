import { Box, Typography } from "@mui/material";
import React from "react";

const ErrorComponent: React.FC = () => {
  return (
    <Box
      display="flex"
      width="100%"
      height="200px"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h3">Something went wrong</Typography>
    </Box>
  );
};

export default ErrorComponent;

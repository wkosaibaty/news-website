import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const LoaderComponent: React.FC = () => {
  return (
    <Box
      display="flex"
      width="100%"
      height="200px"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress />
    </Box>
  );
};

export default LoaderComponent;

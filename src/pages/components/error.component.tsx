import { Box, Typography } from "@mui/material";
import React from "react";

interface ErrorComponentProps {
  message?: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => {
  return (
    <Box
      display="flex"
      width="100%"
      height="200px"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h3">{message ?? "Something went wrong"}</Typography>
    </Box>
  );
};

export default ErrorComponent;

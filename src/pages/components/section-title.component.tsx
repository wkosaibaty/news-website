import { Box, Typography } from "@mui/material";
import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <Box display="flex" gap="6px" alignItems="center">
      <Box
        width="4px"
        height="10px"
        sx={{ backgroundColor: "primary.main", borderRadius: "12px" }}
      ></Box>
      <Typography variant="h4">{title}</Typography>
    </Box>
  );
};

export default SectionTitle;

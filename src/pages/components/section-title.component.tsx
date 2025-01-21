import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface SectionTitleProps {
  title: string;
  actionText?: string;
  onActionClick?: () => void;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  actionText,
  onActionClick,
}) => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" gap="6px" alignItems="center">
        <Box
          width="4px"
          height="18px"
          sx={{ backgroundColor: "primary.main", borderRadius: "12px" }}
        ></Box>
        <Typography variant="h3">{title}</Typography>
      </Box>
      {actionText && onActionClick && (
        <Button variant="outlined" color="info" onClick={onActionClick}>
          {actionText}
        </Button>
      )}
    </Box>
  );
};

export default SectionTitle;

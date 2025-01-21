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
          height="10px"
          sx={{ backgroundColor: "primary.main", borderRadius: "12px" }}
        ></Box>
        <Typography variant="h4">{title}</Typography>
      </Box>
      {actionText && onActionClick && (
        <Button color="info" onClick={onActionClick}>
          All Articles
        </Button>
      )}
    </Box>
  );
};

export default SectionTitle;

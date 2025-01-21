import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Skeleton,
} from "@mui/material";
import React from "react";

const ArticleCardSkeleton: React.FC = () => {
  return (
    <Card>
      <CardActionArea sx={{ p: "10px" }}>
        <Skeleton variant="rounded" width="100%" height={190} />
        <CardContent>
          <Box display="flex" flexDirection="column" gap="16px" mt="16px">
            <Skeleton variant="text" sx={{ fontSize: "16px" }} />
            <Skeleton variant="text" sx={{ fontSize: "14px" }} />
            <Skeleton variant="rounded" width="100%" height={62} />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArticleCardSkeleton;

import { Grid2 } from "@mui/material";
import React from "react";
import ArticleCardSkeleton from "./article-card-skeleton.component";

const ArticleCardSkeletonList: React.FC = () => {
  return (
    <Grid2 container spacing={2}>
      {Array.from(new Array(8)).map((_, index) => (
        <Grid2 key={index} size={{ xs: 12, md: 3 }}>
          <ArticleCardSkeleton />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ArticleCardSkeletonList;

import { Grid2 } from "@mui/material";
import React from "react";
import ArticleCardSkeleton from "./article-card-skeleton.component";

const ArticleCardSkeletonList: React.FC = () => {
  return Array.from(new Array(8)).map((_, index) => (
    <Grid2 key={index} size={{ xs: 12, md: 3 }}>
      <ArticleCardSkeleton />
    </Grid2>
  ));
};

export default ArticleCardSkeletonList;

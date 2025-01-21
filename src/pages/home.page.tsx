import { Box, Grid2 } from "@mui/material";
import React from "react";
import ArticleCard from "./components/article-card.component";
import SectionTitle from "./components/section-title.component";
import ArticleCardSkeletonList from "./components/article-card-skeleton-list.component";
import { useFeed } from "./hooks/use-feed.hook";

const HomePage: React.FC = () => {
  const { data: articles, isLoading } = useFeed();

  return (
    <Box display="flex" flexDirection="column">
      <SectionTitle title="Feed" />
      <Box
        sx={{
          height: "75dvh",
          overflowX: "hidden",
          overflowY: "auto",
          py: "30px",
        }}
      >
        {isLoading ? (
          <ArticleCardSkeletonList />
        ) : (
          <Grid2 container spacing={2}>
            {articles?.records.map((article) => (
              <Grid2 key={article.id} size={{ xs: 12, md: 3 }}>
                <ArticleCard article={article} />
              </Grid2>
            ))}
          </Grid2>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;

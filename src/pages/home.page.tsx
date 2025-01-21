import { Box, Grid2 } from "@mui/material";
import React from "react";
import ArticleCard from "./components/article-card.component";
import SectionTitle from "./components/section-title.component";
import ArticleCardSkeletonList from "./components/article-card-skeleton-list.component";
import { useFeed } from "./hooks/use-feed.hook";
import { useNavigate } from "react-router";
import ErrorComponent from "./components/error.component";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { data: articles, isLoading, isError } = useFeed();

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <Box display="flex" flexDirection="column">
      <SectionTitle
        title="News Feed"
        actionText="All articles"
        onActionClick={() => navigate("/articles")}
      />
      <Box
        sx={{
          height: "75dvh",
          overflowX: "hidden",
          overflowY: "auto",
          py: "30px",
          mt: "16px",
        }}
      >
        <Grid2 container spacing={2}>
          {articles?.records.map((article) => (
            <Grid2 key={article.id} size={{ xs: 12, md: 3 }}>
              <ArticleCard article={article} />
            </Grid2>
          ))}
          {isLoading && <ArticleCardSkeletonList />}
        </Grid2>
      </Box>
    </Box>
  );
};

export default HomePage;

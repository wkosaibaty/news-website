import React from "react";
import { useParams } from "react-router";
import { Box, Typography } from "@mui/material";
import { useArticle } from "./hooks/use-article.hook";
import ErrorComponent from "./components/error.component";
import LoaderComponent from "./components/loader.component";

const ArticlePage: React.FC = () => {
  const { id } = useParams();

  const {
    data: article,
    isLoading,
    isError,
  } = useArticle(id ? Number(id) : undefined);

  if (isError) {
    return <ErrorComponent />;
  }
  if (isLoading) {
    return <LoaderComponent />;
  }

  return (
    <Box display="flex" flexDirection="column" gap="50px">
      <Box display="flex" flexDirection="column" gap="30px">
        <Box
          display="flex"
          flexDirection="column"
          gap="32px"
          sx={{ backgroundColor: "#F5F5F5", borderRadius: "12px", p: "30px" }}
        >
          <Typography variant="h1" fontSize={{ xs: "18px", md: "36px" }}>
            {article?.title}
          </Typography>
          <Box height={{ xs: "200px", md: "500px" }}>
            {article?.image_url && (
              <img
                src={article.image_url}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            )}
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" sx={{ color: "#3E3232bf" }}>
          {article?.published_at && (
            <Typography variant="body2">
              Published at: {article.published_at}
            </Typography>
          )}
          {article?.author?.name && (
            <Typography variant="body2">
              Author: {article.author.name}
            </Typography>
          )}
          {article?.category?.name && (
            <Typography variant="body2">
              Category: {article.category.name}
            </Typography>
          )}
          {article?.source?.name && (
            <Typography variant="body2">
              Source: {article?.source?.name}
            </Typography>
          )}
        </Box>
      </Box>
      <Typography variant="body1">{article?.content}</Typography>
    </Box>
  );
};

export default ArticlePage;

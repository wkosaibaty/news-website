import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Article } from "../../core/models/article.model";
import { useNavigate } from "react-router";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardActionArea
        sx={{ p: "10px" }}
        onClick={() => navigate(`/articles/${article.id}`)}
      >
        {article.image_url ? (
          <CardMedia
            component="img"
            image={article.image_url}
            alt={article.title}
          />
        ) : (
          <Box
            width="100%"
            height="190px"
            sx={{ backgroundColor: "#F5F5F5", borderRadius: "12px" }}
          ></Box>
        )}
        <CardContent>
          <Box display="flex" flexDirection="column" gap="16px" mt="16px">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {article.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                lineClamp: 2,
                overflow: "hidden",
                textOverflow: "ellipsis",
                minHeight: "40px",
              }}
            >
              {article.content}
            </Typography>
            <Box
              display="flex"
              px="16px"
              py="14px"
              sx={{ borderRadius: "12px", backgroundColor: "#F5F5F5" }}
            >
              <Box
                display="flex"
                flexDirection="column"
                gap="4px"
                overflow="hidden"
              >
                <Typography
                  variant="body2"
                  fontWeight={500}
                  lineHeight="22px"
                  letterSpacing="0.1px"
                  component="div"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {article.author.name}
                </Typography>
                <Typography variant="caption" color="#3E3232bf">
                  {new Date(article.published_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArticleCard;

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Box,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SectionTitle from "./components/section-title.component";
import ArticleCard from "./components/article-card.component";
import { useCategories } from "./hooks/use-categories.hook";
import { useSources } from "./hooks/use-sources.hook";
import { useArticles } from "./hooks/use-articles.hook";
import DateRangePicker from "./components/date-range-picker.component";
import { Dayjs } from "dayjs";
import ArticleCardSkeletonList from "./components/article-card-skeleton-list.component";
import ErrorComponent from "./components/error.component";

const ArticlesPage: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [search, setSearch] = useState<string | undefined>();
  const [categoryId, setCategoryId] = useState<number | undefined>();
  const [sourceId, setSourceId] = useState<number | undefined>();
  const [dateRange, setDateRange] = useState<[Dayjs | null, Dayjs | null]>([
    null,
    null,
  ]);

  const { data: categories } = useCategories();
  const { data: sources } = useSources();
  const {
    data,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    fetchNextPage,
  } = useArticles(search, categoryId, sourceId, dateRange);

  const articles = useMemo(() => {
    return data?.pages.flatMap((page) => page.data?.records || []) ?? [];
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 4 &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, scrollRef]);

  return (
    <Box display="flex" flexDirection="column">
      <SectionTitle title="Articles" />
      <Grid2 container alignItems="center" spacing={2} my="16px">
        <Grid2 size={{ xs: 12, md: 3 }}>
          <TextField
            label="Search"
            size="small"
            fullWidth
            sx={{ minWidth: "200px" }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <FormControl sx={{ minWidth: 120, width: "100%" }} size="small">
            <InputLabel id="category-select-label">Category</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              value={categoryId}
              label="Cateory"
              fullWidth
              onChange={(e) => {
                const value = e.target.value;
                if (!value) {
                  setCategoryId(undefined);
                }
                setCategoryId(Number(e.target.value));
              }}
            >
              <MenuItem value="">
                <Typography variant="caption">
                  <em>None</em>
                </Typography>
              </MenuItem>
              {categories?.map((c) => (
                <MenuItem key={c.id} value={c.id}>
                  <Typography variant="caption">{c.name}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <FormControl sx={{ minWidth: 120, width: "100%" }} size="small">
            <InputLabel id="source-select-label">Source</InputLabel>
            <Select
              labelId="source-select-label"
              id="source-select"
              value={sourceId}
              label="Source"
              fullWidth
              onChange={(e) => {
                const value = e.target.value;
                if (!value) {
                  setSourceId(undefined);
                }
                setSourceId(Number(e.target.value));
              }}
            >
              <MenuItem value="">
                <Typography variant="caption">
                  <em>None</em>
                </Typography>
              </MenuItem>
              {sources?.map((s) => (
                <MenuItem key={s.id} value={s.id}>
                  <Typography variant="caption">{s.name}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 1 }}>
          <DateRangePicker
            onSave={(range) => setDateRange(range)}
            defaultValue={dateRange}
          />
        </Grid2>
      </Grid2>

      {isError && articles.length == 0 && <ErrorComponent />}
      {!isError && !isLoading && articles.length == 0 && (
        <ErrorComponent message="No data to show." />
      )}

      <Box
        ref={scrollRef}
        sx={{
          minHeight: "0px",
          height: "70vh",
          overflowX: "hidden",
          overflowY: "auto",
          py: "30px",
        }}
      >
        <Grid2 container spacing={2}>
          {articles.map((article) => (
            <Grid2 key={article.id} size={{ xs: 12, md: 3 }}>
              <ArticleCard article={article} />
            </Grid2>
          ))}
          {(isLoading || isFetchingNextPage) && <ArticleCardSkeletonList />}
        </Grid2>
      </Box>
    </Box>
  );
};

export default ArticlesPage;

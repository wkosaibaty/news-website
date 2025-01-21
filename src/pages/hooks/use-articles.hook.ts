import { useInfiniteQuery } from "@tanstack/react-query";
import { articleService } from "../../core/services/article.service";
import { Dayjs } from "dayjs";

export const useArticles = (
  search?: string,
  categoryId?: number,
  sourceId?: number,
  dateRange?: [Dayjs | null, Dayjs | null]
) => {
  return useInfiniteQuery({
    queryKey: [
      "articles",
      !search || search.length < 3 ? "" : search,
      categoryId,
      sourceId,
      dateRange?.[0],
      dateRange?.[1],
    ],
    queryFn: ({ pageParam }) =>
      articleService.getArticles({
        page: pageParam,
        ...(search && search.length >= 3 && { search }),
        ...(categoryId && { category_id: categoryId }),
        ...(sourceId && { source_id: sourceId }),
        ...(dateRange?.[0] && {
          published_at_from: dateRange[0].format("YYYY-MM-DD"),
        }),
        ...(dateRange?.[1] && {
          published_at_to: dateRange[1].format("YYYY-MM-DD"),
        }),
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _) => {
      if (!lastPage?.data?.records) {
        return null;
      }
      return lastPage.data.records.length != 0 ? lastPage.data.page + 1 : null;
    },
  });
};

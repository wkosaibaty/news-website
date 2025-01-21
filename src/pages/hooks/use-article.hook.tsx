import { useQuery } from "@tanstack/react-query";
import { articleService } from "../../core/services/article.service";

export const useArticle = (id?: number) => {
  return useQuery({
    queryKey: ["feed"],
    queryFn: () => articleService.getArticle(id!),
    enabled: !!id,
    select: (response) => response.data,
  });
};

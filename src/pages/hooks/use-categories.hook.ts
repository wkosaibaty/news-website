import { useQuery } from "@tanstack/react-query";
import { categoryService } from "../../core/services/category.service";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => categoryService.getCategories(),
    select: (response) => response.data,
  });
};

import { useQuery } from "@tanstack/react-query";
import { authorService } from "../../core/services/author.service";

export const useAuthors = () => {
  return useQuery({
    queryKey: ["authors"],
    queryFn: () => authorService.getAuthors(),
    select: (response) => response.data,
  });
};

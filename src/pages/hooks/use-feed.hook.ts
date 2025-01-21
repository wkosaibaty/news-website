import { useQuery } from "@tanstack/react-query";
import { feedService } from "../../core/services/feed.service";

export const useFeed = () => {
  return useQuery({
    queryKey: ["feed"],
    queryFn: () => feedService.getFeed(),
    select: (response) => response.data,
  });
};

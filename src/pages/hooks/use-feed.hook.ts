import { useQuery } from "@tanstack/react-query";
import { feedService } from "../../core/services/feed.service";
import { useAuth } from "../../providers/auth.provider";

export const useFeed = () => {
  const { isAuthenticated } = useAuth();

  return useQuery({
    queryKey: ["feed", isAuthenticated],
    queryFn: () => feedService.getFeed(),
    select: (response) => response.data,
  });
};

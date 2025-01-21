import { useQuery } from "@tanstack/react-query";
import { sourceService } from "../../core/services/source.service";

export const useSources = () => {
  return useQuery({
    queryKey: ["sources"],
    queryFn: () => sourceService.getSources(),
    select: (response) => response.data,
  });
};

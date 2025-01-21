import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../providers/auth.provider";
import { preferenceService } from "../../core/services/preference.service";

export const usePreference = () => {
  const { isAuthenticated } = useAuth();

  return useQuery({
    queryKey: ["preferences", isAuthenticated],
    queryFn: () => preferenceService.getPreference(),
    select: (response) => response.data,
    enabled: isAuthenticated,
  });
};

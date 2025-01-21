import { useQuery } from "@tanstack/react-query";
import { userService } from "../../core/services/user.service";
import { useAuth } from "../../providers/auth.provider";

export const useUser = () => {
  const { isAuthenticated } = useAuth();

  return useQuery({
    queryKey: ["user"],
    queryFn: () => userService.getUser(),
    select: (response) => response.data,
    enabled: isAuthenticated,
  });
};

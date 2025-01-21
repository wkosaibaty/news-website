import { useMutation } from "@tanstack/react-query";
import { authService } from "../../core/services/auth.service";
import { ApiResponse } from "../../core/models/api-response.model";
import { AuthResponse } from "../../core/models/auth-response.model";
import { useAuth } from "../../providers/auth.provider";

export const useLogin = (onSuccess: () => void) => {
  const { setToken } = useAuth();

  return useMutation({
    mutationFn: authService.login,
    onSuccess: (response: ApiResponse<AuthResponse>) => {
      if (response.data) {
        setToken(response.data.access_token);
        onSuccess();
      }
    },
    onError: (error: any) => {
      console.error("Error login", error);
    },
  });
};

import { useMutation } from "@tanstack/react-query";
import { authService } from "../../core/services/auth.service";
import { ApiResponse } from "../../core/models/api-response.model";
import { AuthResponse } from "../../core/models/auth-response.model";
import { useAuth } from "../../providers/auth.provider";
import { useSnackbar } from "notistack";

export const useSignup = (onSuccess: () => void) => {
  const { setToken } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: authService.signup,
    onSuccess: (response: ApiResponse<AuthResponse>) => {
      if (response.data) {
        setToken(response.data.access_token);
        onSuccess();
      }
    },
    onError: (error: any) => {
      enqueueSnackbar(error?.message || "Something went wrong", {
        variant: "error",
      });
    },
  });
};

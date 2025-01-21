import { useMutation } from "@tanstack/react-query";
import { preferenceService } from "../../core/services/preference.service";
import { useSnackbar } from "notistack";

export const useSavePreference = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: preferenceService.savePreference,
    onSuccess: (_) => {
      enqueueSnackbar("Success", { variant: "success" });
    },
    onError: (error: any) => {
      enqueueSnackbar(error?.message || "Invalid username or password", {
        variant: "error",
      });
    },
  });
};

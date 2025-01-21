import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { LoginRequest } from "../../core/models/login-request.model";
import { useLogin } from "../hooks/use-login.hook";

interface LoginDialogProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ open, setOpen }) => {
  const { mutate: login, isPending } = useLogin(() => setOpen(false));

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      maxWidth="xs"
      fullWidth={true}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const request = Object.fromEntries(
            (formData as any).entries()
          ) as LoginRequest;
          login(request);
        },
      }}
    >
      <DialogTitle>
        <Typography variant="h4">Login</Typography>
      </DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap="15px" my="20px">
          <TextField
            autoFocus
            required
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          color="error"
          onClick={() => setOpen(false)}
          disabled={isPending}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isPending}>
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;

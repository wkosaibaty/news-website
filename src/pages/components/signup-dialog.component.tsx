import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import { useSignup } from "../hooks/use-signup";
import { SignupRequest } from "../../core/models/signup-request.model";

interface SignupDialogProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const SignupDialog: React.FC<SignupDialogProps> = ({ open, setOpen }) => {
  const { mutate: signup, isPending } = useSignup(() => setOpen(false));

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      maxWidth="sm"
      fullWidth={true}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const request = Object.fromEntries(
            (formData as any).entries()
          ) as SignupRequest;
          signup(request);
        },
      }}
    >
      <DialogTitle>Signup</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap="15px">
          <TextField
            autoFocus
            required
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
          />
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
            autoFocus
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
          Signup
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignupDialog;

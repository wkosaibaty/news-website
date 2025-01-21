import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import SettingsMenu from "./settings-menu.component";
import LoginDialog from "./login-dialog.component";
import SignupDialog from "./signup-dialog.component";
import { useUser } from "../hooks/use-user.hook";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { data: user } = useUser();

  const [loginDialogOpen, setLoginDialogOpen] = React.useState(false);
  const [signupDialogOpen, setSignupDialogOpen] = React.useState(false);

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          fontSize="22px"
          fontWeight={700}
          letterSpacing={0}
          color="primary.main"
          onClick={() => navigate("/")}
          sx={{ cursor: "pointer" }}
        >
          NEWS APP
        </Typography>
        {user ? (
          <Box display="flex" alignItems="center">
            <Avatar
              sx={{ width: "38px", height: "38px", mr: { xs: 0, md: "12px" } }}
            >
              {user.name[0]}
            </Avatar>
            <Typography variant="h5" display={{ xs: "none", md: "block" }}>
              {user.name}
            </Typography>
            <SettingsMenu />
          </Box>
        ) : (
          <Box display="flex" gap="8px">
            <Button color="primary" onClick={() => setLoginDialogOpen(true)}>
              Login
            </Button>

            <Button
              variant="outlined"
              color="primary"
              onClick={() => setSignupDialogOpen(true)}
            >
              Signup
            </Button>
          </Box>
        )}
      </Box>

      <LoginDialog open={loginDialogOpen} setOpen={setLoginDialogOpen} />
      <SignupDialog open={signupDialogOpen} setOpen={setSignupDialogOpen} />
    </>
  );
};

export default Header;

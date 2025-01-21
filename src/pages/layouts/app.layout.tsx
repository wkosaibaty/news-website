import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import Header from "../components/header.component";

const AppLayout: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ my: "45px" }}>
      <Box display="flex" flexDirection="column" gap="50px">
        <Header />
        <Outlet />
      </Box>
    </Container>
  );
};

export default AppLayout;

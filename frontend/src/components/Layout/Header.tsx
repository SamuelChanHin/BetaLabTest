import { Box, Button, Stack, styled } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/AuthProvider";
import { NavItems } from "./const";

export function Header() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <Stack direction="row" justifyContent="space-between">
      <Box>
        {NavItems.map((item, index) => {
          const isCurrentPath = window.location.pathname === item.path;
          return (
            <Button
              color={isCurrentPath ? "primary" : "inherit"}
              variant="contained"
              onClick={() => {
                navigate(item.path);
              }}
            >
              {item.label}
            </Button>
          );
        })}
      </Box>

      <LogoutButton color="error" variant="contained" onClick={logout}>
        Logout
      </LogoutButton>
    </Stack>
  );
}

const LogoutButton = styled(Button)`
  position: absolute;
  top: 0px;
  right: 0px;
`;

import { Button, styled } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { useAuth } from "../../provider/AuthProvider";
import { Header } from "./Header";

interface AppLayoutProps {}

function AppLayout({ children }: PropsWithChildren<AppLayoutProps>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default AppLayout;

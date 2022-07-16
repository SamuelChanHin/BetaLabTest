import { Button, Stack, styled, Typography } from "@mui/material";
import React from "react";
import LoginForm from "../components/LoginPage/LoginForm";
import RegisterForm from "../components/LoginPage/RegisterForm";

function LoginPage() {
  const [isRegisterForm, setIsRegisterForm] = React.useState(false);

  const formSwitcher = () => {
    setIsRegisterForm((prev) => !prev);
  };

  return (
    <StackContainer spacing={2} alignItems="center">
      {isRegisterForm ? <RegisterForm /> : <LoginForm />}
      <Button variant="text" onClick={formSwitcher}>
        {isRegisterForm ? "Already have an account?" : "Create an account?"}
      </Button>
    </StackContainer>
  );
}

export default LoginPage;

const StackContainer = styled(Stack)`
  width: 100%;

  form {
    width: 100%;
  }
`;

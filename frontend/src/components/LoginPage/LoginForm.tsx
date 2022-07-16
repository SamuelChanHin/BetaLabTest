import React from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { loginApi } from "../../api/authApi";
import { toast } from "react-toastify";
import { setAccessToken } from "../../util/localStoage";

interface LoginData {
  email: string;
  password: string;
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const onSubmit = async (data: LoginData) => {
    try {
      const res = await loginApi(data);
      setAccessToken(res.access_token);
      toast.success("login success");
    } catch (err) {
      console.error(err);
      toast.error("Email or Password Not Correct");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack style={{ width: "100%" }} spacing={1} alignItems="center">
        <TextField
          type="text"
          label="email"
          variant="outlined"
          {...register("email", { required: true })}
        />
        <Typography variant="body2" style={{ color: "red" }}>
          {errors.email && "email is required"}
        </Typography>

        <TextField
          type="password"
          label="password"
          variant="outlined"
          {...register("password", { required: true })}
        />
        <Typography variant="body2" style={{ color: "red" }}>
          {errors.password && "password is required"}
        </Typography>

        <Button type="submit" variant="contained">
          Login
        </Button>
      </Stack>
    </form>
  );
}

export default LoginForm;

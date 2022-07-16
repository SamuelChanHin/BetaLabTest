import { Avatar, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

interface RegisterData {
  email: string;
  password: string;
  name: string;
  address: string;
  phone: string;
  companyName: string;
}

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack style={{ width: "100%" }} spacing={1} alignItems="center">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
          type="text"
          label="password"
          variant="outlined"
          {...register("password", { required: true })}
        />
        <Typography variant="body2" style={{ color: "red" }}>
          {errors.password && "password is required"}
        </Typography>
        <TextField
          type="text"
          label="name"
          variant="outlined"
          {...register("name")}
        />
        <TextField
          type="text"
          label="address"
          variant="outlined"
          {...register("address")}
        />
        <TextField
          type="text"
          label="phone number"
          variant="outlined"
          {...register("phone")}
        />
        <TextField
          type="text"
          label="company name"
          variant="outlined"
          {...register("companyName")}
        />
        <Button type="submit" variant="contained">
          Signup
        </Button>
      </Stack>
    </form>
  );
}

export default RegisterForm;

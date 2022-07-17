import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { createUserApi } from "../../api/userApi";
import { User } from "../../types/userType";
import { convertObjectToFormData } from "../../util/dataConvertor";
import { handleEmailValidation } from "../../util/dataValidator";
import AvatarImageUpload from "../Common/AvatarImageUpload";
import { toast } from "react-toastify";
import { refreshPage } from "../../util/window";
import useRenderCounter from "../../hook/useRenderCounter";

interface RegisterData {
  email: string;
  password: string;
  name: string;
  address: string;
  phone: string;
  companyName: string;
}

function RegisterForm() {
  const { renderCount } = useRenderCounter();
  const [profileImageFile, setProfileImageFile] = React.useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>();

  const onSubmit = async (data: any) => {
    try {
      const formData = convertObjectToFormData(data);
      if (profileImageFile) {
        formData.append("image", profileImageFile);
      }
      await createUserApi(formData as any as User);
      toast.success("Successfully create new user");
      refreshPage();
    } catch (err) {
      console.error(err);
      toast.error("Failed to register");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack style={{ width: "100%" }} spacing={1} alignItems="center">
        <AvatarImageUpload size="100px" setImageFile={setProfileImageFile} />
        <TextField
          type="text"
          label="email"
          variant="outlined"
          {...register("email", {
            required: { value: true, message: "Email can not be empty" },
            validate: handleEmailValidation,
          })}
        />
        <Typography variant="body2" style={{ color: "red" }}>
          {errors.email && errors.email.message}
        </Typography>
        <TextField
          type="password"
          label="password"
          variant="outlined"
          {...register("password", {
            required: { value: true, message: "Password can not be empty" },
          })}
        />
        <Typography variant="body2" style={{ color: "red" }}>
          {errors.password && errors.password.message}
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
        <Typography>Render Count: {renderCount}</Typography>
      </Stack>
    </form>
  );
}

export default RegisterForm;

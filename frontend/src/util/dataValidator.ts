import * as yup from "yup";

export let schema = yup.string().email();

export const handleEmailValidation = async (email: string) => {
  // check validity
  const isValid = await schema.isValid(email);

  return isValid || "Please input valid email";
};

import { object, string } from "yup";

const schema = object({
  username: string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(15, "Username can be maximum 15 characters"),

  email: string()
    .required("Email is required")
    .email("Email must be a valid email")
    .matches(/\./, "Email must contain ."),

  password: string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[0-9]/, "Password must contain at least 1 number")
    .matches(/[A-Z]/, "Password must contain at least 1 uppercase letter")
    .matches(
      /[^A-Za-z0-9]/,
      "Password must contain at least 1 special character",
    ),
});

export default schema;

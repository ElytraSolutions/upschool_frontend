import * as yup from "yup";

export const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  country: "",
  role: "",
  age: "",
  canvaAccount: true,
  condition1: false,
  condition2: false,
  condition3: false,
};

export const registerSchema = yup.object().shape({
  firstName: yup.string().required("required").max(255, "Characters too long"),
  lastName: yup.string().required("required").max(255, "Characters too long"),
  email: yup
    .string()
    .email("invalid email")
    .required("required")
    .max(255, "Characters too long"),
  password: yup
    .string()
    .required("Please enter a password")
    // check minimum characters
    .min(8, "Password must have at least 8 characters")
    .max(255, "Characters too long")
    // different error messages for different requirements
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
  confirmPassword: yup
    .string()
    .required("Please re-type your password")
    // use oneOf to match one of the values inside the array.
    // use "ref" to get the value of passwrod.
    .oneOf([yup.ref("password")], "Passwords does not match"),
  country: yup.string().required("required").max(255, "Characters too long"),
  role: yup.string().required("required"),
  age: yup
    .string()
    .required("required")
    .matches(/^[0-9]+$/, "Age must be numeric"),
  canvaAccount: yup.bool(),
  condition1: yup
    .bool()
    .oneOf([true], "You need to accept the terms and conditions"),
  conditi0n2: yup
    .bool()
    .oneOf([true], "You need to accept the terms and conditions"),
  condition3: yup
    .bool()
    .oneOf([true], "You need to accept the terms and conditions"),
});

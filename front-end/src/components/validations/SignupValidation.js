import * as Yup from "yup";

const SignupvalidationSchema = Yup.object().shape({
  firstname: Yup.string().required("Firstname is required"),
  lastname: Yup.string().required("Lastname is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
    .oneOf([Yup.ref("confirmPassword"), null], "Passwords must match"),
});

export default SignupvalidationSchema;

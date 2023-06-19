import { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import { TextField, Button, Box, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import Layout from "../../components/Layout";

interface ILoginFormValues {
  email: string;
  password: string;
}

const regularExpression =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues: ILoginFormValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(regularExpression, "Invalid Password")
      .required("Password is required"),
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Layout>
      <div className="flex h-[77vh] items-center justify-center">
        <div className="mx-auto h-auto w-full max-w-[1400px] rounded-2xl bg-white p-[32px] shadow-secoundary sm:max-w-[77%]">
          <h1 className="mb-8 text-center text-3xl text-[#262E3B]">login</h1>
          <form onSubmit={formik.handleSubmit}>
            {/* Email input field */}
            <div className="mb-8">
              <TextField
                className="w-full"
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </div>
            {/* Password input field */}
            <div className="mb-4">
              <TextField
                className="w-full"
                id="password"
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {showPassword ? (
                        <VisibilityOffIcon
                          onClick={handleTogglePasswordVisibility}
                          className="cursor-pointer"
                        />
                      ) : (
                        <VisibilityIcon
                          onClick={handleTogglePasswordVisibility}
                          className="cursor-pointer"
                        />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <Button
              sx={{
                my: 2,
                color: "rgb(99, 113, 224)",
                display: "block",
                fontSize: 18,
                fontWeight: 500,
                textTransform: "unset",
              }}
            >
              Forget password
            </Button>
            <p className="text-lg">
              Your login means that you agree to
              <span className="cursor-pointer font-[400] text-[#0000EE] underline">
                Terms Of Service
              </span>{" "}
              and{" "}
              <span className="cursor-pointer font-[400] text-[#0000EE] underline">
                Privacy Policy
              </span>
            </p>
            {/* Submit button */}
            <Box mt={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  my: 2,
                  width: "100%",
                  color: "white",
                  backgroundColor: "#6371e0",
                  fontSize: 19,
                  fontWeight: 500,
                  textTransform: "unset",
                  ":hover": {
                    backgroundColor: "rgb(69, 79, 156)",
                  },
                }}
              >
                login
              </Button>
            </Box>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;

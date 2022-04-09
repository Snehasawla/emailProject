import { Button, Grid } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";
import { object, string } from "yup";
import TextField from "../components/TextField";
import data from "../mockData/login.json";
import { requiredMsg } from "../utils/error";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = object().shape({
  email: string().required(requiredMsg("email")),
  password: string().required(requiredMsg("password")),
});
export default function Login() {
  const { login } = data;
  const [isData, setIsdata] = useState([]);
  const onSubmit = () => {
    setIsdata(isLogin);
    if (isData.length) {
      navigation("/profile");
    } else {
      errors.email = "Wrong email or password";
    }
  };

  const {
    values,
    errors,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const { email, password } = values;
  const isLogin = isDataSame(login, email, password);
  localStorage.setItem("user", JSON.stringify(isLogin));
  const navigation = useNavigate();

  return (
    <>
      LogIn Page
      <Grid
        container
        direction="column"
        component="form"
        alignContent="center"
        onSubmit={handleSubmit}
      >
        <TextField
          id={"email"}
          name={"LoginPage"}
          label={"Email"}
          value={email}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.email ? errors.email : ""}
        />
        <TextField
          id={"password"}
          name={"LoginPage"}
          label={"password"}
          onBlur={handleBlur}
          value={password}
          onChange={handleChange}
          error={touched.password ? errors.password : ""}
        />

        <Button
          type="submit"
          color="primary"
          disabled={!isValid}
          //   onClick={handleClick}
        >
          Submit
        </Button>
      </Grid>
    </>
  );
}

function isDataSame(data: any, email: string, password: string) {
  return data.filter((item: any) => {
    if (item["email"] === email && item["password"] === password) {
      return true;
    }
  });
}

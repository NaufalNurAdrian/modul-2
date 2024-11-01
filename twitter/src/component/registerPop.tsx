import * as Yup from "yup";
import { Field, Formik, FormikProps, Form } from "formik";
import axios from "../helper/axiox";
import { useNavigate } from "react-router-dom";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("username is required"),
  email: Yup.string()
    .email("invalid email input")
    .required("email is required"),
  password: Yup.string()
    .min(8, "password must be 8 characters at minimum")
    .required("username is required"),
});

interface FormValues {
  username: string;
  email: string;
  password: string;
}

function RegisterPop() {
    const navigate = useNavigate();

  const initialValue: FormValues = { username: "", email: "", password: "" };

  const handleAdd = async (user: FormValues) => {
    try {
        await axios.post("/users", user)
        alert("user berhasil di tambahkan")
        navigate("/")
    } catch (err) {
        console.log(err);
        
    }
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center text-xl">
      <div className="flex flex-col justify-center items-center text-center w-[500px] h-auto p-10 border border-black bg-slate-400 rounded-xl">
        <div>
          <div>
            <h1 className="text-3xl font-bold mb-4">Register Form</h1>
          </div>

          <Formik
            initialValues={initialValue}
            validationSchema={RegisterSchema}
            onSubmit={(values, action) => {
              handleAdd(values);
                action.resetForm()
            }}
          >
            {(props: FormikProps<FormValues>) => {
              const { handleChange, values, touched, errors } = props;
              return (
                <Form className="flex flex-col gap-10 w-[350px]">
                  <div className="flex flex-col text-start gap-3">
                    <label htmlFor="username">username: </label>
                    <Field
                      placeholder="username"
                      className="rounded-lg h-[40px] p-4"
                      type="text"
                      name="username"
                      onChange={handleChange}
                      value={values.username}
                    />

                    {touched.username && errors.username ? (
                      <div className="text-red-600 text=xs">
                        {errors.username}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex flex-col text-start gap-3">
                    <label htmlFor="email">email: </label>
                    <Field
                      placeholder="username"
                      className="rounded-lg h-[40px] p-4"
                      type="text"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                    />

                    {touched.email && errors.email ? (
                      <div className="text-red-600 text=xs">{errors.email}</div>
                    ) : null}
                  </div>
                  <div className="flex flex-col text-start gap-3">
                    <label htmlFor="password">password: </label>
                    <Field
                      placeholder="username"
                      className="rounded-lg h-[40px] p-4"
                      type="text"
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                    />

                    {touched.password && errors.password ? (
                      <div className="text-red-600 text=xs">
                        {errors.password}
                      </div>
                    ) : null}
                  </div>
                  <button type="submit" className="bg-teal-500 rounded-xl">
                    Register
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}
export default RegisterPop;

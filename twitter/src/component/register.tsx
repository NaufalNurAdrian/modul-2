import { useState } from "react";
import * as Yup from "yup";
import { Field, Formik, FormikProps, Form } from "formik";
import axios from "../helper/axiox";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaApple } from "react-icons/fa";
import logo from "../assets/Twitter.png";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("username is required"),
  email: Yup.string()
    .email("invalid email input")
    .required("email is required"),
  password: Yup.string()
    .min(8, "password must be 8 characters at minimum")
    .required("password is required"),
});

interface FormValues {
  username: string;
  email: string;
  password: string;
}

// Define the interface for the expected response data
interface UserResponse {
  id: string; // Adjust fields based on actual response structure
  // Add any other fields that might be returned in the response
}

function HomePage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialValue: FormValues = { username: "", email: "", password: "" };

  // Function to handle database creation after account registration
  const createDatabaseForUser = async (userId: string) => {
    try {
      await axios.post("/database", { userId });
      alert("Database successfully created for the new user.");
    } catch (error) {
      console.error("Failed to create database for user:", error);
    }
  };

  // Function to handle user registration
  const handleAdd = async (user: FormValues) => {
    try {
      // Type the axios post call with UserResponse
      const response = await axios.post<UserResponse>("/users", user);
      alert("User successfully registered.");

      // Access userId safely as TypeScript now recognizes its type
      const userId = response.data.id; 
      await createDatabaseForUser(userId);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-16 bg-black text-white font-sans">
      {/* Logo Section */}
      <div className="flex absolut w-full justify-center items-center content-center ">
        <img src={logo} alt="logo" className="p-10 md:w-[500px] w-[200px]"  />
      </div>

      {/* Main Content Section */}
      <div className="lg:w-full md:w-[100px] sm:w-[100px] flex flex-col items-center content-center justify-center text-center">
        <div className="w-[400px]">
          <h1 className="text-4xl font-extrabold mb-6">Happening now</h1>
          <h2 className="text-2xl font-bold mb-8">Join today.</h2>

          {/* Google and Apple Sign-up Buttons */}
          <button className="flex items-center justify-center w-full mb-4 px-4 py-3 rounded-full bg-white text-black text-lg font-semibold hover:bg-gray-200 transition">
            <FaGoogle className="mr-2" /> Sign up with Google
          </button>
          <button className="flex items-center justify-center w-full mb-4 px-4 py-3 rounded-full bg-white text-black text-lg font-semibold hover:bg-gray-200 transition">
            <FaApple className="mr-2" /> Sign up with Apple
          </button>

          {/* Divider */}
          <div className="flex items-center my-4 w-full">
            <span className="border-b border-gray-600 flex-grow"></span>
            <span className="mx-4 text-gray-500">or</span>
            <span className="border-b border-gray-600 flex-grow"></span>
          </div>

          {/* Create Account Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full mb-8 px-4 py-3 rounded-full bg-blue-500 text-white text-lg font-semibold hover:bg-blue-600 transition"
          >
            Create account
          </button>

          {/* Terms and Privacy Policy */}
          <p className="text-xs text-gray-500 mb-4">
            By signing up, you agree to the <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>, including <a href="#" className="underline">Cookie Use</a>.
          </p>

          {/* Sign-in Link */}
          <p className="text-lg font-semibold">
            Already have an account?{" "}
            <button 
              onClick={() => navigate('/login')}
              className="text-blue-400 font-semibold hover:underline"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>

      {/* Register Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-85">
          <div className="bg-slate-900 text-white rounded-lg w-[500px] p-6">
            <h1 className="text-3xl font-bold mb-4 text-center">Register Form</h1>
            <Formik
              initialValues={initialValue}
              validationSchema={RegisterSchema}
              onSubmit={(values, action) => {
                handleAdd(values);
                action.resetForm();
                setIsModalOpen(false); // Close modal after submission
              }}
            >
              {(props: FormikProps<FormValues>) => {
                const { handleChange, values, touched, errors } = props;
                return (
                  <Form className="flex flex-col gap-5">
                    <div className="flex flex-col text-start gap-2">
                      <label className="text-xl" htmlFor="username">Register</label>
                      <Field
                        placeholder="username"
                        className="rounded-lg h-[40px] p-4 border border-gray-300"
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={values.username}
                      />
                      {touched.username && errors.username && (
                        <div className="text-red-600 text-xs">{errors.username}</div>
                      )}
                    </div>
                    <div className="flex flex-col text-start gap-2">
                      <label htmlFor="email"></label>
                      <Field
                        placeholder="email"
                        className="rounded-lg h-[40px] p-4 border border-gray-300"
                        type="text"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                      />
                      {touched.email && errors.email && (
                        <div className="text-red-600 text-xs">{errors.email}</div>
                      )}
                    </div>
                    <div className="flex flex-col text-start gap-2">
                      <label htmlFor="password"></label>
                      <Field
                        placeholder="password"
                        className="rounded-lg h-[40px] p-4 border border-gray-300"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                      />
                      {touched.password && errors.password && (
                        <div className="text-red-600 text-xs">{errors.password}</div>
                      )}
                    </div>
                    <button type="submit" className="bg-blue-500 text-white rounded-lg h-[40px] font-semibold">
                      Register
                    </button>
                  </Form>
                );
              }}
            </Formik>
            <button onClick={() => setIsModalOpen(false)} className="mt-4 text-gray-600 text-sm hover:underline">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;

import { useState, useEffect } from "react";
// import InputField from "components/fields/InputField";
// import Checkbox from "components/checkbox";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  // console.log(email);
  const [password, setPassword] = useState("");
  // console.log(password);

  useEffect(() => {
  
  }, []);
  const adminLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/admin/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => {
      return res.json();
    });
    // const data  = res.json();
    console.log(res.status);
    if (res.status === "400") {
      console.log("Invalid credencial");
      toast.error("Invalid credencial", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      console.log("login successfull");
      window.localStorage.setItem("user", JSON.stringify(res.user));
      toast.success("Logged in Successfully!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 2000);
    }
  };

  const variant = "auth";
  return (
    <>
   
     <img
      alt="fliotravel"
        src="/flight1.jpg"
        className="z-2 absolute inset-0 h-full w-full object-cover "
      />
       <div className="bg-black absolute inset-0 z-2 h-[100vh] w-[100vh]" />
    
     
     
      <div className="relative mt-[150px]  mb-16 flex h-full w-full flex-col  items-center justify-center gap-6  md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-center ">
        {/* Sign in section */}

        <div className="mt-3 w-full max-w-full flex-col items-center rounded-lg p-4    xl:max-w-[420px]">
          <div className="z-5 relative mx-4 flex h-[100px] items-center justify-center rounded-2xl bg-navy-600 shadow-md">
            <img src="/fliologo2.png" alt="" width={130} />
            {/* <h4 className="mb-2.5 text-center text-4xl font-bold text-blue-500 dark:text-white">
              Admin Sign In
            </h4> */}
          </div>

          {/* Email */}
          <div className="mt-[-80px] rounded-2xl bg-white p-7 pt-[100px] shadow-xl">
            <label
              htmlFor="email"
              className={`text-sm text-navy-700 dark:text-white ${
                variant === "auth" ? "ml-1.5 font-medium" : "ml-3 font-bold"
              }`}
            >
              Email*
            </label>
            <input
              className="mb-3 mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none "
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password */}
            <label
              htmlFor="password"
              className={`text-sm text-navy-700 dark:text-white ${
                variant === "auth" ? "ml-1.5 font-medium" : "ml-3 font-bold"
              }`}
            >
              Password*
            </label>
            <input
              className="mb-3 mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none "
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Checkbox */}
            {/* <div className="mb-4 flex items-center justify-between px-2">
          <div className="flex items-center">
            <Checkbox />
            <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
              Keep me logged In
            </p>
          </div>
          <a
            className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            href=" "
          >
            Forgot Password?
          </a>
        </div> */}
            <Link to="/admin/dashboard">
              <button
                onClick={adminLogin}
                className="linear mt-2 w-full rounded-xl bg-navy-600 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
              >
                Sign In
              </button>
            </Link>
          </div>
        </div>
      
      </div>
      <ToastContainer />
     
    </>
  );
}

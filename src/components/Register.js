import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  const [first_name, setFirst_name] = useState("")
  const [last_name, setLast_name] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [message, setMessage] = useState("")
  const [profile_image, setProfileImage] = useState(null);



  const handleRegister = (e) => {
    e.preventDefault();
    const form_data = new FormData();
    form_data.append("profile_image", profile_image);
    form_data.append("first_name", first_name);
    form_data.append("last_name", last_name);
    form_data.append("email", email);
    form_data.append("password", password);


    
    if (repassword !== password) {
      return setMessage("Password Don't Match")
    } else {
      /*
      dispatch(authUserRegister({first_name, last_name, email, password, profile_image}));
      */
     fetch('/user/users/register/', {
       method: "POST",
       body: form_data
      }).then((response) => {
        if (response.status===201) {
          navigate('/login');
          setEmail("");
          setFirst_name("");
          setLast_name("");
          setProfileImage(null);
        }
      })
    }
  };


  return (
    <div className="flex flex-col items-center justify-center mx-auto px-6 py-8 md:h-screen">
      <div className="w-full bg-white shadow-2xl shadow-indigo-800 border md:mt-0 sm:max-w-md xl:p-0 border-indigo-400">
        <div className="p-6 space-y-6 sm:p-8">
          <h1 className="text-md font-bold text-indigo-800 leading-tight tracking-tight md:text-2xl">
            Sign in to your account
          </h1>
          <form onSubmit={handleRegister} class="space-y-4 md:space-y-6">
          <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                First name
              </label>
              <input
                onChange={(e) => setFirst_name(e.target.value)}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-slate-200 placeholder-gray-400"
                placeholder="your first name"
                required
              />
            </div>
          <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Last name
              </label>
              <input
                onChange={(e) => setLast_name(e.target.value)}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-slate-200 placeholder-gray-400"
                placeholder="your last name"
                required
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-slate-200 placeholder-gray-400"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="••••••••"
                className="bg-slate-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Re-Password
              </label>
              <input
                onChange={(e) => setRePassword(e.target.value)}
                type="password"
                placeholder="••••••••"
                className="bg-slate-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Upload your Image
              </label>
              <input
                onChange={(e) => setProfileImage(e.target.files[0])}
                type="file"
                className="bg-slate-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
              />
            </div>
            {message && (

                <div className="bg-red-300 text-md text-red-600 text-center p-2 rounded-md">
                {message}
            </div>
            )}
            <button
              type="submit"
              className="w-full text-white bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button>
           
            <div className="text-sm font-light text-gray-600">
              Don’t have an account yet?{" "}
              <button
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

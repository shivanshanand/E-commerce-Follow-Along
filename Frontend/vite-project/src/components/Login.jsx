import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [errormsg, seterrormsg] = useState(null);

  const handlesubmit = async (e) => {
    e.preventDefault();

    const username = e.target.user.value;
    const password = e.target.password.value;

    // console.log("Login Data:", { username, password });

    try {
      const response = await fetch("http://localhost:7100/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        navigate("/Home");
      } else {
        seterrormsg(data.message);
      }
    } catch (error) {
      console.log(error);
      seterrormsg("Something went wrong, please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <form
        onSubmit={handlesubmit}
        className="p-8 bg-gray-800/80 rounded-lg shadow-lg flex flex-col gap-6 w-full max-w-md border border-gray-600 backdrop-blur-md"
      >
        <h1 className="text-3xl font-bold text-gray-100 text-center">
          Welcome Back
        </h1>
        <p className="text-sm text-gray-400 text-center">
          Please login to your account
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="user"
              className="text-sm font-medium text-gray-300 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="user"
              className="p-3 rounded-md border border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-700 text-gray-200"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="p-3 rounded-md border border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-700 text-gray-200"
              required
            />
          </div>
        </div>

        {errormsg && <div className="text-red-500 text-center">{errormsg}</div>}

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;

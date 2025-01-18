const Login = () => {
  const handlesubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully ✓");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <form
        onSubmit={handlesubmit}
        className="p-8 bg-white rounded-lg shadow-lg flex flex-col gap-6 w-full max-w-md border border-gray-300"
      >
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Welcome Back
        </h1>
        <p className="text-sm text-gray-600 text-center">
          Please login to your account
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="user"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="user"
              className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;

import React from 'react';

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-cyan-100 to-white px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Scientific Research Library"
          />
          <h2 className="mt-6 text-2xl font-bold text-blue-900">
            Sign in to your account
          </h2>
        </div>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-900 focus:ring-blue-900 sm:text-sm"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <a href="0" className="text-blue-900 hover:underline">
              Forgot password?
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-900 px-4 py-2 text-white font-semibold hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900"
            >
              Sign In
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Not a member?{" "}
          <a href="0" className="text-blue-900 font-semibold hover:underline">
            Start your free trial
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

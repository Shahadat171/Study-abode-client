// import { GithubAuthProvider } from "firebase/auth";
// import React, { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
// import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import logo from "../../logo.png";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

// const githubProvider = new GithubAuthProvider();

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //   const from = location?.pathname || "/";
  const from = location.state?.from?.pathname || "/";
  console.log(from);
  //   const navigate = useNavigate();
  //   const Location = useLocation();
  //   const from = Location.state?.from?.pathname || "/";
  //   console.log(from);
  const { signIn, googleSignIn, error, setError, facebookSignIN } =
    useContext(AuthContext);

  //   const handleLogin = (event) => {
  //     event.preventDefault();
  //     setError("");
  //     const form = event.target;
  //     const password = form.password.value;
  //     const email = form.email.value;
  //     console.log(password, email);
  //     signIn(email, password)
  //       .then((result) => {
  //         const loggedUser = result.user;
  //         navigate(from, { replace: true });
  //       })
  //       .catch((error) => {
  //         setError(error.message);
  //       });
  //   };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  const handleFacebookLogin = () => {
    facebookSignIN()
      .then((result) => {
        const loggedUser = result;
        console.log(loggedUser);
        // navigate(from , {replace : true})
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  //   const handleGithubLogin = () => {
  //     googleSignIn(githubProvider)
  //       .then((result) => {
  //         const loggedUser = result.user;
  //         navigate(from, { replace: true });
  //       })
  //       .cath((error) => {
  //         console.error(error.message);
  //       });
  //   };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          {/* <img className="w-10 h-10 mr-2" src={logo} alt="logo" /> */}
          Annamaya
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              //   onSubmit={handleLogin}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="text-white w-full bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium font-mono tracking-wider justify-center rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2"
              >
                Sign in
              </button>
            </form>
            <div className="text-center mt-3">
              <p className="text-center mb-2">
                <small>Or sign up using</small>
              </p>
              <button onClick={handleGoogleLogin} className="mx-auto">
                <img className="mx-auto" src={google} />
              </button>
              <button onClick={handleFacebookLogin} className="mx-auto">
                <img className="mx-auto" src={facebook} alt="" />
              </button>
            </div>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <Link
                to="/register"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

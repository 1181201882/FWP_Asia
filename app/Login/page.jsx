import React from "react";
import Image from "next/image";
import Header from "../Header/page";
import Footer from "../Footer/page";
import Chatbot from "../Chatbot/page";
import { useState } from "react";
const Login = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  return (
    <main>
      <Header />
      <div>
        <section className="bg-red-600">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div className="flex items-center justify-center mb-4">
                  <a href="/">
                    <Image
                      src="/FWP_Asia.png"
                      width="150"
                      height="150"
                      alt="logo"
                    />
                  </a>
                </div>

                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 text-center">
                  Welcome to FWP Asia
                </h1>
                <form
                  className="space-y-4 md:space-y-6 text-gray-900"
                  action="#"
                >
                  <div className="ml-35"></div>
                  <div>
                    <label
                      htmlFor="code"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      FEP Code
                    </label>
                    <input
                      type="text"
                      name="text"
                      id="code"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="FEP Code"
                      onChange={(e) => setLoginUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-wh"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Sign in
                  </button>
                  <div className="flex items-center justify-center text-center">
                    <a href="#" className="text-sm font-medium text-red-600">
                      Forgot password
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <Chatbot />
    </main>
  );
};

export default Login;

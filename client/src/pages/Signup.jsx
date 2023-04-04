import React, { useState } from "react";
import styles, { layout } from "../style";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section className={layout.section}>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Let's make transactions!</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Create your account and send money to anyone.
            </p>
          </div>

          <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
            <div class="mt-10">
              <form action="#">
                <div class="flex flex-col mb-6">
                  <label
                    for="email"
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >
                    E-Mail Address:
                  </label>
                  <div class="relative">
                    <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                      <svg
                        class="h-6 w-6"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-secondary"
                      placeholder="E-Mail Address"
                    />
                  </div>
                </div>
                <div class="flex flex-col mb-6">
                  <label
                    for="password"
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >
                    Password:
                  </label>
                  <div class="relative">
                    <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                      <span>
                        <svg
                          class="h-6 w-6"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </span>
                    </div>

                    <input
                      id="password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-secondary"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div class="flex w-full">
                  <button
                    type="submit"
                    class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-primary hover:bg-secondary rounded py-2 w-full transition duration-150 ease-in"
                  >
                    <span class="mr-2 uppercase">Sign up</span>
                    <span>
                      <svg
                        class="h-6 w-6"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div class="flex justify-center items-center mt-6">
              <Link
                to={"/login"}
                class="inline-flex items-center font-bold text-primary hover:text-secondary text-xs text-center"
              >
                <span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </span>
                <span class="ml-2">You already have an account?</span>
              </Link>
            </div>
          </div>

          {/* <div class="min-h-screen flex flex-col items-center justify-center bg-gray-300">
            
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default SignupPage;

import React, { useState } from "react";
import styles from "../style";
import { Link } from "react-router-dom";

const EditProfilePage = () => {
  const [inputValues, setInputValues] = useState({ password: "" });

  const handleChangeInputs = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    console.log("inputValues: ", inputValues);

    // TODO make request and validate
    // if (true) {
    //   window.location.href = "/transactions";
    // }
  };

  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
        >
          <div className="flex-1 flex flex-col">
            <h2 className={styles.heading2}>Edit Profile</h2>
          </div>

          <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
            <div class="mt-10">
              <form onSubmit={handleSubmitEdit}>
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
                      required
                      // value={password}
                      onChange={handleChangeInputs}
                      class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-secondary"
                      placeholder="Password"
                    />
                  </div>
                </div>

                {/* TODO */}
                {/* <div class="flex items-center mb-6 -mt-4">
                  <div class="flex ml-auto">
                    <a
                      href="#"
                      class="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700"
                    >
                      Forgot Your Password?
                    </a>
                  </div>
                </div> */}

                <div class="flex w-full">
                  <button
                    type="submit"
                    class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-primary hover:bg-secondary rounded py-2 w-full transition duration-150 ease-in"
                  >
                    <span class="mr-2 uppercase">Edit</span>
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditProfilePage;

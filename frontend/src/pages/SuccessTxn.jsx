import React from "react";
import styles from "../style";
import { Link } from "react-router-dom";

const SuccessTxnPage = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
        >
          <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
            <div class="flex w-full justify-between">
              <div
                id="toast-simple"
                class="flex items-center w-full p-4 space-x-4 rounded-lg text-primary divide-gray-700 space-x"
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  class="w-16 h-16 text-secondary"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="paper-plane"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
                  ></path>
                </svg>
                <div>Transfer sent successfully.</div>

                <Link
                  to={"/transactions"}
                  class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-primary hover:bg-secondary rounded py-2 w-full transition duration-150 ease-in"
                >
                  <span class="mr-2 uppercase">Close</span>
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
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SuccessTxnPage;

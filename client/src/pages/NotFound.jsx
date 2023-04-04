import React from "react";
import {
  Billing,
  Business,
  CTA,
  CardDeal,
  Clients,
  Hero,
  Stats,
  Testimonials,
} from "../components";
import styles from "../style";
import { Link, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
        >
          <div className="flex-1 flex flex-col">
            <h2 className={styles.heading2}>Page not found :c</h2>
            {/* <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p> */}
          </div>

          <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <Link
              to={"/"}
              className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
            >
              Go to Home page
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NotFoundPage;

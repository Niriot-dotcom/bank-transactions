import React from "react";
import styles from "../style";

const DashboardPage = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
        >
          <div className="flex-1 flex flex-col">
            <h2 className={styles.heading2}>Dashboard</h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;

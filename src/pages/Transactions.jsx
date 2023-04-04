import React from "react";
import styles, { layout } from "../style";
import { features, transactions } from "../constants";
import TxnCard from "../components/login/FeatureCard";
import { Link } from "react-router-dom";

const TransactionsPage = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
        >
          <div className="flex-1 flex flex-col">
            <h2 className={styles.heading2}>All transactions</h2>
          </div>
        </section>

        <div className={styles.flexCenter}>
          <Link
            to={"/tx"}
            className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
          >
            + New transfer
          </Link>
        </div>

        <section className={`${styles.flexCenter} mb-10`}>
          <div>
            {transactions.map((txn, index) => {
              return <TxnCard key={txn.id} {...txn} index={index} />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TransactionsPage;

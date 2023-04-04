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

const HomePage = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

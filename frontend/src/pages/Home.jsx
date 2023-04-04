import React, { useEffect, useState } from "react";
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
  const [, setData] = useState("");

  useEffect(() => {
    (async function () {
      fetch(`/api/message`)
        .then(function (response) {
          // console.log("response.text(): ", response.text());
          // console.log("response.json(): ", response.json());
          return response.text();
        })
        .then(function (d) {
          console.log(d); // this will be a string
          setData(d);
        });
    })();
  });

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <div>{data}</div> */}
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

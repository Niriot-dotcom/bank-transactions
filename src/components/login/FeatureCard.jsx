import { features } from "../../constants";
import styles from "../../style";

export const TxnCard = ({ icon, title, content, amount, index }) => (
  <div
    className={`flex flex-row justify-center p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } txn-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        <span className="text-dimWhite">To</span> {title} |{" "}
        <span className="text-dimWhite">${amount}</span>
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

export default TxnCard;

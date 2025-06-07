import type { ISkip } from "../../types/Skips";
import styles from "./skipcard.module.css";
import {
  HiArrowRight,
  HiOutlineCalendar,
  HiOutlineCheckBadge,
} from "react-icons/hi2";
import { BsBox } from "react-icons/bs";
import { PiSparkleThin } from "react-icons/pi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Container from "../../assets/container.svg";
import { useSkipDisplayContext } from "../../contexts/skip-display/useSkipDisplayContext";

const SkipCard = ({ skip }: { skip: ISkip }) => {
  const { setModalOpen } = useSkipDisplayContext();

  return (
    <div className={styles.Card}>
      <div className={styles.Skip}>
        <img className={styles.SkipContainer} src={Container} />
      </div>
      <div>
        <p className={styles.Title}>{skip.size} Yard Skip</p>
        <p className={styles.HireDays}>
          <HiOutlineCalendar />
          {skip.hire_period_days} days hire
        </p>
      </div>

      <div className={styles.PriceContainer}>
        <p className={styles.Price}>{skip.price_before_vat}€</p>
        <p className={styles.HireDays}>
          Transport Cost: {skip.transport_cost ? skip.transport_cost : "-"} €
        </p>
        <p className={styles.HireDays}>
          Per Tonne: {skip.per_tonne_cost ? skip.per_tonne_cost : "-"} €
        </p>
      </div>
      <div>
        <p className={styles.HireDays}>
          Road:{" "}
          {skip.allowed_on_road ? (
            <HiOutlineCheckBadge size={14} color="#00ff88" />
          ) : (
            <IoIosCloseCircleOutline size={14} color="#f43f5e" />
          )}
        </p>
        <p className={styles.HireDays}>
          Heavy waste:{" "}
          {skip.allows_heavy_waste ? (
            <HiOutlineCheckBadge size={14} color="#00ff88" />
          ) : (
            <IoIosCloseCircleOutline size={14} color="#f43f5e" />
          )}
        </p>
      </div>
      <button
        onClick={() => setModalOpen(true)}
        className={styles.ActionButton}
      >
        <BsBox /> Select this skip <HiArrowRight fontSize={14} />
      </button>

      <div className={styles.Badge}>
        <PiSparkleThin size={14} />
        {skip.size} yards
      </div>
    </div>
  );
};

export default SkipCard;

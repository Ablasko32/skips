import { BsBox } from "react-icons/bs";
import type { ISkip } from "../../types/Skips";
import styles from "./dropdownmenu.module.css";
import { useSkipDisplayContext } from "../../contexts/skip-display/useSkipDisplayContext";

const DropdownMenu = ({ skips }: { skips: ISkip[] }) => {
  const { selectedSize, setSelectedSize, isDropDownOpen, setDropdownOpen } =
    useSkipDisplayContext();

  return (
    <div>
      <button
        style={{ marginBottom: `${isDropDownOpen ? "1rem" : "6rem"}` }}
        onClick={() => {
          setSelectedSize("");
          setDropdownOpen((prev) => !prev);
        }}
        className={styles.OpenButton}
      >
        {selectedSize
          ? selectedSize + " " + "Yard Skip"
          : isDropDownOpen
          ? "Close"
          : "Please select"}
      </button>
      {isDropDownOpen && (
        <div className={styles.MenuItemContainer}>
          {skips?.map((skip) => {
            return (
              <div
                onClick={() => {
                  if (skip.forbidden) return;
                  setSelectedSize(skip.size.toString());
                  setDropdownOpen(false);
                }}
                className={styles.MenuItem}
                key={skip.id}
                style={{
                  opacity: `${skip.forbidden ? "0.7" : "1"}`,
                  cursor: `${skip.forbidden ? "not-allowed" : "pointer"}`,
                }}
              >
                <div className={styles.Name}>
                  <BsBox />
                  <p>{skip.size} yards</p>
                </div>

                <p className={styles.Price}>{skip.price_before_vat} €</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

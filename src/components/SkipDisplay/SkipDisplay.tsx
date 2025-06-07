import { useSkipDisplayContext } from "../../contexts/skip-display/useSkipDisplayContext";
import { useSkipList } from "./useSkipList";
import styles from "./skipdisplay.module.css";
import SkipCard from "../SkipCard/SkipCard";
import { BsBox } from "react-icons/bs";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { createPortal } from "react-dom";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import type { ISkip } from "../../types/Skips";

const SkipDisplay = () => {
  const { skips, error, isFetching } = useSkipList();
  const { selectedSize, isModalOpen, isDropDownOpen } = useSkipDisplayContext();

  if (isFetching) return <div className={styles.Loader}></div>;
  if (error)
    return <p className={styles.ErrorMessage}>Error loading skips data</p>;

  return (
    <div className={styles.Container}>
      {/* Chose skip size selector */}

      <DropdownMenu skips={skips as ISkip[]} />

      {/* Display selected skip size details */}
      <div>
        {selectedSize &&
          skips
            ?.filter((skip) => skip.size === Number(selectedSize))
            .map((skip) => {
              return <SkipCard skip={skip} key={skip.id} />;
            })}
      </div>
      {/* Fallback */}
      {!selectedSize && !isDropDownOpen && (
        <div className={styles.EmptyState}>
          <BsBox size={32} color="#581c87" />
          <p className={styles.EmptyStateTitle}>Ready to get started?</p>
          <p className={styles.SelectedSizeNotSet}>
            Select a skip size to view more details.
          </p>
        </div>
      )}

      {isModalOpen && createPortal(<ConfirmModal />, document.body)}
    </div>
  );
};

export default SkipDisplay;

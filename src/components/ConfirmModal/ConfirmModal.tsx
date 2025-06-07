import { useEffect, useRef } from "react";
import { useSkipDisplayContext } from "../../contexts/skip-display/useSkipDisplayContext";
import styles from "./confirmmodal.module.css";
import { BsBox } from "react-icons/bs";

const ConfirmModal = () => {
  const { setModalOpen } = useSkipDisplayContext();

  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnClick = (e) => {
      if (!bgRef.current) return;
      if (e.target === bgRef.current) {
        setModalOpen(false);
      }
    };

    document.addEventListener("click", closeOnClick);

    return () => document.removeEventListener("click", closeOnClick);
  }, [setModalOpen]);

  return (
    <div ref={bgRef} className={styles.Background}>
      <div className={styles.Modal}>
        <p>Have you selected your skip size?</p>
        <div className={styles.Buttons}>
          <button className={styles.Action}>
            <BsBox />
            Yes
          </button>
          <button onClick={() => setModalOpen(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;

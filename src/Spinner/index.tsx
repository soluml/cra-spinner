import { useContext } from "react";
import { context } from "../context";
import styles from "./index.module.css";

export function Spinner() {
  const { formId, number, spin } = useContext(context);

  return (
    <div className={styles.container}>
      <ol
        className={[
          styles.spinner,
          spin ? styles["spinner--start"] : styles["spinner--stop"],
        ].join(" ")}
      >
        <li>TEST 1</li>
        <li>TEST 2</li>
        <li>TEST 3</li>
      </ol>
      <button
        className={styles.button}
        disabled={number === null}
        form={formId}
      >
        Spin
      </button>
    </div>
  );
}

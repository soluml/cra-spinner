import { useContext } from "react";
import { context } from "../App";
import { useRandomNumber } from "../Fields/hooks/useRandomNumber";
import styles from "./index.module.css";

export function Spinner() {
  const { formId, max, min } = useContext(context);
  const { number } = useRandomNumber(max, min);

  console.log({ number });

  return (
    <div className={styles.container}>
      <ol className={styles.spinner}>
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

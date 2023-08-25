import { useCallback } from "react";
import styles from "./index.module.css";

export function Adder() {
  const onSubmit = useCallback((evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    console.log("SUBMIT");
  }, []);

  return (
    <form className={styles.adder} onSubmit={onSubmit}>
      <fieldset>
        <legend>Edit Spinner</legend>
        <label>
          Text
          <input />
        </label>
      </fieldset>
    </form>
  );
}

import { useContext, useCallback } from "react";
import { context } from "../context";
import styles from "./index.module.css";

export function Fields() {
  const { formId, requestNumber } = useContext(context);

  console.log("fields");

  const onSubmit = useCallback(
    (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      requestNumber();
    },
    [requestNumber]
  );

  return (
    <form className={styles.fields} id={formId} onSubmit={onSubmit}>
      <fieldset>ASDASDASD</fieldset>
    </form>
  );
}

import { useContext, useCallback } from "react";
import { context } from "../App";
import { useRandomNumber } from "./hooks/useRandomNumber";
import styles from "./index.module.css";

export function Fields() {
  const { formId, min, max } = useContext(context);
  const { requestNumber } = useRandomNumber(max, min);

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

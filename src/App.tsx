import { useId, createContext } from "react";
import { Spinner } from "./Spinner";
import { Adder } from "./Adder";
import { Fields } from "./Fields";

export const context = createContext({
  formId: "",

  min: 0,
  max: 2,
});

const Provider = ({ children }: any) => {
  const formId = useId();
  const min = 0;
  const max = 2;

  return (
    <context.Provider value={{ formId, min, max }}>{children}</context.Provider>
  );
};

const App = () => (
  <Provider>
    <header />

    <Spinner />

    <Adder />

    <Fields />
  </Provider>
);

export default App;

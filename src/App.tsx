import { Spinner } from "./Spinner";
import { Adder } from "./Adder";
import { Fields } from "./Fields";
import { Provider } from "./context";

const App = () => (
  <Provider>
    <header />

    <Spinner />

    <Adder />

    <Fields />
  </Provider>
);

export default App;

import { useId, useState, useCallback, createContext } from "react";

function pseudoRandomNumber(maximum: number, minimum: number) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

async function randomNumber(maximum: number, minimum: number) {
  let chosen: number;

  try {
    const res = await fetch(
      `https://www.random.org/integers/?num=1&min=0&max=${maximum}&col=1&base=10&format=plain&rnd=new`
    ).then((res) => res.text());

    chosen = parseInt(res, 10);

    // If the response is weird, just use the pseudo-random number
    if (isNaN(chosen)) {
      throw new Error("Not a number");
    }
  } catch (e) {
    chosen = pseudoRandomNumber(maximum, minimum);
  }

  return chosen;
}

type Context = {
  formId: string;
  number?: number | null;
  min: number;
  max: number;
  requestNumber: () => void;
};

export const context = createContext<Context>({} as Context);

export const Provider = ({ children }: any) => {
  const formId = useId();
  const [number, setNumber] = useState<number | null>();

  const min = 0;
  const max = 2;

  const requestNumber = useCallback(() => {
    setNumber(null);
    randomNumber(max, min).then((number) => setNumber(number));
  }, []);

  return (
    <context.Provider value={{ formId, number, min, max, requestNumber }}>
      {children}
    </context.Provider>
  );
};

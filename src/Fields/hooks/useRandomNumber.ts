import { useState, useEffect, useCallback } from "react";

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

export function useRandomNumber(maximum: number, minimum = 0) {
  const [trigger, setTrigger] = useState(0);
  const [number, setNumber] = useState<number | null>();

  const requestNumber = useCallback(() => setTrigger(Date.now()), []);

  useEffect(() => {
    if (trigger) {
      randomNumber(maximum, minimum).then((number) => setNumber(number));
    }
  }, [trigger]);

  return {
    number,
    requestNumber,
  };
}

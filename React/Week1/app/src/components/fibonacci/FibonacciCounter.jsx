import { useState } from "react";

export default function FibonacciCounter() {
  const [count, setCount] = useState([0, 1]);

  return (
    <div>
      <button
        onClick={() => {
          setCount([
            ...count,
            count[count.length - 1] + count[count.length - 2],
          ]);
          console.log(count);
        }}
      >
        Fibonacci Counter
      </button>
      {count.map((number) => (
        <p>{number}</p>
      ))}
    </div>
  );
}

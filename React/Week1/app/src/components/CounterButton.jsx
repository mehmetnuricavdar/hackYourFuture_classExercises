import { useState } from "react";

export default function Counter() {
  const [clicks, setClicks] = useState(0);
  const [btnColor, setBtnColor] = useState("red");
  return (
    <div>
      <button
        onClick={() => setBtnColor(btnColor === "red" ? "blue" : "red")}
      >
        Click to change the color
      </button>
      <button className={btnColor}
        onClick={() => {
          setClicks(clicks + 1);
        }}
      >
        Clicked {clicks} times
      </button>
    </div>
  );
}

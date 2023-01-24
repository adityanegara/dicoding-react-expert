import { useState } from "react";

const ShowMessageOnlyWhenOdd = () => {
  const [count, setCount] = useState(2);
  const isOdd = () => count % 2 === 0;
  const increase = () => setCount((currentCount) => currentCount + 1);
  const decrease = () => setCount((currentCount) => currentCount - 1);

  return (
    <div>
      <button onClick={increase}>Increase</button>
      {isOdd() ? <p>Angka ganjil nih!</p> : null}
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default ShowMessageOnlyWhenOdd
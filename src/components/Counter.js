import React, { useState, useEffect } from "react";

function Counter({ initialCounter = 1 }) {
  const [count, setCount] = useState(initialCounter);

  useEffect(() => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  }, [props.source]);

  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCounter)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
}

export default Counter;

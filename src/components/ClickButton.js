import React, { useState, useEffect } from "react";

function ClickButton() {
  //variables
  const [count, setCount] = useState(0);

  useEffect(() => {
    //actualiza el titulo del documento usando la browser API
    document.title = `Clicked ${count} times`;
  });

  return (
    <div>
      <p>Clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me!
      </button>
    </div>
  );
}

export default ClickButton;

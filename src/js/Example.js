import React, { useState } from "react";

function Example() {
  //declare a new state variable, which we'll call "count"
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

const e = React.createElement;

const domContainer = document.querySelector("#example");
ReactDOM.render(e(Example), domContainer);

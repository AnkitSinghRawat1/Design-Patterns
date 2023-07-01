import React from "react";
import { useStore } from "./useStore";
import { store } from "./Store";

const Text = () => {
  const count = useStore(-1);
  console.log("a", count);
  return <h1>{count}</h1>;
};

const Text2 = () => {
  const count = useStore(-1);
  console.log("ab", count);

  return <p>{count}</p>;
};

function ObserverPattern() {
  return (
    <div>
      <h3>4. Observable Pattern</h3>

      <button onClick={(e) => store.increment()}>Increment the count</button>
      <Text />
      <Text2 />
    </div>
  );
}

export default ObserverPattern;

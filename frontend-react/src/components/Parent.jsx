import React, { useState } from 'react';
import CounterChild from './Child';

const CounterParent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <CounterChild incrementCount={incrementCount} />
    </div>
  );
};

export default CounterParent;
import React from 'react';

const CounterChild = ({ incrementCount }) => {
  return (
    <div>
      <button onClick={incrementCount}>Increment Counter</button>
    </div>
  );
};

export default CounterChild;
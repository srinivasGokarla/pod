import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);
  
    useEffect(() => {
      if (isRunning) {
        timerRef.current = setInterval(() => {
          setTime(prevTime => prevTime + 1);
        }, 1000);
      } else if (!isRunning && time !== 0) {
        clearInterval(timerRef.current);
      }
      return () => clearInterval(timerRef.current);
    }, [isRunning, time]);
  
    const startTimer = () => setIsRunning(true);
    const stopTimer = () => setIsRunning(false);
    const resetTimer = () => {
      setIsRunning(false);
      setTime(0);
    };
    const pauseTimer = () => setIsRunning(false);
    const restartTimer = () => {
      setIsRunning(false);
      setTime(0);
      setIsRunning(true);
    };
  
    return (
      <div>
        <h1>Timer: {time}s</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
        <button onClick={restartTimer}>Restart</button>
      </div>
    );
}

export default Timer

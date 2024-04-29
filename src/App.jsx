import { useState, useRef } from "react";

import TimeDisplay from "./components/TimeDisplay";
import Button from "./components/Button";
import RendersDisplay from "./components/RendersDisplay";
import useRendersCounter from "./hooks/useRendersCounter";

function App() {
  const [initTime, setinitTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [timeStore, setTimeStore] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const timerId = useRef(null);

  function handlePlay() {
    setinitTime(Date.now());
    setIsOn(true);
    timerId.current = setInterval(() => setCurrentTime(Date.now()), 1000);
  }

  function handlePause() {
    setTimeStore(secondsPassed);
    setIsOn(false);
    setinitTime(null);
    setCurrentTime(null);
    clearInterval(timerId.current);
  }

  function handleReset() {
    setTimeStore(0);
    setIsOn(false);
    setinitTime(null);
    setCurrentTime(null);
    clearInterval(timerId.current);
  }

  const lastTimeSpan = (currentTime - initTime) / 1000;
  const secondsPassed = lastTimeSpan > 0 ? lastTimeSpan + timeStore : timeStore;

  function computeMinutesDisplay() {
    let computedMinutes = Math.floor(secondsPassed / 60).toFixed();

    if (computedMinutes.length % 2 > 0) {
      computedMinutes = `0${computedMinutes}`;
    }

    return computedMinutes;
  }

  function computeSecondsDisplay() {
    let computedSeconds = (secondsPassed % 60).toFixed();

    if (computedSeconds.length % 2 > 0) {
      computedSeconds = `0${computedSeconds}`;
    }
    return computedSeconds;
  }

  return (
    <>
      <TimeDisplay
        time={`${computeMinutesDisplay()}:${computeSecondsDisplay()}`}
      />
      <RendersDisplay
        rendersCounter={`Number of component's renders: ${useRendersCounter()}`}
      />
      <Button
        name={isOn ? "Pause" : "Play"}
        callback={isOn ? handlePause : handlePlay}
      />
      {isOn && <Button name="Reset" callback={handleReset} />}
    </>
  );
}

export default App;

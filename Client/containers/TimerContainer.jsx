/**
 * ************************************
 *
 * @module
 * @author Eivind Del Fierro, Morah Geist
 * @date 07/2023
 * @description timer container rendering timer and start button
 *
 * ************************************
 */

import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, isRunning, start, pause, resume, restart, } =
    useTimer({
      expiryTimestamp,
      autoStart: false,
      onExpire: () => alert('Stretch complete! Let\'s stretch some more!'),
    });

  return (
    <div className="timerDiv">
      <div className="timeDisplay">
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <div>
        <button className="startBtn" onClick={start}>
          Start
        </button>
        <button className="pauseBtn" onClick={pause}>
          Pause
        </button>
        <button className="resumeBtn" onClick={resume}>
          Resume
        </button>
        <button
          className="restartBtn"
          onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 60);
            restart(time);
            pause();
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

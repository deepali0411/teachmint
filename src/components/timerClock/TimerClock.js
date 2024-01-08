import React, { useEffect, useReducer } from "react";
import _isEmpty from "lodash/isEmpty";

import { getFormattedTime } from "./timerClock.helper";
import styles from "./timerClock.module.scss";

const TimerClock = ({ time }) => {
  const reduce = (prev, next) => ({ ...prev, ...next });
  const [timerState, dispatch] = useReducer(reduce, { hr: 0, min: 0, sec: 0 });

  useEffect(() => {
    if (!_isEmpty(time)) {
      const hour = Number(time[0]);
      const minute = Number(time[1]);
      const second = Number(time[2]);
      dispatch({ hr: hour, min: minute, sec: second });
    }
  }, [time]);

  let timer = null;
  const handleTime = () => {
    timer = setInterval(() => {
      if (
        timerState.sec === 59 &&
        timerState.minute === 59 &&
        timerState.hour === 23
      ) {
        dispatch({ ...timerState, hr: 0, min: 0, sec: 0 });
      } else if (timerState.sec === 59 && timerState.minute === 59) {
        dispatch({ ...timerState, hr: timerState.hr + 1, min: 0, sec: 0 });
      } else if (timerState.sec === 59) {
        dispatch({ ...timerState, min: timerState.min + 1, sec: 0 });
      } else dispatch({ ...timerState, sec: timerState.sec + 1 });
    }, 1000);
  };

  useEffect(() => {
    if (!_isEmpty(time)) handleTime();
    return () => clearInterval(timer);
  });

  const handleClickTimerButton = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    } else handleTime();
  };

  return (
    <div className={styles.container}>
      <div className={styles.timer}>{getFormattedTime(timerState)}</div>
      <div className={styles.button}>
        <button className={styles.timerButton} onClick={handleClickTimerButton}>
          Pause/Start
        </button>
      </div>
    </div>
  );
};

export default TimerClock;

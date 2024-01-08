export const getFormattedTime = (timerState) =>
  timerState.hr.toString().padStart(2, "0") +
  ":" +
  timerState.min.toString().padStart(2, "0") +
  ":" +
  timerState.sec.toString().padStart(2, "0");

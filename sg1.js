const clock = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const tick = (clock) => {
  clock.seconds = clock.seconds + 1;
  clock.minutes = clock.minutes + clock.secods / 60;
  clock.hours = clock.hours + clock.minutes / 60;
  clock.seconds = clock.seconds % 60;
  clock.minutes = clock.minutes % 60;
  clock.hours = clock.hours % 24;

  return clock;
};

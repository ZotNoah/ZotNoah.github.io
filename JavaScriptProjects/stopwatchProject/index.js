let timer;
  let milliseconds = 0;
  let isRunning = false;

  function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    const centisec = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
    return `${hrs}:${mins}:${secs}.${centisec}`;
  }

  function updateDisplay() {
    document.getElementById('stopwatch').textContent = formatTime(milliseconds);
  }

  function start() {
    if (!isRunning) {
      isRunning = true;
      timer = setInterval(() => {
        milliseconds += 10;
        updateDisplay();
      }, 10);
    }
  }

  function stop() {
    isRunning = false;
    clearInterval(timer);
  }

  function reset() {
    stop();
    milliseconds = 0;
    updateDisplay();
  }


  updateDisplay();
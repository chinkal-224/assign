let workDuration = 25;
let shortBreak = 5;
let longBreak = 15;
let pomodoroCount = 0;
let cyclesBeforeLong = 4;
let timer;
let timeLeft;
let isRunning = false;
let currentSession = "work";

function updateDurations() {
  workDuration = parseInt(document.getElementById("work").value);
  shortBreak = parseInt(document.getElementById("shortBreak").value);
  longBreak = parseInt(document.getElementById("longBreak").value);
  cyclesBeforeLong = parseInt(document.getElementById("cycles").value);
}

function startTimer() {
  if (isRunning) return;
  updateDurations();

  if (!timeLeft) {
    timeLeft = (currentSession === "work" ? workDuration : currentSession === "short" ? shortBreak : longBreak) * 60;
  }

  isRunning = true;
  timer = setInterval(() => {
    timeLeft--;
    displayTime();

    if (timeLeft <= 0) {
      clearInterval(timer);
      isRunning = false;
      handleSessionEnd();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = null;
  currentSession = "work";
  pomodoroCount = 0;
  updateCycleDisplay();
  displayTime();
  document.getElementById("session-type").innerText = "Session: Work";
}

function displayTime() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  document.getElementById("timer").innerText =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function handleSessionEnd() {
  if (currentSession === "work") {
    pomodoroCount++;
    updateCycleDisplay();

    if (pomodoroCount % cyclesBeforeLong === 0) {
      currentSession = "long";
      timeLeft = longBreak * 60;
      document.getElementById("session-type").innerText = "Session: Long Break";
    } else {
      currentSession = "short";
      timeLeft = shortBreak * 60;
      document.getElementById("session-type").innerText = "Session: Short Break";
    }
  } else {
    currentSession = "work";
    timeLeft = workDuration * 60;
    document.getElementById("session-type").innerText = "Session: Work";
  }

  startTimer();
}

function updateCycleDisplay() {
  let cycleDisplay = "";
  for (let i = 0; i < cyclesBeforeLong; i++) {
    cycleDisplay += i < pomodoroCount % cyclesBeforeLong ? "🔴 " : "⚪ ";
  }
  document.getElementById("pomodoro-cycle").innerText = cycleDisplay.trim();
}

resetTimer(); // Set initial display

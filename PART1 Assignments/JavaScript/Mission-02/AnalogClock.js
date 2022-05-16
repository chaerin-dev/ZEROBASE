const AnalogClock = ($container) => {
  $container.innerHTML = `
  <div class="hand hour"></div>
  <div class="hand minute"></div>
  <div class="hand second"></div>
  <div class="time time1">|</div>
  <div class="time time2">|</div>
  <div class="time time3">|</div>
  <div class="time time4">|</div>
  <div class="time time5">|</div>
  <div class="time time6">|</div>
  <div class="time time7">|</div>
  <div class="time time8">|</div>
  <div class="time time9">|</div>
  <div class="time time10">|</div>
  <div class="time time11">|</div>
  <div class="time time12">|</div>`;

  const get = (target) => $container.querySelector(target);
  const $hourHand = get(".hand.hour");
  const $minuteHand = get(".hand.minute");
  const $secondHand = get(".hand.second");

  const getTime = () => {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (360 / 12) * hours + (360 / 12 / 60) * minutes + (360 / 12 / 60 / 60) * seconds;
    const minDeg = (360 / 60) * minutes + (360 / 60 / 60) * seconds;
    const secDeg = (360 / 60) * seconds;

    $hourHand.style.setProperty("--deg", hourDeg);
    $minuteHand.style.setProperty("--deg", minDeg);
    $secondHand.style.setProperty("--deg", secDeg);
  };

  getTime();
  setInterval(getTime, 1000);
};

export default AnalogClock;

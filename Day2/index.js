const secondHand = document.querySelector('.seconds-hand');
const minuteHand = document.querySelector('.minutes-hand');
const hourHand = document.querySelector('.hours-hand');

function getTime() {
  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  const secondDeg = ((second / 60) * 360);
  const minuteDeg = ((minute / 60) * 360);
  const hourDeg = ((hour / 12) * 360 + (minuteDeg / 12));

  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

}

setInterval(getTime, 1000);
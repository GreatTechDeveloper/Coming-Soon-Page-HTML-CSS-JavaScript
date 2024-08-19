const x = setInterval(function () {
  const countDownDate = new Date("Oct 16, 2040 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = countDownDate - now;

  // محاسبه روزها
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  // محاسبه ساعت‌ها
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ); // تغییر کوچک اینجا بود

  // محاسبه دقیقه‌ها
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); // و اینجا

  // محاسبه ثانیه‌ها
  const seconds = Math.floor((distance % (1000 * 60)) / 1000); // و اینجا

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // اگر زمان منفی شد تایمر را متوقف کن
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);

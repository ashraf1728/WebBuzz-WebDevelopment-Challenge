  // Countdown timer logic for upcoming matches
  function countdown(matchDate, elementId) {
    const countDownDate = new Date(matchDate).getTime();

    const x = setInterval(function() {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById(elementId).innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

      if (distance < 0) {
        clearInterval(x);
        document.getElementById(elementId).innerHTML = "EXPIRED";
      }
    }, 1000);
  }

  countdown('Dec 25, 2024 18:00:00', 'match1-countdown');
  countdown('Dec 31, 2024 15:00:00', 'match2-countdown');
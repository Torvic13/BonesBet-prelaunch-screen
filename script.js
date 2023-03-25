// Définir la date de fin en utilisant l'heure UTC
var endDate = new Date(Date.UTC(2023, 2, 31, 19, 0, 0)).getTime();

let now = new Date().getTime();
    var remainingTime = endDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    daysLeft = Math.trunc(remainingTime / day);
    hoursLeft = Math.trunc((remainingTime % day) / hour);
    minutesLeft = Math.trunc((remainingTime % hour) / minute);
    secondsLeft = Math.trunc((remainingTime % minute) / second);
    document.querySelector('#days').innerHTML = daysLeft + '<span>' + 'D' + '</span>';
    document.querySelector('#hours').innerHTML = '&nbsp;' + hoursLeft + '<span>' + 'H' + '</span>';
    document.querySelector('#minutes').innerHTML = '&nbsp;' + minutesLeft + '<span>' + 'M' + '</span>';
    document.querySelector('#seconds').innerHTML = '&nbsp;' + secondsLeft + '<span>' + 'S' + '</span>';

// Mettre à jour le compte à rebours toutes les secondes
var countDownTimer = setInterval(() => {
    let now = new Date().getTime();
    var remainingTime = endDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    daysLeft = Math.trunc(remainingTime / day);
    hoursLeft = Math.trunc((remainingTime % day) / hour);
    minutesLeft = Math.trunc((remainingTime % hour) / minute);
    secondsLeft = Math.trunc((remainingTime % minute) / second);
    document.querySelector('#days').innerHTML = daysLeft + '<span>' + 'D' + '</span>';
    document.querySelector('#hours').innerHTML = '&nbsp;' + hoursLeft + '<span>' + 'H' + '</span>';
    document.querySelector('#minutes').innerHTML = '&nbsp;' + minutesLeft + '<span>' + 'M' + '</span>';
    document.querySelector('#seconds').innerHTML = '&nbsp;' + secondsLeft + '<span>' + 'S' + '</span>';
}, 1000);
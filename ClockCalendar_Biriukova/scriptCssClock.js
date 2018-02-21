(function() {
let now,
    hour, minute, sec,
    degreeSec,
    degreeMin,
    degreeHour;

const $secHand = $('.sec')[0],
    $minHand = $('.minute')[0],
    $hourHand = $('.hour')[0],
    $btnChange = $('.change'),
    $divDial = $('.dial'),
    $divClockCal= $('.clock-calendar');

const format = function formatCheck(element) {
    if (element < 10) {
        return '0' + element;
    } else {
        return element;
    }
};

const get = function getDateAndReturnDataInDegree() {
    now = new Date();
    hour = format(now.getHours());
    min = format(now.getMinutes());
    sec = format(now.getSeconds());
    degreeSec = parseInt(sec, 10) * 6,
    degreeMin = parseInt(min, 10) * 6 + 1,
    degreeHour = parseInt(hour, 10) * 30 + ((degreeMin / 6 * 100 / 60) * 30) / 100;

    return degreeSec,degreeMin,degreeHour;
};

const change = function changeHiddenClassBetweenTwoDivs() {
    $divDial.toggleClass('hidden');
    $divClockCal.toggleClass('hidden');
};

setInterval(() => get(), 1000);

setInterval(() => {
    $secHand.style.setProperty('--sec', 'rotate(' + degreeSec + 'deg)');
    $minHand.style.setProperty('--min', 'rotate(' + degreeMin + 'deg)');
    $hourHand.style.setProperty('--hour', 'rotate(' + degreeHour + 'deg)');
},1000);

$btnChange.click(change);
}());
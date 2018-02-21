(function () {
let now = new Date(),
    year, month, day,
    hour, minute, sec,
    intTime, intDate;

const $divClock = $('.clock'),
    $divCalendar = $('.calendar'),
    $divCommon = $('.clock-calendar');

//elements' transformation
const format = function formatCheck(element) {
    if (element < 10) {
        return '0' + element;
    } else {
        return element;
    }
};

// updating data
setInterval(()=>{return now = new Date()},1000);

//create object nowClass
const nowClass =  {
    year:   ()=> {return now.getFullYear()},
    month:  ()=> {return format(now.getMonth()+1)},
    day:    ()=> {return format(now.getDate())},
    hour:   ()=> {return format(now.getHours())},
    minute: ()=> {return format(now.getMinutes())},
    sec:    ()=> {return format(now.getSeconds())},
};

// create html Short Time
const shortTime = function createHtmlShortTime(hour, minute) {
    $divClock.html(hour + ':' + minute)
              .removeClass('useClock');
};

// create html Full Time
const fullTime = function createHtmlFullTime(hour, minute,sec) {
    $divClock.html(hour + ':' + minute + ':' + sec)
              .addClass('useClock');
};

// create html Ua Calendar
const uaCal = function createHtmlUaCalendar(year, month,day) {
    $divCalendar.html(day + '.' + month + '.' + year)
                  .addClass('useCalendar');
};

// create html Eu Calendar
const euCal = function createHtmlEuCalendar(year, month,day) {
    year = year.toString().split('').splice(2,2).join('');
    $divCalendar.html(month + '/' + day + '/' + year)
                  .removeClass('useCalendar');
};

// Clock create
const clock = function chooseFormatClock() {
    if ($divClock.hasClass('useClock')) {
        intTime = setInterval(()=>{
            shortTime(nowClass.hour(), nowClass.minute())
        }, 1000);
    } else {
        intTime = setInterval(()=>{
            fullTime(nowClass.hour(), nowClass.minute(), nowClass.sec())
        }, 1000);
    }
};

// Calendar create
const calendar = function chooseFormatCalendar() {
    if ($divCalendar.hasClass('useCalendar')) {
        intDate = setInterval(()=> {
            euCal(nowClass.year(), nowClass.month(), nowClass.day())
        }, 1000);
    } else {
        intDate = setInterval(()=> {
            uaCal(nowClass.year(), nowClass.month(), nowClass.day())
        }, 1000);
    }
};

// Change clock-calendar
const change = function changeClockCalendar() {
    $divClock.toggleClass('active');
    $divClock.toggleClass('hidden');

    $divCalendar.toggleClass('active');
    $divCalendar.toggleClass('hidden');
};

shortTime(now.getHours(),format(now.getMinutes()));
$divCommon.click(()=>{clearInterval(intDate)}).click(calendar);
$divCommon.click(()=>{clearInterval(intTime)}).click(clock);
$divCommon.contextmenu(change);
$('body').contextmenu(false);
}());
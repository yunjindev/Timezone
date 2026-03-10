import dayjs from 'dayjs'
import MicroModal from 'micromodal';
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
MicroModal.init();
dayjs.extend(utc)
dayjs.extend(timezone)

//
const currentTime = document.getElementById("currentTime");
const timezoneSelect = document.getElementById("timezoneSelect");
const currentDay = document.getElementById("currentDay");
const currentTimezone = document.getElementById("currentTimezone");
const selectedTimezone = timezoneSelect.value;

let dateInterval = null;
let timeInterval = null;

setTimezone(selectedTimezone);

function setTime(timezone) {
    clearInterval(timeInterval);
    timeInterval = setInterval(() => {
        const time = dayjs().tz(timezone).format("HH:mm:ss");
        currentTime.textContent = time;
    },1000);
}

function setDate(timezone) {
    clearInterval(dateInterval);
    dateInterval = setInterval(()=> {
        const day = dayjs().tz(timezone).format("MMMM D, YYYY");
        currentDay.textContent = day;
    },1000);
}

function setTimezone(timezone) {
    currentTimezone.textContent = timezone;
    setDate(timezone);
    setTime(timezone);
}

timezoneSelect.addEventListener("change", () => {
    const selectedTimezone = timezoneSelect.value;
    setTimezone(selectedTimezone);
});

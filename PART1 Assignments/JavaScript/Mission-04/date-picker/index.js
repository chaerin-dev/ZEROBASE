const $links = document.querySelectorAll("link");
const $lastLink = $links[$links.length - 1];
const themeCssHtml = document.createElement("link");
themeCssHtml.setAttribute("href", "date-picker/theme.css");
themeCssHtml.setAttribute("rel", "stylesheet");
$lastLink.parentNode.insertBefore(themeCssHtml, $lastLink.nextSibling);

const calendarHTML = `
      <form class="date-picker-form">
        <input type="text" class="date-picker-input" placeholder="Select date" readonly />
      </form>
      <div class="calendar">
      <div class="calendar-nav">
        <div class="button prev"></div>
        <div class="now-info">
          <div class="now-month"></div>
          <div class="now-year"></div>
        </div>
        <div class="button next"></div>
      </div>
      <div class="calendar-grid">
      </div>`;

const monthsArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const daysArr = ["SUN", "MON", "TUES", "WED", "THU", "FRI", "SAT"];
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
// const day = now.getDay();

const DatePicker = ($container) => {
  // const $input = $container.querySelector(".date-picker-input");

  const init = () => {
    $container.innerHTML = calendarHTML;

    const $month = $container.querySelector(".now-month");
    const $year = $container.querySelector(".now-year");
    $month.innerHTML = `${monthsArr[month]}`;
    $year.innerHTML = `${year}`;

    const $calendar = $container.querySelector(".calendar-grid");

    for (let i = 0; i < 7; i++) {
      const $day = document.createElement("div");
      $day.classList.add("day", `${daysArr[i]}`);
      $day.innerHTML = `${daysArr[i]}`;
      $calendar.appendChild($day);
    }

    const thisMonthFirstDate = new Date(year, month, 1);
    const thisMonthLastDate = new Date(year, month + 1, 0);

    for (let i = 0; i < thisMonthFirstDate.getDay(); i++) {
      const $cell = document.createElement("div");
      $cell.classList.add("date", `${daysArr[i]}`, "blurred");
      $cell.innerHTML = `${thisMonthFirstDate.getDate()}`;
      $calendar.appendChild($cell);
    }
    for (let i = 0; i < thisMonthLastDate.getDate(); i++) {
      const $cell = document.createElement("div");
      $cell.classList.add("date", `${daysArr[(thisMonthFirstDate.getDay() + i) % 7]}`);
      $cell.innerHTML = `${i + 1}`;
      if (i + 1 === date) $cell.style.border = "1px solid #55be77";
      $calendar.appendChild($cell);
    }
    for (let i = 1; i < 7 - thisMonthLastDate.getDay(); i++) {
      const $cell = document.createElement("div");
      $cell.classList.add("date", `${daysArr[(thisMonthLastDate.getDay() + i) % 7]}`, "blurred");
      $cell.innerHTML = `${i}`;
      $calendar.appendChild($cell);
    }
  };

  init();
};

export default DatePicker;

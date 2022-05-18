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
          <div class="info">
            <div class="month"></div>
            <div class="year"></div>
          </div>
          <div class="button next"></div>
        </div>
        <div class="calendar-grid"></div>
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
const [nowYear, nowMonth, nowDate] = [now.getFullYear(), now.getMonth(), now.getDate()];

const DatePicker = ($container) => {
  let [year, month] = [nowYear, nowMonth];
  // let [showYear, showMonth] = [year, month];
  let [selectedYear, selectedMonth, selectedDate] = [-1, -1, -1];

  const init = () => {
    $container.innerHTML = calendarHTML;
  };

  const showCalendar = () => {
    const $calendar = $container.querySelector(".calendar");
    $calendar.classList.add("displayed");
  };

  const hideCalendar = () => {
    const $calendar = $container.querySelector(".calendar");
    $calendar.classList.remove("displayed");
  };

  const calcPrevMonth = () => {
    month--;
    if (month < 0) {
      year--;
      month = 11;
    }
  };

  const calcNextMonth = () => {
    month++;
    if (month > 11) {
      year++;
      month = 0;
    }
  };

  const selectDate = (e) => {
    selectedYear = parseInt(e.target.classList[1].slice(1));
    selectedMonth = parseInt(e.target.classList[2].slice(1));
    selectedDate = parseInt(e.target.classList[3].slice(1));
    const dateStr = `${selectedYear}-${
      selectedMonth + 1 < 10 ? "0" + (selectedMonth + 1) : selectedMonth + 1
    }-${selectedDate < 10 ? "0" + selectedDate : selectedDate}`;
    $container.querySelector("input").value = dateStr;
    console.log(dateStr);
  };

  const renderCalendar = (year, month) => {
    const $month = $container.querySelector(".month");
    const $year = $container.querySelector(".year");
    $month.innerHTML = `${monthsArr[month]}`;
    $year.innerHTML = `${year}`;

    let calendarGridInnerHTML = "";
    for (let i = 0; i < 7; i++) {
      calendarGridInnerHTML += `<div class="day ${daysArr[i]}">${daysArr[i]}</div>`;
    }
    const thisMonthFirstDate = new Date(year, month, 1);
    const thisMonthLastDate = new Date(year, month + 1, 0);
    const prevMonthLastDate = new Date(year, month, 0);
    for (let i = thisMonthFirstDate.getDay(); i > 0; i--) {
      const tempYear = month === 0 ? year - 1 : year;
      const tempMonth = month === 0 ? 11 : month - 1;
      const tempDate = prevMonthLastDate.getDate() - i + 1;
      calendarGridInnerHTML += `<div class="date y${tempYear} m${tempMonth} d${tempDate} blurred">${tempDate}</div>`;
    }
    for (let i = 1; i <= thisMonthLastDate.getDate(); i++) {
      calendarGridInnerHTML += `<div class="date y${year} m${month} d${i} ${
        daysArr[(prevMonthLastDate.getDay() + i) % 7]
      }">${i}</div>`;
    }
    for (let i = 1; i < 7 - thisMonthLastDate.getDay(); i++) {
      const tempYear = month === 11 ? year + 1 : year;
      const tempMonth = month === 11 ? 0 : month + 1;
      calendarGridInnerHTML += `<div class="date y${tempYear} m${tempMonth} d${i} blurred">${i}</div>`;
    }

    const $calendarGrid = $container.querySelector(".calendar-grid");
    $calendarGrid.innerHTML = calendarGridInnerHTML;

    const $nowDate = $calendarGrid.querySelector(`.y${nowYear}.m${nowMonth}.d${nowDate}`);
    if ($nowDate) $nowDate.classList.add("today");

    const $selectedDate = $calendarGrid.querySelector(
      `.y${selectedYear}.m${selectedMonth}.d${selectedDate}`
    );
    if ($selectedDate) $selectedDate.classList.add("selected");
  };

  init();

  $container.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT") {
      showCalendar();
      if (selectedYear !== -1) {
        renderCalendar(selectedYear, selectedMonth);
      } else renderCalendar(nowYear, nowMonth);
    }
    if (e.target.classList.contains("prev")) {
      calcPrevMonth();
      renderCalendar(year, month);
    }
    if (e.target.classList.contains("next")) {
      calcNextMonth();
      renderCalendar(year, month);
    }
    if (e.target.classList.contains("date")) {
      selectDate(e);
      hideCalendar();
    }
  });

  $container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("date")) e.target.classList.add("hovered");
  });

  $container.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("date")) e.target.classList.remove("hovered");
  });

  document.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT") return;
    if (e.target.classList.contains("date")) return;
    if (e.target.parentNode.classList.contains("calendar")) return;
    if (e.target.parentNode.classList.contains("calendar-nav")) return;
    if (e.target.parentNode.classList.contains("info")) return;
    if (e.target.parentNode.classList.contains("calendar-grid")) return;
    hideCalendar();
  });
};

export default DatePicker;

(function () {
  "use strict";

  const get = (target) => document.querySelector(target);
  const $body = get("body");
  const $toggleBtn = get(".toggle");
  const $nav = get("nav");

  const renderNav = () => {
    if (localStorage.getItem("isActive") === "true") $nav.classList.add("active");
    else $nav.classList.remove("active");
  };

  const toggle = () => {
    localStorage.setItem(
      "isActive",
      localStorage.getItem("isActive") === "true" ? "false" : "true"
    );
    $body.classList.remove("preload");
    renderNav();
  };

  const init = () => {
    renderNav();
    $body.style.visibility = "visible";
    $toggleBtn.addEventListener("click", toggle);
  };

  init();
})();

const $links = document.querySelectorAll("link");
const $lastLink = $links[$links.length - 1];
const themeCssHtml = document.createElement("link");
themeCssHtml.setAttribute("href", "star-rating/theme.css");
themeCssHtml.setAttribute("rel", "stylesheet");
$lastLink.parentNode.insertBefore(themeCssHtml, $lastLink.nextSibling);

const StarRating = ($container) => {
  const $stars = document.createElement("div");
  $stars.className = "star-rating-container";
  $container.appendChild($stars);

  const totalStarCnt = $container.getAttribute("data-max-rating");
  for (let i = 0; i < totalStarCnt; i++) {
    const star = document.createElement("i");
    star.classList.add("bx", "bxs-star", `${i + 1}`);
    $stars.appendChild(star);
  }

  $stars.addEventListener("mouseover", (e) => {
    if (e.target.tagName !== "I") return;
    const hoveredStarNum = e.target.classList[2];
    $stars.childNodes.forEach((star) => {
      if (star.classList[2] <= hoveredStarNum) star.classList.add("hovered");
    });
  });

  $stars.addEventListener("mouseout", () => {
    $stars.childNodes.forEach((star) => {
      star.classList.remove("hovered");
    });
  });

  $stars.addEventListener("click", (e) => {
    if (e.target.tagName !== "I") return;
    const selectedStarNum = e.target.classList[2];
    $stars.childNodes.forEach((star) => {
      if (star.classList[2] <= selectedStarNum) star.classList.add("selected");
      else star.classList.remove("selected");
    });
    $container.dispatchEvent(
      new CustomEvent("rating-change", {
        detail: selectedStarNum,
      })
    );
  });
};

export default StarRating;

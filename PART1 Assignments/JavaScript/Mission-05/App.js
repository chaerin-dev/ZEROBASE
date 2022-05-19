import { Nav, NewsList } from "./components/index.js";

const $root = document.querySelector("#root");
$root.innerHTML = `
      <nav class="category-list"></nav>
      <div class="news-list-container"></div>`;

Nav($root);
NewsList($root);

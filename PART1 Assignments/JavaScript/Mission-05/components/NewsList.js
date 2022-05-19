import { state, observe } from "./index.js";

const apiKey = "e395fd41fb2f48c19fdda527bda583db";
const topHeadlinesUrl = "https://newsapi.org/v2/top-headlines";
let currentPage = 0;

export const NewsList = ($container) => {
  const $newsListContainer = $container.querySelector(".news-list-container");
  $newsListContainer.innerHTML = `
        <article class="news-list">
        </article>
        <div class="scroll-observer">
          <img src="img/ball-triangle.svg" alt="Loading..." />
        </div>`;

  const $newsList = document.querySelector("article");
  const $scroll = document.querySelector(".scroll-observer");

  const createNewsItem = (item) => {
    const { title, url, urlToImage, description } = item;
    $newsList.innerHTML += `
        <section class="news-item">
          <div class="thumbnail">
            <a href="${url}" target="_blank" rel="noopener noreferrer">
              <img src="${urlToImage}" alt="thumbnail" />
            </a>
          </div>
          <div class="contents">
            <h2>
              <a href="${url}" target="_blank" rel="noopener noreferrer">
                ${title}
              </a>
            </h2>
            <p>
              ${description}
            </p>
          </div>
        </section>`;
  };

  const loadNews = async () => {
    const fetchedNews = await axios.get(
      `${topHeadlinesUrl}?country=kr&category=${
        state.category === "all" ? "general" : state.category
      }&page=${currentPage}&pageSize=5&apiKey=${apiKey}`
    );
    fetchedNews.data.articles.forEach(createNewsItem);
  };

  const render = () => {
    $newsList.innerHTML = "";
    loadNews();
  };

  const loadMoreNews = () => {
    return () => {
      setTimeout(() => {
        currentPage++;
        loadNews();
      }, 100);
    };
  };

  const scrollObserve = () => {
    const options = { rootMargin: "0px", threshold: 0.8 };
    const observer = new IntersectionObserver(loadMoreNews(), options);
    observer.observe($scroll);
  };

  setTimeout(() => scrollObserve(), 100);

  observe(render);
};

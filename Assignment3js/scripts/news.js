"use strict";

const newsContainer = document.querySelector("#news-container");
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const pagenum = document.querySelector("#page-num");
const keyAPI = "50e7e83565a04489b828250bc8c2a3fb";

let totalResults = 0;

async function getDataNews(country, category, pagesize, page) {
  try {
    const api = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pagesize}&page=${page}&apiKey=${keyAPI}`
    );
    const data = await api.json();
    console.log(data);
    totalResults = data.totalResults;
    displayNews(data);
  } catch (err) {
    console.log(err);
  }
}

getDataNews("us", "sport", 3, 1);

function displayNews(data) {
  let html = "";
  BtnPrev();
  data.articles.forEach((element) => {
    html += `<div class="card flex-row flex-wrap">
  <div class="card mb-3" style="">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="${element.urlToImage}"
          class="card-img"
          alt="${element.title}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${element.title}"</h5>
          <p class="card-text">${element.content}"</p>
          <a href="${element.url}""
            class="btn btn-primary">View</a>
        </div>
      </div>
    </div>
  </div>
</div>`;
    newsContainer.innerHTML = html;
  });
}

const BtnPrev = function () {
  if ((pagenum.textContent = "1")) {
    btnPrev.style.display = "none";
  } else {
    btnPrev.style.display = "block";
  }
};

const BtnNext = function () {
  console.log(totalResults);
  if (pagenum.textContent === Math.ceil(totalResults / 3)) {
    btnNext.style.display = "none";
  } else {
    btnNext.style.display = "block";
  }
};

btnNext.addEventListener("click", function () {
  getDataNews("us", "sport", 3, ++pagenum.textContent);
  BtnNext();
  pagenum.textContent = pagenum.textContent;
});

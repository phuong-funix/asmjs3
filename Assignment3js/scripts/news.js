"use strict";

const newsContainer = document.querySelector("#news-container");
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const pagenum = document.querySelector("#page-num");
// const keyAPI = "50e7e83565a04489b828250bc8c2a3fb";
const keyAPI = "f506b23c7be24e1cb00e06d1055fc829";

let totalResults = 0;
console.log(isSetting);

let pagesize = newsSetting[currentUser.username].pagesize || 5;
let category = newsSetting[currentUser.username].category || "General";

// get api new
async function getDataNews(country, category, pagesize, page) {
  try {
    const api = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pagesize}&page=${page}&apiKey=${keyAPI}`
    );
    const data = await api.json();

    totalResults = data.totalResults;
    displayNews(data);
  } catch (err) {
    console.log(err);
  }
}

getDataNews("us", category, pagesize, 1);

// show html list news
function displayNews(data) {
  let html = "";
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
    BtnNext();
    BtnPrev();
  });
}

// an hien nut prev
const BtnPrev = function () {
  if (pagenum.textContent === "1") {
    btnPrev.style.display = "none";
  } else {
    btnPrev.style.display = "block";
  }
};

// an hien nut next
const BtnNext = function () {
  if (Number(pagenum.textContent) === Math.ceil(totalResults / 12)) {
    btnNext.style.display = "none";
  } else {
    btnNext.style.display = "block";
  }
};

// bat su kien nut next
btnNext.addEventListener("click", function () {
  let nextNum = Number(pagenum.textContent);
  if (nextNum < Math.ceil(totalResults / 12)) {
    nextNum += 1;
    pagenum.textContent = nextNum;
    getDataNews("us", "sport", 9, nextNum);
  }
});

// bat su kien nut prev
btnPrev.addEventListener("click", function () {
  let preNum = Number(pagenum.textContent);
  if (preNum > 1) {
    preNum--;
    pagenum.textContent = preNum;
    getDataNews("us", "sport", 7, preNum);
  }
});

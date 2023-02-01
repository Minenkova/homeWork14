"use strict";

const url = "https://rickandmortyapi.com/api/character?page=1";
const divWrap = document.getElementsByClassName("wrap"); // div with selected info
const listWrap = document.getElementsByClassName("list__wrap"); // empty div
const selectedDivs = document.getElementsByClassName("selected__info"); //array of new divs
const selectedDiv = document.querySelectorAll(".selected__info");
const outputOfInformation = document.getElementsByClassName("selected__text");
const btnPrev = document.querySelector(".btn__prev");
const btnNext = document.querySelector(".btn__next");
const count = document.getElementById("count");

async function getData(url) {
  let responce = await fetch(url);
  let data = await responce.json();
  console.log(data);
  data.results.forEach((el) => {
    listWrap[0].innerHTML += `<div class="selected__info" p-name = "${el.name}" div-name = "selected__div"><p p-name = "${el.name}"> name - ${el.name}</p><p p-name = "${el.name}"> status -  ${el.status}</p></div>`;
  });
}
getData();

listWrap[0].addEventListener("click", (event) => {
  const nameOfPerson = event.target.getAttribute("p-name");
  if (nameOfPerson === null) {
    outputOfInformation[0].innerText = `Person wasn't selected`;
  } else {
    outputOfInformation[0].innerText = `Selected person ${nameOfPerson}`;
  }
});

//     const urlParams = new URL('https://rickandmortyapi.com/api/character?page=1');

// const page = urlParams.searchParams.get('page')

// console.log(page);

let current_page = 1;

getData(`https://rickandmortyapi.com/api/character?page=1`);

btnPrev.addEventListener("click", () => {
  listWrap[0].innerHTML = "";
  if (current_page > 1) {
    current_page--;
  }
  getData(`https://rickandmortyapi.com/api/character?page=${current_page}`);

  const linkPrev = new URL(
    `https://rickandmortyapi.com/api/character?page=${current_page}`
  );
  const pagePrev = linkPrev.searchParams.get("page");
  count.innerHTML = pagePrev;
});

btnNext.addEventListener("click", () => {
  listWrap[0].innerHTML = "";
  current_page++;
  getData(`https://rickandmortyapi.com/api/character?page=${current_page}`);

  const linkNext = new URL(
    `https://rickandmortyapi.com/api/character?page=${current_page}`
  );
  const pageNext = linkNext.searchParams.get("page");
  count.innerHTML = pageNext;
  if (current_page >= 42) {
    btnNext.disabled = true;
  }
});

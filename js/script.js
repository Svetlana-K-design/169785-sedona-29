const searchOpen = document.querySelector(".search-open-form");
const searchHotels = document.querySelector(".search-hotels-form");
const arivalDate = searchHotels.querySelector(".arival-date");
const departDate = searchHotels.querySelector(".depart-date");
const adult = searchHotels.querySelector(".adult");
const child = searchHotels.querySelector(".child");

let isStorageSupport = true;
let storageAdult;
let storageChild;


try {
  storageAdult = localStorage.getItem("adult");
  storageChild = localStorage.getItem("child");
  adult.setAttribute("value", storageAdult);
  child.setAttribute("value", storageChild);
} catch {
  isStorageSupport = false;
}

searchOpen.addEventListener("click", function() {
  searchHotels.classList.toggle("search-hotels-form-show");
  arivalDate.focus({preventScroll:true});
});

searchHotels.addEventListener("submit", function (evt) {
  if (!arivalDate.value || !departDate.value) {
    evt.preventDefault();
    console.log("Нужно ввести даты заезда и отъезда")
  } else {
    if (isStorageSupport) {
    localStorage.setItem("adult", adult.value);
    localStorage.setItem("child", child.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
      searchHotels.classList.remove("search-hotels-form-show");
  }
});

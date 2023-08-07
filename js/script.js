
const svgLanguage = document.getElementById("jackdaw-svg");

svgLanguage.addEventListener("click", () => {
    document.getElementById("dropdown-language").classList.toggle("show");
});

const ru = document.getElementById("RU");
const en = document.getElementById("EN");

ru.addEventListener("click", () => {
    document.getElementById("language").innerHTML="RU";
    document.cookie = "language=RU";
});

en.addEventListener("click", () => {
    document.getElementById("language").innerHTML="EN";
    document.cookie = "language=EN";
});


function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("language").innerHTML=getCookie("language");
});


const svgBurger = document.getElementById("svg-burger");
const svgClosed = document.getElementById("svg-closed");

svgBurger.addEventListener("click", () => {
    document.getElementById("nav").classList.toggle("show");

    svgBurger.style.display = "none";
    svgClosed.style.display = "block";
});

svgClosed.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("show");
    svgClosed.style.display = 'none';
    svgBurger.style.display = 'block';
})


window.onclick = function(event) {
    if (!event.target.matches('#jackdaw-svg')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");

      for (el of dropdowns) {
        if (el.classList.contains('show')) {
            el.classList.remove('show');
          }
      }
    }

    if (!event.target.matches('#svg-burger')) {
        let dropdowns = document.getElementsByClassName("navigation");
  
        for (el of dropdowns) {
          if (el.classList.contains('show')) {
              el.classList.remove('show');
              svgClosed.style.display = 'none';
              svgBurger.style.display = 'block';

              if(window.screen.width == 1534) {
                svgBurger.style.display = 'none';
              }
            }
        }
      }
};

const svgRedirect = document.getElementById("svg-redirect");

svgRedirect.addEventListener("click", () => {
    window.open('https://t.me/NewGameProject', '_blank');
});

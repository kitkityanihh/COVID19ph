$(document).ready(function () {
  $("ul.nav li a[href^='#']").click(function () {
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($(this).attr("href")).offset().top,
        },
        400
      );
  });
});

const api_urlP = "https://disease.sh/v3/covid-19/countries/PH";
async function getPH() {
  const response = await fetch(api_urlP);
  const dataP = await response.json();
  const {
    todayCases,
    todayDeaths,
    cases,
    deaths,
    recovered,
    tests,
    active,
    critical,
  } = dataP;

  document.getElementById("lat").textContent = todayDeaths.toLocaleString("en");
  document.getElementById("lon").textContent = todayCases.toLocaleString("en");
  document.getElementById("pcases").textContent = cases.toLocaleString("en");
  document.getElementById("pdeaths").textContent = deaths.toLocaleString("en");
  document.getElementById("precovered").textContent = recovered.toLocaleString(
    "en"
  );
  document.getElementById("pactive").textContent = active.toLocaleString("en");
  document.getElementById("pcritical").textContent = critical.toLocaleString(
    "en"
  );
  document.getElementById("ptests").textContent = tests.toLocaleString("en");
}
getPH();

const api_urlG = "https://disease.sh/v3/covid-19/all";
async function getG() {
  const response = await fetch(api_urlG);
  const dataG = await response.json();
  const {
    todayCases,
    todayDeaths,
    cases,
    deaths,
    recovered,
    tests,
    active,
    critical,
  } = dataG;

  document.getElementById(
    "gtodayDeaths"
  ).textContent = todayDeaths.toLocaleString("en");
  document.getElementById(
    "gtodayCases"
  ).textContent = todayCases.toLocaleString("en");
  document.getElementById("gcases").textContent = cases.toLocaleString("en");
  document.getElementById("gdeaths").textContent = deaths.toLocaleString("en");
  document.getElementById("grecovered").textContent = recovered.toLocaleString(
    "en"
  );
  document.getElementById("gactive").textContent = active.toLocaleString("en");
  document.getElementById("gcritical").textContent = critical.toLocaleString(
    "en"
  );
  document.getElementById("gtests").textContent = tests.toLocaleString("en");
}
getG();

var t1 = 0;
window.onscroll = scroll1;

function scroll1() {
  var toTop = document.getElementById("toTop");
  window.scrollY > 0
    ? (toTop.style.display = "Block")
    : (toTop.style.display = "none");
}

function abcd() {
  var y1 = window.scrollY;
  y1 = y1 - 1000;
  window.scrollTo(0, y1);
  if (y1 > 0) {
    t1 = setTimeout("abcd()", 100);
  } else {
    clearTimeout(t1);
  }
}

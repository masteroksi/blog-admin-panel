"use strict";

const filmInfo = {
    name: "Carnival Row",
    year: 2019,
    month: 8,
    day: 30,
    duration: "56 min",
    country: "USA",
    "18+": false,
    actors: [
        "Orlando Bloom",
        "Cara Delevingne",
        "Simon McBurney",
        "Tamzin Merchant",
        "David Gyasi",
        "Andrew Gower",
        "Karla Crome",
        "Arty Froushan",
        "Indira Varma",
        "Jared Harris",
    ],
    isWatched: false,
};

// const key = prompt("информация о фильме", "name");
//
// if (filmInfo[key]) {
//     alert(filmInfo[key]);
// } else {
//     alert("нет информации");
// }

const isWatch = confirm("понравился вам фильм?");
filmInfo.isWatched = isWatch;

if (filmInfo.isWatched) {
    alert("Красавчик!");
} else {
    alert("Ты много потерял! Посмотри.");
    location.href = "https://youtu.be/0znaRSAFXOM";
    // window.open("https://youtu.be/0znaRSAFXOM");
}

"use strict";

const filmInfo = {
    name: "Carnival Row",
    year: 2019,
    month: 8,
    day: 30,
    duration: "56 min",
    country: "USA",
    "18+": false,
    rating: 5, // 1 - 5; 0 - не известный рейтинг
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


const isWatch = confirm("понравился вам фильм?");
filmInfo.isWatched = isWatch;

if (filmInfo.isWatched) {
    alert("Красавчик!");
} else {
    alert("Ты много потерял! Посмотри.");
    // location.href = "https://youtu.be/0znaRSAFXOM";
}

function changeRating(rating) {
    const newRating = Number(rating);
    if (isNaN(newRating) || newRating > 5 || newRating < 1) {
        return;
    }

    filmInfo.rating = newRating;
}

const newRating = prompt(`Поставь рейтинг фильма ${filmInfo.name}`);
changeRating(newRating);

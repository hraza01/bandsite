"use strict";
import { addEvent, renderElement } from "./utils.js";

const shows = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA",
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA",
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA",
    },
];
const showContainer = document.querySelector(".shows__event-container");
renderElement(addEvent, showContainer, shows);

const eventElements = document.querySelectorAll(".shows__event");
let clickedShow = null;

function toggleOpen({ target }) {
    const show = target.closest(".shows__event");
    if (clickedShow) clickedShow.classList.remove("shows__event--selected");

    show.classList.add("shows__event--selected");
    clickedShow = show;
}

eventElements.forEach((show) => {
    show.addEventListener("click", toggleOpen);
});

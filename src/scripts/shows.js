"use strict";
import { formatShows, renderElement } from "./utils.js";
import { showsContainer } from "./constants.js";
import { displayEvent } from "./services.js";
import { makeRequest } from "./requests";

let clickedShow = null;
const shows = await makeRequest("showdates");
const sortedShows = formatShows(shows);
renderElement(displayEvent, showsContainer, sortedShows);

document.querySelectorAll(".shows__event").forEach((show) => {
    show.addEventListener("click", toggleOpen);
});

function toggleOpen({ target }) {
    const show = target.closest(".shows__event");
    if (clickedShow) clickedShow.classList.remove("shows__event--selected");

    show.classList.add("shows__event--selected");
    clickedShow = show;
}

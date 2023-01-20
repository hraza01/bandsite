"use strict";
import { formatShows, gtag, renderElement } from "./utils.js";
import { measurementId, showsContainer } from "./constants.js";
import { makeRequest } from "./requests.js";
import { displayEvent } from "./services.js";

function toggleOpen({ target }) {
    const show = target.closest(".shows__event");
    if (clickedShow) clickedShow.classList.remove("shows__event--selected");

    show.classList.add("shows__event--selected");
    clickedShow = show;
}

// Google Analytics Config - Please Ignore
window.dataLayer = window.dataLayer || [];
gtag("js", new Date());
gtag("config", measurementId);

let clickedShow = null;
const shows = await makeRequest("showdates");
const sortedShows = formatShows(shows);
renderElement(displayEvent, showsContainer, sortedShows);

document.querySelectorAll(".shows__event").forEach((show) => {
    show.addEventListener("click", toggleOpen);
});

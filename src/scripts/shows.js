"use strict";
import { displayEvent } from "./services.js";
import { showsContainer } from "./constants.js";
import { renderElement } from "./utils.js";
import { shows } from "./data.js";

let clickedShow = null;

function toggleOpen({ target }) {
    const show = target.closest(".shows__event");
    if (clickedShow) clickedShow.classList.remove("shows__event--selected");

    show.classList.add("shows__event--selected");
    clickedShow = show;
}

renderElement(displayEvent, showsContainer, shows);

document.querySelectorAll(".shows__event").forEach((show) => {
    show.addEventListener("click", toggleOpen);
});

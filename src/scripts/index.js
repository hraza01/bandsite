"use strict";
import { addComment, getDynamicDate, renderElement } from "./utils.js";

let comments = [
    {
        name: "Connor Walton",
        timestamp: "02/17/2021",
        value: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {
        name: "Emilie Beach",
        timestamp: "01/09/2021",
        value: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
        name: "Miles Acosta",
        timestamp: "12/20/2020",
        value: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    },
];

const commentContainer = document.querySelector(".cta__comment-container");
const formElement = document.querySelector(".cta__form");

renderElement(addComment, commentContainer, comments);

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = event.target.name.value;
    let comment = event.target.comment.value;
    let timestamp = moment().format("MM/DD/YYYY, h:mm:ss a");
    let newComment = {
        name: name,
        timestamp: timestamp,
        value: comment,
    };

    comments.unshift(newComment);
    commentContainer.innerHTML = "";
    
    let newComments = JSON.parse(JSON.stringify(comments));

    newComments.forEach((element, index, array) => {
        if (index < array.length - 3) {
            element.timestamp = getDynamicDate(element.timestamp);
        }
    });

    renderElement(addComment, commentContainer, newComments);

    event.target.reset();
});

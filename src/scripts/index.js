"use strict";
import { displayComment, getDynamicDate, renderElement } from "./utils.js";
import {
    commentContainer,
    commentValidator,
    errorMessage,
    formElement,
    nameValidator,
} from "./constants.js";

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

formElement.addEventListener("submit", (event) => {
    let name = event.target.name.value;
    let comment = event.target.comment.value;
    let valid = nameValidator.test(name) && commentValidator.test(comment);

    if (valid && name.length > 3 && comment.length > 3) {
        const newComment = {
            name: name,
            timestamp: moment(),
            value: comment,
        };

        comments.unshift(newComment);

        // deep copy of the comments object
        let newComments = JSON.parse(JSON.stringify(comments));

        newComments.forEach((element, index, array) => {
            if (index < array.length - 3) {
                element.timestamp = getDynamicDate(element.timestamp);
            }
        });

        errorMessage.innerText = "";
        commentContainer.innerHTML = "";
        renderElement(displayComment, commentContainer, newComments);
    } else {
        errorMessage.innerText = "Invalid Name and/or Comment";
    }

    event.preventDefault();
    event.target.reset();
});

renderElement(displayComment, commentContainer, comments);

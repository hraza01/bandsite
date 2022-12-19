"use strict";
import { displayComment } from "./services.js";
import { getDynamicDate, renderElement } from "./utils.js";
import { comments } from "./data.js";
import {
    commentContainer,
    commentValidator,
    errorContainer,
    errorMessage,
    formElement,
    nameValidator,
} from "./constants.js";

formElement.addEventListener("submit", (event) => {
    let name = event.target.name.value;
    let comment = event.target.comment.value;
    let valid = nameValidator.test(name) && commentValidator.test(comment);

    if (valid && name.length > 3 && comment.length > 3) {
        const newComment = {
            name: name,
            timestamp: moment(), // imported via CDN (moment.js)
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
        errorContainer.style.display = "none";
        commentContainer.innerHTML = "";
        renderElement(displayComment, commentContainer, newComments);
    } else {
        errorContainer.style.display = "block";
        errorMessage.innerText = "Error: Invalid Name and/or Comment";
    }

    event.preventDefault();
    event.target.reset();
});

renderElement(displayComment, commentContainer, comments);

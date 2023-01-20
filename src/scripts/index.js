"use strict";
import { makeRequest } from "./requests.js";
import { displayComment, displayError } from "./services.js";
import { formatComments, gtag, renderElement } from "./utils.js";
import {
    commentContainer,
    commentValidator,
    errorContainer,
    formElement,
    measurementId,
    nameValidator,
} from "./constants.js";

function newCommentHandler(event) {
    const name = event.target.name.value;
    const comment = event.target.comment.value;
    const valid =
        nameValidator.test(name) &&
        commentValidator.test(comment) &&
        name.length >= 3 &&
        comment.length >= 3;

    if (!valid) {
        displayError();
    } else {
        const json = JSON.stringify({ name, comment });
        const postComment = makeRequest("comments", "POST", json);

        postComment
            .then((res) => {
                errorContainer.style.display = "none";
                res.timestamp = moment(res.timestamp).fromNow();
                const newComment = displayComment(res);

                commentContainer.querySelector(".placeholder")?.remove();
                commentContainer.prepend(newComment);
            })
            .catch((err) => console.error(err.message));
    }

    event.preventDefault();
    event.target.reset();
}

// Google Analytics Config - Please Ignore
window.dataLayer = window.dataLayer || [];
gtag("js", new Date());
gtag("config", measurementId);

const comments = await makeRequest("comments");
const sortedComments = formatComments(comments);
renderElement(displayComment, commentContainer, sortedComments);

formElement.addEventListener("submit", newCommentHandler);

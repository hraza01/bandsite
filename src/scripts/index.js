"use strict";
import { makeRequest } from "./requests.js";
import { displayComment, displayError } from "./services.js";
import { formatComments, renderElement } from "./utils.js";
import {
    commentContainer,
    commentValidator,
    errorContainer,
    formElement,
    nameValidator,
} from "./constants.js";

const comments = await makeRequest("comments");
const sortedComments = formatComments(comments);
renderElement(displayComment, commentContainer, sortedComments);

formElement.addEventListener("submit", newCommentHandler);

function newCommentHandler(event) {
    let name = event.target.name.value;
    let comment = event.target.comment.value;
    let valid =
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
                comments.unshift(res);
                const sortedComments = formatComments(comments);
                errorContainer.style.display = "none";
                renderElement(displayComment, commentContainer, sortedComments);
            })
            .catch((err) => console.error(err.message));
    }

    event.preventDefault();
    event.target.reset();
}

"use strict";
import { createHTMLElement, displayPlaceholder } from "./utils.js";
import { commentContainer, errorContainer, errorMessage } from "./constants.js";
import { makeRequest } from "./requests.js";

function displayError() {
    errorContainer.style.display = "block";
    errorMessage.innerText = "Error: Invalid Name and/or Comment";
}

function commentLikeHandler(event) {
    const likedComment = event.target.closest(".cta__comment-description");
    const likedCount = likedComment.querySelector(".cta__comment-like-count");
    const commentId = likedComment.dataset.commentId;

    makeRequest(`comments/${commentId}/like`, "PUT", null, null)
        .then((res) => {
            likedCount.innerText = `${res.likes} Likes`;
        })
        .catch((err) => console.error(err.message));
}

function commentDeleteHandler(event) {
    const clickedComment = event.target.closest(".cta__comment-description");
    const commentId = clickedComment.dataset.commentId;

    makeRequest(`comments/${commentId}`, "DELETE", null, null)
        .then(() => {
            if (commentContainer.children.length > 1) {
                clickedComment.parentElement.remove();
            } else {
                clickedComment.parentElement.remove();
                commentContainer.append(displayPlaceholder());
            }
        })
        .catch((err) => console.error(err.message));
}

function displayComment(comment) {
    // create elements needed for a comment
    const commentAvatar = createHTMLElement("div", "cta__comment-avatar");
    const commentName = createHTMLElement(
        "h4",
        "cta__comment-name",
        comment.name
    );
    const commentTimestamp = createHTMLElement(
        "time",
        "cta__comment-time",
        comment.timestamp
    );
    const commentValue = createHTMLElement(
        "p",
        "cta__comment-text",
        comment.comment
    );
    const commentDescription = createHTMLElement(
        "div",
        "cta__comment-description"
    );

    const commentInteractivity = createHTMLElement(
        "div",
        "cta__comment-interactivity"
    );

    const commentLikeCount = createHTMLElement(
        "p",
        "cta__comment-like-count",
        `${comment.likes} Likes`
    );

    const commentLikeBtn = createHTMLElement("a", "cta__comment-like");
    commentLikeBtn.addEventListener("click", commentLikeHandler);
    commentLikeBtn.innerHTML =
        '<ion-icon class="cta__comment-like" name="thumbs-up-outline"></ion-icon>';

    const commentDelBtn = createHTMLElement("a", "cta__comment-delete");
    commentDelBtn.addEventListener("click", commentDeleteHandler);
    commentDelBtn.innerHTML =
        '<ion-icon class="cta__comment-delete" name="trash-outline"></ion-icon>';

    const commentBox = createHTMLElement("div", "cta__comment");
    commentDescription.dataset.commentId = comment.id;

    commentInteractivity.append(commentLikeBtn, commentDelBtn);
    commentDescription.append(
        commentName,
        commentTimestamp,
        commentValue,
        commentLikeCount,
        commentInteractivity
    );
    commentBox.append(commentAvatar, commentDescription);

    return commentBox;
}

function displayEvent(event) {
    // create elements needed for a show
    const eventDateLabel = createHTMLElement("p", "shows__event-label", "date");
    const eventLocationLabel = createHTMLElement(
        "p",
        "shows__event-label",
        "location"
    );
    const eventVenueLabel = createHTMLElement(
        "p",
        "shows__event-label",
        "venue"
    );
    const eventDate = createHTMLElement("p", "shows__event-date", event.date);
    const eventVenue = createHTMLElement(
        "p",
        "shows__event-venue",
        event.place
    );
    const eventLocation = createHTMLElement(
        "p",
        "shows__event-location",
        event.location
    );
    const eventBtn = createHTMLElement("button", "shows__btn", "buy tickets");
    const eventBox = createHTMLElement("div", "shows__event");

    eventBox.append(
        eventDateLabel,
        eventDate,
        eventVenueLabel,
        eventVenue,
        eventLocationLabel,
        eventLocation,
        eventBtn
    );

    return eventBox;
}

export { displayComment, displayEvent, displayError };

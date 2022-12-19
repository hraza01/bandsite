"use strict";
import { createHTMLElement } from "./utils.js";

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
        comment.value
    );
    const commentDescription = createHTMLElement(
        "div",
        "cta__comment-description"
    );
    const commentBox = createHTMLElement("div", "cta__comment");

    commentDescription.append(commentName, commentTimestamp, commentValue);
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
        event.venue
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

export { displayComment, displayEvent };

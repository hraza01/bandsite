"use strict";

function renderElement(callback, container, array) {
    try {
        if (array.length > 0) {
            array.forEach((item) => {
                container.append(callback(item));
            });
        } else {
            container.append(addPlaceholder());
        }
    } catch (error) {
        console.error(error.message);
    }
}

function displayComment(comment) {
    // create elements needed for a comment
    const commentBox = document.createElement("article");
    const commentAvatar = document.createElement("div");
    const commentDescription = document.createElement("div");
    const commentName = document.createElement("h4");
    const commentTimestamp = document.createElement("time");
    const commentValue = document.createElement("p");

    // add pre-defined styles for the created elements
    commentBox.classList.add("cta__comment");
    commentAvatar.classList.add("cta__comment-avatar");
    commentDescription.classList.add("cta__comment-description");
    commentName.classList.add("cta__comment-name");
    commentTimestamp.classList.add("cta__comment-time");
    commentValue.classList.add("cta__comment-text");

    // assign comment values
    commentName.textContent = comment.name;
    commentTimestamp.textContent = comment.timestamp;
    commentValue.textContent = comment.value;

    // fit elements into their respective divs
    commentDescription.append(commentName, commentTimestamp, commentValue);
    commentBox.append(commentAvatar, commentDescription);

    return commentBox;
}

function displayEvent(event) {
    // create elements needed for a show
    const eventBox = document.createElement("div");
    const eventDateLabel = document.createElement("p");
    const eventDate = document.createElement("p");
    const eventVenueLabel = document.createElement("p");
    const eventVenue = document.createElement("p");
    const eventLocationLabel = document.createElement("p");
    const eventLocation = document.createElement("p");
    const eventBtn = document.createElement("button");

    const labels = [eventDateLabel, eventVenueLabel, eventLocationLabel];

    // add pre-defined styles for the created elements
    labels.forEach((label) => {
        label.classList.add("shows__event-label");
    });

    eventBox.classList.add("shows__event");
    eventDate.classList.add("shows__event-date");
    eventVenue.classList.add("shows__event-venue");
    eventLocation.classList.add("shows__event-location");
    eventBtn.classList.add("shows__btn");

    // assign show values
    eventDateLabel.textContent = "date";
    eventVenueLabel.textContent = "venue";
    eventLocationLabel.textContent = "location";
    eventDate.textContent = event.date;
    eventVenue.textContent = event.venue;
    eventLocation.textContent = event.location;
    eventBtn.textContent = "buy tickets";

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

function addPlaceholder() {
    const placeholderContainer = document.createElement("div");
    const placeholder = document.createElement("p");

    placeholderContainer.classList.add("cta__comment-description");
    placeholder.classList.add("shows__event-venue");
    placeholder.textContent = "No items yet";
    placeholderContainer.append(placeholder);

    return placeholderContainer;
}

function getDynamicDate(date) {
    return moment(date).fromNow();
}

export {
    renderElement,
    displayComment,
    displayEvent,
    addPlaceholder,
    getDynamicDate,
};

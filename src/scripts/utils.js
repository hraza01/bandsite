function createHTMLElement(element, className, text = null) {
    const newElement = document.createElement(element);
    if (text) newElement.innerText = text;
    newElement.classList.add(className);
    return newElement;
}

function displayPlaceholder() {
    const placeholder = createHTMLElement(
        "p",
        "shows__event-venue",
        "No items yet"
    );
    const placeholderContainer = createHTMLElement(
        "div",
        "cta__comment-description"
    );

    placeholderContainer.append(placeholder);

    return placeholderContainer;
}

function renderElement(callback, container, array) {
    try {
        if (array.length > 0) {
            container.innerHTML = "";
            array.forEach((item) => {
                container.append(callback(item));
            });
        } else {
            container.append(displayPlaceholder());
        }
    } catch (error) {
        console.error(error.message);
    }
}

function formatComments(comments) {
    return (
        comments
            .sort((a, b) => b.timestamp - a.timestamp)
            // dynamic timestamp for new comments
            .map((comment, index, array) => {
                if (index < array.length - 3) {
                    return {
                        ...comment,
                        timestamp: moment(comment.timestamp).fromNow(),
                    };
                } else {
                    return {
                        ...comment,
                        timestamp: moment(comment.timestamp).format(
                            "MM/DD/YYYY"
                        ),
                    };
                }
            })
    );
}

function formatShows(shows) {
    return shows
        .sort((a, b) => a.date - b.date)
        .map((show) => {
            return {
                ...show,
                date: moment(show.date).format("ddd MMM DD YYYY"),
            };
        });
}

// Google Analytics Tag Handle
function gtag() {
    dataLayer.push(arguments);
}

export {
    displayPlaceholder,
    createHTMLElement,
    renderElement,
    formatComments,
    formatShows,
    gtag,
};

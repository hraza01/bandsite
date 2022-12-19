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

    return placeholderContainer.append(placeholder);
}

function renderElement(callback, container, array) {
    try {
        if (array.length > 0) {
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

function getDynamicDate(date) {
    return moment(date).fromNow();
}

export { displayPlaceholder, createHTMLElement, renderElement, getDynamicDate };

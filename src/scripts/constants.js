// static components
const commentContainer = document.querySelector(".cta__comment-container");
const formElement = document.querySelector(".cta__form");
const showsContainer = document.querySelector(".shows__event-container");
const errorMessage = document.querySelector(".cta__error-message");
const nameValidator = new RegExp(/^(?![\s.]+$)[a-zA-Z\s.]*$/);
const commentValidator = new RegExp(/^(?![\s.]*$).{3,}$/);

export {
    commentContainer,
    formElement,
    showsContainer,
    nameValidator,
    commentValidator,
    errorMessage,
};

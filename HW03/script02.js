const productsEl = document.querySelector(".products-list");
const reviewsEl = document.querySelector(".review-list");

const productsData = JSON.parse(localStorage.getItem("reviews"));

function createReview(review) {
    const reviewEl = document.createElement("li");
    const deleteButton = document.createElement("button");

    deleteButton.setAttribute("class", "delete-button");
    deleteButton.textContent = "Delete";

    reviewEl.setAttribute("id", review.id);
    reviewEl.textContent = review.reviewText;

    const idSplit = review.id.split("-");
    const id = idSplit[1];
    const name = idSplit[0];

    deleteButton.addEventListener("click", () => {
        deleteReview(review.id, name);
        reviewEl.remove();
    });
    reviewEl.append(deleteButton);
    return reviewEl;
}

function deleteReview(reviewId, name) {
    productsData.forEach((product, productIndex) => {
        if (product.productName === name) {
            const reviewIndex = product.reviews.findIndex(
                (r) => r.id === reviewId
            );
            if (reviewIndex !== -1) {
                product.reviews.splice(reviewIndex, 1); // Remove the review
            }
            if (product.reviews.length < 1) {
                productsData.splice(productIndex, 1); // Remove the product if no reviews are left
            }
        }
    });

    localStorage.setItem("reviews", JSON.stringify(productsData));
    productsEl.innerHTML = "";
    productsData.forEach((product) => {
        const productEl = document.createElement("li");
        productEl.innerHTML = product.productName;
        productsEl.append(productEl);
    });
}

function loadReviews() {
    const nameList = productsEl.querySelectorAll("li");

    nameList.forEach((name) => {
        name.addEventListener("click", () => {
            reviewsEl.innerHTML = "";
            const reviewList = productsData.find(
                (p) => p.productName === name.textContent
            );
            reviewList.reviews.forEach((review) => {
                reviewsEl.append(createReview(review));
            });
        });
    });
}

function initiateProducts() {
    productsEl.innerHTML = "";
    productsData.forEach((product) => {
        const productEl = document.createElement("li");
        productEl.innerHTML = product.productName;
        productsEl.append(productEl);
    });

    loadReviews();
}

initiateProducts();

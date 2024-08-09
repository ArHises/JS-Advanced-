const reviewForm = document.getElementById("review-form");

reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const productName = document.getElementById("productName").value;
    const reviewText = document.getElementById("reviewText").value;

    if (!productName || !reviewText) {
        alert("Please fill in both product name and review text.");
    } else {
        const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

        const review = reviews.find((r) => r.productName === productName);
        if (review) {
            review.reviews.push({
                reviewText: reviewText,
                id: `${productName}-${Math.floor(Math.random() * 10000)}`,
            });
        } else {
            const newReview = {
                productName: productName,
                reviews: [
                    {
                        reviewText: reviewText,
                        id: `${productName}-${Math.floor(
                            Math.random() * 10000
                        )}`,
                    },
                ],
            };
            reviews.push(newReview);
        }
        localStorage.setItem("reviews", JSON.stringify(reviews));
        reviewForm.reset();
    }
});

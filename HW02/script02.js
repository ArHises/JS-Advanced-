const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

const container = document.querySelector(".container");

function createNode(product) {
    let html = `<div class="product">`;
    html += `<h2>${product.product}</h2>
            <form>
                <input type="text" placeholder="comment" id="comment" />
                <button type="submit">Submit</button>
            </form>`;
    html += `<p>Reviews:</p>`;
    html += `<ul>`;
    product.reviews.forEach((review) => {
        html += `<li>${review.text}</li>`;
    });
    html += `</ul>`;
    html += `</div>`;
    return html;
}

function linkButtons() {
    const forms = document.querySelectorAll("form");
    forms.forEach((form) => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const comment = form.querySelector("#comment").value;
            if (comment.length < 50 || comment.length > 500) {
                alert("Comment should be between 5 and 50 characters long.");
            } else {
                const product = form
                    .closest(".product")
                    .querySelector("h2").textContent;
                const newReview = {
                    id: "user",
                    text: comment,
                };
                initialData
                    .find((productData) => productData.product === product)
                    .reviews.push(newReview);

                initiateData(initialData);
                form.querySelector("#comment").value = "";
            }
        });
    });
}

function initiateData(products) {
    container.innerHTML = "";
    products.forEach((product) => {
        container.innerHTML += createNode(product);
    });

    linkButtons();

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        input.addEventListener("input", function () {
            this.style.width = (this.value.length + 1) * 8 + "px";
        });
    });
}

initiateData(initialData);

// Q6 – E-Commerce Dashboard: Product Card Fetcher
// Open index.html in a browser to see product cards.
// This file uses the Fake Store API and updates the page dynamically.

async function loadProducts() {
    const productContainer = document.getElementById("product-container");
    const errorMessage = document.getElementById("error-message");

    try {
        productContainer.textContent = "Loading products...";
        errorMessage.textContent = "";

        const response = await fetch("https://fakestoreapi.com/products");

        // fetch() does not reject for HTTP error status codes, so check response.ok.
        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        const products = await response.json();
        productContainer.innerHTML = "";

        products.forEach((product) => {
            const card = document.createElement("article");
            card.className = "product-card";

            const image = document.createElement("img");
            image.src = product.image;
            image.alt = product.title;

            const title = document.createElement("h3");
            title.textContent = product.title;

            const price = document.createElement("p");
            price.textContent = "Price: $" + product.price.toFixed(2);

            const imageUrl = document.createElement("p");
            imageUrl.className = "image-url";
            imageUrl.textContent = "Image: " + product.image;

            card.append(image, title, price, imageUrl);
            productContainer.appendChild(card);

            // Also print the requested details in the browser console.
            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image:", product.image);
        });
    } catch (error) {
        console.error("Failed to load products:", error);
        productContainer.innerHTML = "";
        errorMessage.textContent = "Failed to load products. Please try again.";
    }
}

document.addEventListener("DOMContentLoaded", loadProducts);

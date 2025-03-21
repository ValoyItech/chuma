document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("searchBox");
    const categoryFilter = document.getElementById("categoryFilter");

    // Display all products initially
    displayProducts(products);

    // Event listeners for search and filtering
    searchBox.addEventListener("input", filterProducts);
    categoryFilter.addEventListener("change", filterProducts);

    function filterProducts() {
        const searchText = searchBox.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        const filtered = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchText) ||
                                  product.description.toLowerCase().includes(searchText);
            const matchesCategory = selectedCategory === "" || product.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        displayProducts(filtered);
    }

    function displayProducts(productList) {
        const productListDiv = document.getElementById("productList");
        productListDiv.innerHTML = productList.length
            ? productList.map(product =>
                `<div class="product">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p><strong>Category:</strong> ${product.category}</p>
                    <p><strong>Subcategory:</strong> ${product.subcategory}</p>
                    <p><strong>Description:</strong> ${product.description}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                </div>`
              ).join("")
            : "<p>No products found.</p>";
    }
});

const products = [
    { name: "Phone", category: "electronics" },
    { name: "Laptop", category: "electronics" },
    { name: "Shirt", category: "clothing" },
    { name: "Jeans", category: "clothing" }
];

function displayProducts(list) {
    const container = document.getElementById("products");
    container.innerHTML = "";

    list.forEach(p => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `<h4>${p.name}</h4><p>${p.category}</p>`;
        container.appendChild(div);
    });
}

function filterProducts() {
    const value = document.getElementById("filter").value;

    if (value === "all") {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === value);
        displayProducts(filtered);
    }
}

// show all products initially
displayProducts(products);
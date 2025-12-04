// snacks.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("./json/snacks.json") // JSON ֆայլի անունը
    .then(response => response.json())
    .then(data => {
      renderProducts("snacks-grid", data["Խորտիկներ"]); // JSON-ում հիմնական բանալին
    })
    .catch(error => console.error("Error loading JSON:", error));
});

function renderProducts(containerId, products) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // մաքրում նախկինը

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>${product.price} AMD</strong></p>
    `;

    container.appendChild(card);
  });
}

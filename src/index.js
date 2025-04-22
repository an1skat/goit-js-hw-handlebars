import { products } from "../data.js";
import Handlebars from "handlebars";
import templateString from "./template.js";

const template = Handlebars.compile(templateString);
const container = document.getElementById("product-container");

function renderProducts(data) {
  container.innerHTML = template(data);
}

renderProducts(products);

const searchInput = document.getElementById("search");
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(value)
  );
  renderProducts(filtered);
});

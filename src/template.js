const templateString = `
<ul class="product-list">
  {{#each this}}
    <li class="product-item">
      <h2 class="name">{{name}}</h2>
      <p class="price">Price: {{price}}</p>
      <p class="description">{{description}}</p>
    </li>
  {{/each}}
</ul>
`;

export default templateString;

class Products {
  constructor(products) {
    this.products = products;
  }

  getProductTemplate ({ id, title, price, imageSrc }) {
    return `
      <div id="${id}" class="col-sm-6 col-lg-4">
        <div class="card shadow">
          <img
            src="${imageSrc}"
            class="card-img-top"
            alt="${title}"
          />
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="fw-bold fs-5 mb-0">$ ${price}</p>
            <div class="d-flex align-items-center mb-2 gap-2">
              <span>Cantidad: </span>
              <button type="button" class="btn btn-outline-primary btn-sm">
                <i class="bi bi-dash-circle"></i>
              </button>
              <span class="fw-bold">0</span>
              <button type="button" class="btn btn-outline-primary btn-sm">
                <i class="bi bi-plus-circle"></i>
              </button>
            </div>
            <button type="button" class="btn btn-primary w-100">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    `
  }

  renderProducts() {
    const productsContainer = document.getElementById("products-container");

    this.products.forEach((product) => {
      productsContainer.innerHTML += this.getProductTemplate(product);
    });
  }
}

export default Products;

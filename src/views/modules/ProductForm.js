const ProductForm = () => {
    return `
        <div class="product__form">
            <div class="product__form--item">
                <h3>Product name</h3>
                <input type="text" placeholder="Adidas Ultra boost" />
            </div>

            <div class="product__form--item">
                <h3>Description</h3>
                <textarea name="">Long distance running requires a lot from athletes.</textarea>
            </div>

            <div class="product__form--item">
                <h3>Category</h3>
                <input type="text" placeholder="Sneaker" />
            </div>

            <div class="product__form--item">
                <h3>Brand Name</h3>
                <input type="text" placeholder="Addidas" />
            </div>

            <div class="product__form--row">
                <div class="product__form--item">
                    <h3>SKU</h3>
                    <input type="text" placeholder="#32A53" />
                </div>
                <div class="product__form--item">
                    <h3>Stock Quantity</h3>
                    <input type="text" placeholder="21" />
                </div>
            </div>
            <div class="product__form--row">
                <div class="product__form--item">
                    <h3>Regular Price</h3>
                    <input type="text" placeholder="$110.40" />
                </div>
                <div class="product__form--item">
                    <h3>Sale Price</h3>
                    <input type="text" placeholder="$450" />
                </div>
            </div>

            <div class="product__form--item">
                <h3>Tag</h3>
                <div class="product--btn">
                    <button><a href="">Adidas</a></button>
                    <button><a href="">Shoes</a></button>
                    <button><a href="">Sneakers</a></button>
                    <button><a href="">Ultraboost</a></button>
                </div>
            </div>
      </div>
    `;
}

export default ProductForm
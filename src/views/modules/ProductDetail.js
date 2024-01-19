import ProductForm from "./ProductForm";
import ProductImage from "./ProductImage";
import ProductAction from "./ProductAction";

const ProductDetail = () => {
    return `
        <div class="product--all">
            <div class = "product">
                ${ProductForm()}
                <div class="product-right">
                    ${ProductImage()}
                    ${ProductAction()}
                </div>
            </div>
        </div>
    `;
}

export default ProductDetail
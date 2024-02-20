const ProductHeader = () => {
  return `
     <div class="table__header">
        <h2>Product list</h2>
        <p>Home > Product List</p>

        <div class="table__header--btn">
          <select name="" id="">
            <option value="">Change Status</option>
            <option value="checkStock">Stock</option>
            <option value="checkSoldout">Sold out</option>
          </select>
        </div>
    </div>
  `;
}

export default ProductHeader
const TableRow = (row) => {
  console.log(row);
  return `
    <tr class="product-row">
      <td>
        <input type="checkbox" id="checkbox-${row.id}" class="product-checkbox"  />
      </td>
      <td>${row.name}</td>
      <td>${row.id}</td>
      <td>${row.amount}</td>
      <td>${row.category}</td>
      
      <td class="row">
        <img src="${row.image}" alt="" />
        <p>${row.brand}</p>
      </td>
      <td>
        <div
          <div class="stock-wrapper">
          <span class="${row.status ? 'stock' : 'sold-out'}"></span>
          <p>${row.status ? 'Stock' : 'Sold out' }</p>
          </div>
        </div>
      </td>
      <td>${row.price}</td>
    </tr>
  `;
}

const TableBody = (products = []) =>{
  return `
    ${products.map(product => TableRow(product)).join('')}
  `
}

export default TableBody
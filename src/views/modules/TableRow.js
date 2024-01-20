const TableRow = (row) => {
  return `
    <tbody>
      <tr><input type="checkbox"></tr>
      <tr>${row.name}</tr>
      <tr>${row.sku_id}</tr>
      <tr>${row.quantity}</tr>
      <tr>${row.category}</tr>
      <tr>${row.brand}</tr>
      <tr>${row.status}</tr>
      <tr>${row.price}</tr>
    </tbody>
  `;
}

const TableBody = (products) =>{
  return `
    ${products.map(product => TableRow(product))}
  `
}

export default TableBody
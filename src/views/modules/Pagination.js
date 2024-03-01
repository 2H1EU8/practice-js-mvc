// const Pagination = () => {
//     return `
//       <div class="pagination">
//         <button id="current">1</button>
//         <button  class="hide">2</button>
//         <button class="hide">3</button>
//         <button class="hide">4</button>
//         <button  class="hide">...</button>
//         <button  class="hide">10</button>
//         <button id= "next">
//             <p>NEXT</p>
//             <img src = "/chevron_forward.c5f0065d.svg"  alt="" />
//         </button>
//       </div>
//     `;
// }

// export default Pagination
const Pagination = () => {
  const totalButtons = 10;
  const currentButton = 1;

  let paginationHTML = '<div class="pagination">';
  paginationHTML += `<button id="current" class="pagination-btn">${currentButton}</button>`;
  
  for (let i = 2; i <= totalButtons; i++) {
    paginationHTML += `<button class="hide pagination-btn">${i}</button>`;
  }

  paginationHTML += `
    <button id="next" class="pagination-btn">
        <p>NEXT</p>
        <img src="/chevron_forward.c5f0065d.svg" alt="" />
    </button>
  </div>`;

  return paginationHTML;
}

export default Pagination;

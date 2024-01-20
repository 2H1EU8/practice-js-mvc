const Pagination = () => {
    return `
      <div class="pagination">
        <button id="current">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>...</button>
        <button>10</button>
        <button id= "next">
            <p>NEXT</p>
            <img src = "/chevron_forward.c5f0065d.svg"  alt="" />
        </button>
      </div>
    `;
}

export default Pagination
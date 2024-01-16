const SideBar = () => {
    return `
    <section class="sidebar">
        <figure class="sidebar__logo">
          <img src="/logo.3e864662.svg" alt="" />
        </figure>

        <div class="sidebar__menu">
          <div class="sidebar__menu--item">
            <img src="/dashboaard.6c717686.svg" alt="" />
            <p>dashboard</p>
          </div>
          <div class="sidebar__menu--item">
            <img src="/all-products.897c51a3.svg" alt="" />
            <p>all products</p>
          </div>
          <div id="item" class="sidebar__menu--item">
            <img src="/product-list.7f703628.svg" alt="" />
            <p id="para">product list</p>
          </div>
        </div>

        <div class="sidebar__category">
          <h2>Categories</h2>
          <img src="/chevron_down-big.30530540.svg" alt="" />
        </div>
      </section>
    `
}

export default SideBar

export default function HeaderPrimary() {
  return (
    <section className="header-primary">
      <div className="header-primary-inner container d-lg-none">
        <div className="header-bars">
          <ul>
            <li>
              <a href="https://x.ro" title="Nav bar">
                <i className="fa-solid fa-bars"></i>
              </a>
            </li>
          </ul>
        </div>

        <form className="header-search">
          <input type="search" name="Search" id="Search" placeholder="search" />

          <button For="Search" className="icon-search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>

      <section className="banner-main d-block d-lg-none">
        <a href="https://x.ro" title="new in">
          <button className="button-main-secondary">new in</button>
        </a>
      </section>

      <section className="header-primary-nav container d-none d-lg-block">
        <ul>
          <li>
            <a href="https://x.ro">New Arrivals</a>
          </li>

          <li>
            <a href="https://x.ro">Brands</a>
          </li>

          <li>
            <a href="https://x.ro">Men s</a>
          </li>

          <li>
            <a href="https://x.ro">Women s</a>
          </li>

          <li>
            <a href="https://x.ro">Accesories</a>
          </li>

          <li>
            <a href="https://x.ro">Lookbook</a>
          </li>
        </ul>
      </section>
    </section>
  );
}

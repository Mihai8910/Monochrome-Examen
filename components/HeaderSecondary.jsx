export default function HeaderSecondary() {
  return (
    <section className="header-secondary ">
      <section className="header-secondary-inner container">
        <div className="header-title d-lg-none">
          <h1>Monochrome</h1>
        </div>

        <div className="header-connect d-none d-lg-block">
          <ul className="social-media">
            <li>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                title="folow monochrome on social media"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>

            <li>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                title="follow monochrome on social media"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>

            <li>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                title="follow monochrome on social media"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>

            <li>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                title="follow monochrome on social media"
              >
                <i className="fa-brands fa-instagram-square"></i>
              </a>
            </li>

            <li>
              <a href="tel:+44(0)10 2345 6789" title="phone number">
                Call Us +44(0)10 2345 6789
              </a>
            </li>
          </ul>
        </div>

        <div className="header-controls d-lg-flex">
          <form className="header-secondary-search d-none d-lg-block">
            <input
              type="search"
              name="Search"
              id="Search"
              placeholder="Search"
            />

            <label For="Search" className="icon-search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </label>
          </form>

          <ul>
            <li>
              <a href="https://x.ro" title="My Account">
                <i className="fa-solid fa-user"></i>
              </a>
            </li>

            <li>
              <a href="https://x.ro" title="Favorite">
                <i className="fa-solid fa-heart"></i>
              </a>
            </li>

            <li>
              <a href="https://x.ro" title="Cart">
                <i className="fa-solid fa-bag-shopping"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}

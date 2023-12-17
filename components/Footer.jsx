export default function Footer() {
  return (
    <footer className="footer mt-27px">
      <div className="footer-inner container">
        <section className="footer-connect">
          <form className="footer-newsletter">
            <h1>Let s connect</h1>

            <label For="subscribe" className="d-none">
              Be the first to receive exclusives offers
            </label>

            <label For=" subscribe" className="d-none d-lg-block ">
              sing up for our newssleter
            </label>

            <input
              type="email"
              name="subscribe"
              id="subscribe"
              placeholder="Email"
              required
            />

            <button type="submit" name="subscribe" id="submit">
              Submit
            </button>

            <p className="privacy-required">
              I agree with <a href="https://x.ro">Privacy Policy</a> and i want
              to receive emails from Monochrome
            </p>
          </form>

          <section className="footer-social">
            <h1>We are highly likeable</h1>
            <div className="footer-media">
              <ul>
                <li>
                  <a href="https://x.ro" title=" social media">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>

                <li>
                  <a href="https://x.ro" title=" social media">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="https://x.ro" title=" social media">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>

                <li>
                  <a href="https://x.ro" title=" social media">
                    <i className="fa-brands fa-instagram-square"></i>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </section>

        <section className="footer-nav">
          {/* <!-- ul intors in flex --> */}
          <h1>How can wee help?</h1>
          <div className="footer-nav-contact">
            <ul>
              <li>
                <a href="https://x.ro">about us</a>
              </li>

              <li>
                <a href="https://x.ro">careers</a>
              </li>

              <li>
                <a href="https://x.ro">affiliates</a>
              </li>

              <li>
                <a href="https://x.ro">advertising</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="https://x.ro">style and fit</a>
              </li>

              <li>
                <a href="https://x.ro">faqs</a>
              </li>

              <li>
                <a href="https://x.ro">delivery</a>
              </li>

              <li>
                <a href="https://x.ro">returns</a>
              </li>
            </ul>

            <ul className="d-none d-lg-block">
              <li>call us</li>

              <li>
                <a href="tel:+44 (0)10 2345 6789">+44 (0)10 2345 6789</a>
              </li>

              <li>
                <a href="mailto:">email customer care</a>
              </li>
            </ul>
          </div>

          <div className="terms d-block d-lg-none">
            <ul>
              <li>
                <a href="https://x.ro" title="terms">
                  terms and conditions
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="privacy">
                  privacy and cookies
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
}

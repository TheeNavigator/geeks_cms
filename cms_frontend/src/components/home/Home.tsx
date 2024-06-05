import "./Home.css";

const Home = () => {
  return (
    <footer id="page-footer">
      <div className="footer-dark-inner">
        <div className="footer-section p-3">
          <div className="row">
            <div className="col-md-4 column-left">
              <div className="contact">
                <h3>Contact us</h3>
                <ul>
                  <li>
                    <div className="contact-box">
                      <a href="www.geeks4learning.com" target="_blank">
                        <i className="bi bi-globe"></i>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="contact-box">
                      <a href="tel:0119981960" target="_blank">
                        <i className="bi bi-telephone"></i>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="contact-box">
                      <a
                        href="mailto:enquiries@geeks4learning.com"
                        target="_blank"
                      >
                        <i className="bi bi-envelope"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="socialnetworks">
                <h3>Follow us</h3>
                <ul>
                  <li>
                    <div className="contact-box">
                      <a
                        href="https://web.facebook.com/geeks4learning/?_rdc=1&amp;_rdr"
                        target="_blank"
                      >
                        <i className="bi bi-facebook"></i>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="contact-box">
                      <a
                        href="https://twitter.com/geeks4learning"
                        target="_blank"
                      >
                        <i className="bi bi-twitter"></i>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="contact-box">
                      <a href="#" target="_blank">
                        <i className="bi bi-linkedin"></i>{" "}
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="contact-box">
                      <a href="#" target="_blank">
                      <i className="bi bi-youtube"></i>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="contact-box">
                      <a href="#" target="_blank">
                      <i className="bi bi-instagram"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 column-center">
              <div className="logininfo">
                You are logged in as Thee_Navigator
              </div>
            </div>

            <div className="col-md-4 column-right">
              <h3>Get the mobile app</h3>
              <p>Coming soon!</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Home;

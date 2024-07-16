import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer data-w-id="4e314df4-09d4-dba2-086d-76ffec35ddad" className="footer">
      <div className="footer-decoration-wrap">
        <div className="footer-decoration">
          <div className="footer-decoration-rounded"></div>
          <div className="footer-decoration-rounded two"></div>
          <div className="footer-decoration-rounded three"></div>
          <div className="footer-decoration-bg"></div>
        </div>
      </div>
      <div className="footer-decoration-wrap right">
        <div className="footer-decoration">
          <div className="footer-decoration-rounded"></div>
          <div className="footer-decoration-rounded two"></div>
          <div className="footer-decoration-rounded three"></div>
          <div className="footer-decoration-bg right"></div>
        </div>
      </div>
      <div className="w-layout-blockcontainer container w-container">
        <div className="footer-content-wrap">
          <div
            className="footer-decoration-line-top"
            style={{
              transform:
                "translate3d(500.4478%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          ></div>
          <div className="footer-decoration-line-center"></div>
          <div
            className="footer-decoration-line-bottom"
            style={{
              transform:
                "          translate3d(-500.4478%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          ></div>
          <div className="footer-content">
            <div className="w-layout-grid grid-footer">
              <div
                id="w-node-_4e314df4-09d4-dba2-086d-76ffec35ddd0-ec35ddad"
                className="footer-link-list"
              >
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="social-link w-inline-block"
                >
                  <Image
                    width={100}
                    height={100}
                    src="https://assets-global.website-files.com/655c521643f3726e71438eaf/655c7cceb7d23a838f2c14d1_facebook.svg"
                    loading="eager"
                    alt="Facebook icon"
                    className="social-icon"
                  />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="social-link w-inline-block"
                >
                  <Image
                    width={100}
                    height={100}
                    src="https://assets-global.website-files.com/655c521643f3726e71438eaf/655c7ce976a29da5e6c1f9c0_instagram.svg"
                    loading="eager"
                    alt="Instagram icon"
                    className="social-icon"
                  />
                </a>
              </div>
              <div
                id="w-node-_4e314df4-09d4-dba2-086d-76ffec35ddd9-ec35ddad"
                className="footer-item-wrap"
              >
                <h6 className="footer-title">Links</h6>
                <div className="w-layout-grid grid-footer-link">
                  <div className="footer-link-wrap">
                    <a href="/landing-pages/home-2" className="footer-link">
                      Home
                    </a>

                    <a href="/landing-pages/home-3" className="footer-link">
                      Contact
                    </a>
                  </div>
                  <div className="footer-link-wrap">
                    <a href="/landing-pages/home-2" className="footer-link">
                      Universities
                    </a>
                    <a
                      href="/product-pages/pricing-2-ecom"
                      className="footer-link"
                    >
                      Scholarships
                    </a>
                  </div>
                  <div className="footer-link-wrap">
                    <a href="/company-pages/careers" className="footer-link">
                      About
                    </a>
                    <a href="/company-pages/team" className="footer-link">
                      Consultation
                    </a>
                  </div>
                  <div className="footer-link-wrap">
                    <a href="/user-pages/log-in" className="footer-link">
                      Universities
                    </a>
                    <a href="/user-pages/sign-up" className="footer-link">
                      Scholarships
                    </a>
                  </div>
                </div>
              </div>
              <div
                id="w-node-_4e314df4-09d4-dba2-086d-76ffec35de09-ec35ddad"
                className="footer-item-wrap"
              >
                <h6 className="footer-title">Support</h6>
                <div className="w-layout-grid grid-footer-link-inner">
                  <div className="footer-link-wrap">
                    <a href="mailto:Info@example.com" className="footer-link">
                      Info@example.com
                    </a>
                    <a href="tel:+25865899956" className="footer-link">
                      +258 658 999 56
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-copyright-wrap">
              <div className="copyright-text">
                T & U 2024 all rights reserved
              </div>
              <a href="/company-pages/terms-conditions" className="footer-link">
                Term &amp; Conditions
              </a>
              <a href="/company-pages/privacy-policy" className="footer-link">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

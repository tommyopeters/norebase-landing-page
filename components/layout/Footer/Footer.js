import Link from "next/link";

import Facebook from "../../../public/svgs/facebook.svg";
import Linkedin from "../../../public/svgs/linkedin.svg";
import Twitter from "../../../public/svgs/twitter.svg";
import ArrowRight from "../../../public/svgs/arrow-diag-up-right.svg";
import Logo from "../../../public/svgs/logo-white.svg";
// import { Linkedin } from "/images/svgs/linkedin.svg";
// import { Twitter } from "/images/svgs/twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div className="wrap">
        <Link href="/">
          <a href="">
            <div className="logo image-control">
              <Logo></Logo>
            </div>
          </a>
        </Link>
        <div className="footer-links">
          <div className="link-category">
            <h2 className="link-category-header">Company</h2>
            <ul>
              <li>
                <Link href="/about-us">
                  <a href="">
                    <div>
                      About us
                      <ArrowRight className="arrow-right-up"></ArrowRight>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="https://blog.norebase.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blog
                  <ArrowRight className="arrow-right-up"></ArrowRight>
                </a>
              </li>
              <li>
                <Link href="/faqs">
                  <a href="">
                    <div>
                      FAQs
                      <ArrowRight className="arrow-right-up"></ArrowRight>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="link-category">
            <h2 className="link-category-header">Legal</h2>
            <ul>
              <li>
                <Link href="/terms">
                  <a href="">
                    <div>
                      Terms
                      <ArrowRight className="arrow-right-up"></ArrowRight>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a href="">
                    <div>
                      Privacy
                      <ArrowRight className="arrow-right-up"></ArrowRight>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="link-category">
            <h2 className="link-category-header">Products</h2>
            <ul>
              <li>
                <Link href="/products/launch">
                  <a href="">
                    <div>Launch </div>
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="https://infra.norebase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Norebase API
                </a>
              </li>
              <li>
                <a
                  href="http://docs.norebase.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API Documentation
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-details mobile-only">
            <ul className="social-links">
              <li>
                <Link
                  href="https://www.facebook.com/profile.php?id=100072023952939"
                  className="image-control vertical"
                >
                  <a>
                    <Facebook></Facebook>
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/norebase/"
                  className="image-control vertical"
                >
                  <a>
                    <Linkedin></Linkedin>
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/norebase"
                  className="image-control vertical"
                >
                  <a>
                    <Twitter></Twitter>
                  </a>
                </Link>
              </li>
            </ul>
            {/* <p>2 Crowles View, Bodwin, Cornwall, United Kingdom PL31 2UB</p> */}
            <p>
              <a href="mailto:hello@norebase.com">hello@norebase.com</a>
            </p>
            <p>
              <a href="tel:+13602952698">+1 360-295-2698</a>
            </p>
          </div>
        </div>
        <div className="footer-details desktop-only">
          <ul className="social-links">
            <li>
              <Link
                href="https://www.facebook.com/profile.php?id=100072023952939"
                className="image-control vertical"
              >
                <a>
                  <Facebook></Facebook>
                </a>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/norebase/"
                className="image-control vertical"
              >
                <a>
                  <Linkedin></Linkedin>
                </a>
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/norebase"
                className="image-control vertical"
              >
                <a>
                  <Twitter></Twitter>
                </a>
              </Link>
            </li>
          </ul>
          {/* <p>2 Crowles View, Bodwin, Cornwall, United Kingdom PL31 2UB</p> */}
          <p>
            <a href="mailto:hello@norebase.com">hello@norebase.com</a>
          </p>
          <p>
            <a href="tel:+13602952698">+1 360-295-2698</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

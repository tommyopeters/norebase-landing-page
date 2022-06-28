import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Button from "../../../components/ui/Button";

import Logo from "../../../public/svgs/logo.svg";
import TrademarkIP from "../../../public/svgs/trademark-ip.svg";
import Launch from "../../../public/svgs/launch.svg";
import Start from "../../../public/svgs/start.svg";
import NorebaaseAPI from "../../../public/svgs/norebase-api.svg";
import RegisterBusinessName from "../../../public/svgs/register-business-name.svg";

function Header({ classes }) {
  // const location = useLocation();
  const router = useRouter();
  let [menuActive, setMenu] = useState(false);
  let [subMenuActive, setSubMenuActive] = useState(false);
  let [activeSubMenu, setActiveSubMenu] = useState("");
  let [subMenu, setSubMenuList] = useState([]);

  // const checkActive = (match, location) => {
  //   //some additional logic to verify you are in the home URI
  //   if (!location) return false;
  //   const { pathname } = location;
  //   console.log(pathname);
  //   return pathname === "/";
  // };

  // useEffect(() => {
  // }, [router.asPath]);

  useEffect(() => {
    if (menuActive) {
      setMenu(!menuActive);
    }
    let header = document.querySelector("header#header");
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    header.classList.remove(scrollUp);
    header.classList.remove(scrollDown);
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        header.classList.remove(scrollUp);
        return;
      }

      if (
        currentScroll > lastScroll &&
        !header.classList.contains(scrollDown)
      ) {
        // down
        header.classList.remove(scrollUp);
        header.classList.add(scrollDown);
      } else if (
        currentScroll < lastScroll &&
        header.classList.contains(scrollDown)
      ) {
        // up
        header.classList.remove(scrollDown);
        header.classList.add(scrollUp);
      }
      lastScroll = currentScroll;
    });
  }, [router.asPath]);

  const handleMobileMenu = () => {
    setMenu(!menuActive);
    setSubMenuActive(false);
    setActiveSubMenu("");
  };
  const openSubMenu = (menu, list) => {
    setSubMenuList(list);
    setActiveSubMenu(menu);
    setSubMenuActive(true);
  };
  const closeSubMenu = () => {
    setActiveSubMenu("");
    setSubMenuActive(false);
  };

  const returnList = () => {
    if (subMenu.length < 0) return [];
    return subMenu.map((item, index) => {
      console.log(item.route);
      console.log(router.asPath);
      console.log(item.route === router.asPath);
      return (
        <li key={"sub-menu-link-" + index}>
          <Link href={item.route}>
            <a className={router.asPath == item.route ? "active" : ""}>
              {item.name}
            </a>
          </Link>
        </li>
      );
    });
  };

  const navigation = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Products",
      route: "products/",
      sub: [
        {
          name: "Launch",
          route: "/products/launch/",
        },
        {
          name: "Trademark",
          route: "/products/trademark/",
        },
        {
          name: "Business Name Registration",
          route: "/products/business-name-registration/",
        },
      ],
    },
    {
      name: "Use Cases",
      route: "use-cases/",
      sub: [
        {
          name: "Business",
          route: "/use-cases/business/",
        },
        {
          name: "Startups",
          route: "/use-cases/startups/",
        },
        {
          name: "Creators",
          route: "/use-cases/creators/",
        },
      ],
    },
    {
      name: "Pricing",
      route: "/pricing/",
    },
    {
      name: "Company",
      route: "/about-us/",
    },
  ];
  // let links = [];
  // navigation.forEach((item, index) => {
  //   links.push(
  //     <li key={"header-link-" + index}>
  //       {item.route == "products" || item.route == "use-cases" ? (
  //         <div
  //           className={`sub-menu-trigger ${
  //             location.pathname.includes(item.route) ? "active" : ""
  //           }`}
  //           onClick={() => {
  //             openSubMenu(item.route, item.sub);
  //           }}
  //         >
  //           {item.name}
  //         </div>
  //       ) : (
  //         <Link
  // href ={item.route}
  //           className={(navData) => (navData.isActive ? "active" : "")}
  //         >
  //           {item.name}
  //         </Link>
  //       )}
  //     </li>
  //   );
  // });
  const returnLinks = (type) => {
    return navigation.map((item, index) => {
      return (
        <li key={"header-link-" + index}>
          {item.route == "products/" || item.route == "use-cases/" ? (
            <div
              className={`sub-menu-trigger ${
                router.pathname.includes(item.route) ? "active" : ""
              }`}
              onClick={() => {
                openSubMenu(item.route, item.sub);
              }}
            >
              {type == "mobile" ? (
                item.name
              ) : (
                <>
                  <div className="sub-menu-title">{item.name}</div>
                  {item.route == "products" ? (
                    <div className="sub-menu">
                      <div className="sub-menu-header">
                        <h4>Get Started</h4>
                      </div>
                      <ul>
                        <li>
                          <Link href="/products/launch">
                            <a
                              href=""
                              className={
                                router.asPath === "/products/launch"
                                  ? "active"
                                  : ""
                              }
                            >
                              <span className="icon image-control">
                                <Launch></Launch>
                              </span>
                              <span className="text">Launch</span>
                            </a>
                          </Link>
                        </li>
                        {/* <li>
                          <Link
href="sub-sub-menu"
                            to="/products/launch#start"
                          >
                            <span className="icon image-control">
                              <img src={Start} alt="Start" />
                            </span>
                            <span className="text">Start</span>
                          </Link>
                        </li> */}
                        <li>
                          <Link href="/products/business-name-registration">
                            <a
                              href=""
                              className={
                                router.asPath ===
                                "/products/business-name-registration"
                                  ? "active"
                                  : ""
                              }
                            >
                              <span className="icon image-control">
                                <RegisterBusinessName />
                              </span>
                              <span className="text">
                                Register Business Name
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/products/trademark">
                            <a
                              href=""
                              className={
                                router.asPath === "/products/trademark"
                                  ? "active"
                                  : ""
                              }
                            >
                              <span className="icon image-control">
                                <TrademarkIP />
                              </span>
                              <span className="text">Trademark IP</span>
                            </a>
                          </Link>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="https://infra.norebase.com">
                            <span className="icon image-control">
                              <NorebaaseAPI />
                            </span>
                            <span className="text">Norebase API</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div className="sub-menu">
                      <div className="sub-menu-header">
                        <h4>Use Cases</h4>
                      </div>
                      <ul>
                        <li>
                          <Link href="/use-cases/creators">
                            <a
                              href=""
                              className={
                                router.asPath === "/use-cases/creators"
                                  ? "active"
                                  : ""
                              }
                            >
                              <span className="icon image-control">
                                <Launch />
                              </span>
                              <span className="text">For Creators</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/use-cases/startups">
                            <a
                              href=""
                              className={
                                router.asPath === "/use-cases/startups"
                                  ? "active"
                                  : ""
                              }
                            >
                              <span className="icon image-control">
                                <Start />
                              </span>
                              <span className="text">For Startups</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/use-cases/business">
                            <a
                              href=""
                              className={
                                router.asPath === "/use-cases/business"
                                  ? "active"
                                  : ""
                              }
                            >
                              <span className="icon image-control">
                                <RegisterBusinessName />
                              </span>
                              <span className="text">For Business</span>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
          ) : (
            <Link exact href={item.route}>
              <a
                href=""
                className={router.asPath === item.route ? "active" : ""}
              >
                {item.name}
              </a>
            </Link>
          )}
        </li>
      );
    });
  };

  return (
    // <header className={dark ? "dark" : null}>
    <header
      id="header"
      className={`index-header dark ${menuActive ? "fixed " : ""}${classes} `}
    >
      <div className="wrap">
        <Link href="/" className="logo image-control">
          <a href="">
            <Logo />
          </a>
        </Link>
        <nav className="desktop-nav">
          <ul>{returnLinks()}</ul>
        </nav>
        <div className="user-prompt">
          <Link href="https://start.norebase.com">
            <Button classes="start-btn dark-btn">Sign up</Button>
          </Link>
        </div>
        {/* {dark ? (
          // 
        ) : (
          <div className="user-prompt">
            <Button classes="text-btn sign-in">Sign In</Button>
            <Button classes="start-btn">Start your business now</Button>
          </div>
        )} */}
        <div className="mobile-nav">
          <div
            className={`hamburger ${menuActive ? "open" : ""}`}
            onClick={handleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={menuActive ? "open" : ""}>
            {subMenuActive ? (
              <ul className="sub-menu nav-list">
                <div
                  className="back"
                  onClick={() => {
                    closeSubMenu();
                  }}
                >
                  Back
                </div>
                {returnList()}
              </ul>
            ) : (
              <ul className="nav-list">
                {returnLinks("mobile")}
                <li className="user">
                  <Link href="https://start.norebase.com">
                    <a href="">Log In</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://start.norebase.com">
                    <a href="">Sign Up</a>
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

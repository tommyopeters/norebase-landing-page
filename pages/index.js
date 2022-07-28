import React, { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import loader from "../utils/loader";

import Button from "../components/ui/Button";
import Trustees from "../components/ui/Trustees";

import EyeIcon from "../public/svgs/eye-icon-light.svg";
import BrassLogoBlack from "../public/svgs/brass-black.svg";
import EdenLogo from "../public/svgs/eden-green.svg";
import NestcoinBlack from "../public/svgs/nestcoin-black.svg";
import AltSchoolLogoBlack from "../public/svgs/alt-school-black.svg";

export default function Home() {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.norebase.com` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const [scrolled, setScroll] = useState(false);

  function signUp() {
    console.log("Sign up");
  }
  useEffect(() => {
    const scroller = document.querySelector(".wrapper");
    let MOUSE_OVER = false;
    let scrollLevel = 0;
    document.addEventListener(
      "wheel",
      function (e) {
        if (MOUSE_OVER) {
          if (
            (e.wheelDelta > 0 && scrollLevel === 1) ||
            (e.wheelDelta < 0 && scrollLevel === 0)
          ) {
            if (e.preventDefault) {
              e.preventDefault();
            }
            e.returnValue = false;
            return false;
          }
        }
      },
      { passive: false }
    );

    scroller.addEventListener("mouseenter", () => {
      MOUSE_OVER = true;
    });
    scroller.addEventListener("mouseleave", () => {
      MOUSE_OVER = false;
    });
    scroller.addEventListener("wheel", (e) => {
      const delta = e.wheelDelta;
      if (delta > 0) {
        // go up
        setScroll(false);
        setTimeout(() => {
          scrollLevel = 0;
        }, 500);
      } else {
        setScroll(true);
        setTimeout(() => {
          scrollLevel = 1;
        }, 500);
        // go down
      }
    });
  }, []);

  return (
    <main className="home">
      <Head>
        <title>Norebase</title>
        <meta
          name="description"
          content="The easiest way to start, scale and operate your business"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <section className="hero-section">
        <div className="wrap">
          <div className="text-block">
            <div className="news">
              <span>NEWS</span>
              <p>We just raised 1 million dollars!</p>
              {/* <Link passHref href={"/"}>
                  Read more
                </Link> */}
            </div>
            <div className="image-control mobile-only">
              {/* <Image
                loader={loader}
                src="/images/3d-earth.png"
                alt="Globe Animation"
                // width={474}
                width={469}
                // height={474}
                height={469}
              /> */}
            </div>
            <h1>The easiest way to start, scale and operate your business</h1>
            <p className="extra">
              Whether you’re registering a new business in Nigeria, trying to
              protect your company’s intellectual property in Kenya, or
              expanding to the U.S, we’ve got you covered.
            </p>
            <Link href="https://start.norebase.com/signup">
              <Button classes="">Get started in minutes</Button>
            </Link>

            <p className="subtitle">
              No confusing paperwork, no complexities, and no hidden fees!
            </p>
          </div>
          <div className="image-block">
            <div className="image-control">
              <Image
                loader={loader}
                priority
                src="/gifs/globe.gif"
                alt="Globe Animation"
                width={500}
                height={500}
              />
              {/* <Image
                loader={loader}
                src="/images/3d-earth.png"
                alt="Globe Animation"
                // width={474}
                width={469}
                // height={474}
                height={469}
              /> */}
            </div>
          </div>
        </div>
      </section>
      <section className="trustees-section dark">
        <div className="wrap">
          <div className="text-block">
            <h2>
              Start, operate and scale your company the easy way with Norebase.
            </h2>
          </div>
          <div className="trustees-block">
            <h3>Trusted by the fastest growing startups in Africa</h3>
            {Trustees}
          </div>
        </div>
      </section>
      <section className="our-offerings" id="our-offerings">
        <div className="wrap">
          <h2>
            <span className="dot"></span>Quick and seamless business formation
            with Norebase
          </h2>
          <div
            className={`scroll-section desktop-only ${scrolled ? "down" : ""}`}
          >
            <div className="wrapper">
              <div className="wrapper-wrap">
                <div className="top-section section">
                  <div className="text-block">
                    <h2>Start your business</h2>
                    <p>
                      Get your business running in any African country in just a
                      few days. We’ll handle country-specific laws and
                      regulations while you focus on what’s important — doing
                      your thing
                    </p>
                    <p className="grey">
                      We are currently available in Nigeria, Ghana, Kenya, South
                      Africa and Delaware, USA. More countries coming soon.
                    </p>
                    <Link href="https://start.norebase.com/signup">
                      <Button classes="dark-btn">
                        Start your business today
                      </Button>
                    </Link>
                  </div>
                  <div className="image-block">
                    <div className="image-control vertical">
                      {/* <img
                            ref={houseAnimation}
                            src={LaunchYourBusiness}
                            alt="Launch your business"
                          /> */}
                      <Image
                        loader={loader}
                        priority
                        src="/gifs/houses.gif"
                        height={500}
                        width={500}
                        alt="Houses Animation"
                      />
                    </div>
                  </div>
                </div>
                <div className="bottom-section section">
                  <div className="text-block">
                    <h2>Expand your business</h2>
                    <p>
                      Borders? Country-specific compliance issues? It’s a piece
                      of cake with Norebase. Expand your business to other
                      countries and tap into Africa’s $2.7 trillion-dollar GDP
                      with just a few easy steps.
                    </p>
                    <p className="grey">
                      We are currently available in Nigeria, Ghana, Kenya, South
                      Africa and Delaware, USA. More countries coming soon.
                    </p>
                    <Link href="https://start.norebase.com/signup">
                      <Button classes="dark-btn">
                        Start your business today
                      </Button>
                    </Link>
                  </div>
                  <div className="image-block">
                    <div className="image-control vertical">
                      {/* <img
                            ref={estateAnimation}
                            src={ExpandYourBusiness}
                            alt="Expand your business"
                          /> */}
                      <Image
                        loader={loader}
                        priority
                        src="/gifs/estate.gif"
                        height={500}
                        width={500}
                        alt="Estate Animation"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"extra-element " + (scrolled ? "down" : "")}></div>
          </div>
          <div className="mobile-only">
            <div className="left-section section">
              <div className="image-block">
                <div className="image-control vertical">
                  <Image
                    loader={loader}
                    priority
                    src="/gifs/houses.gif"
                    height={500}
                    width={500}
                    alt="Houses Animation"
                  />
                </div>
              </div>
              <div className="text-block">
                <h2>Start your business</h2>
                <p>
                  Get your business running in any African country in just a few
                  days. We’ll handle country-specific laws and regulations while
                  you focus on what’s important — doing your thing
                </p>
                <p className="grey">
                  We are currently available in Nigeria, Ghana, Kenya, South
                  Africa and Delaware, USA. More countries coming soon.
                </p>
              </div>
            </div>
            <div className="right-section section">
              <div className="image-block">
                <div className="image-control vertical">
                  <Image
                    loader={loader}
                    priority
                    src="/gifs/estate.gif"
                    height={500}
                    width={500}
                    alt="Estate Animation"
                  />
                </div>
              </div>
              <div className="text-block">
                <h2>Expand your business</h2>
                <p>
                  Borders? Country-specific compliance issues? It’s a piece of
                  cake with Norebase. Expand your business to other countries
                  and tap into Africa’s $2.7 trillion-dollar GDP with just a few
                  easy steps.
                </p>
                <p className="grey">
                  We are currently available in Nigeria, Ghana, Kenya, South
                  Africa and Delaware, USA. More countries coming soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features-section">
        <div className="wrap">
          <h2>
            Company Incorporation is just one part of what Norebase can do for
            you
          </h2>
          <p>
            We focus on the country-specific regulations and help you focus on
            what’s important — growing your business
          </p>
          <div className="features">
            <div className="feature-card">
              <div className="image-control vertical-till-600">
                <Image
                  loader={loader}
                  src="/images/brand-stamp-icon.png"
                  alt="Brand Stamp Icon"
                  width={768}
                  height={376}
                />
              </div>
              <p className="sub">Your Brand</p>
              <h3>Trademark your IP</h3>
              <p>
                Don’t let others earn off your sweat. Protect your ideas.
                Trademark your business name, slogan, logo and IP. Simple, fast
                and easy.
              </p>
              <div className="actions">
                <Link passHref href="/products/trademark">
                  <Button>Secure your IP</Button>
                </Link>
              </div>
            </div>
            <div className="feature-card">
              <div className="image-control vertical-till-600">
                <Image
                  loader={loader}
                  src="/images/business-name-icon.png"
                  alt="Business Name Icon"
                  width={768}
                  height={376}
                />
              </div>
              <p className="sub">Your Slogan</p>
              <h3>Register your Business Name</h3>
              <p>
                It’s time for your business to play in the big leagues. Register
                your business with the Nigerian Corporate Affairs Commission
                stress-free.
              </p>
              <div className="actions">
                <Link passHref href="/products/business-name-registration">
                  <Button classes="desktop-btn">
                    Register your business name
                  </Button>
                </Link>
                {/* <Button classes="blue-btn desktop-btn">
                      Pre-filing mark search
                    </Button> */}
                <Link href="https://start.norebase.com/signup">
                  <Button classes="mobile-btn">Register now</Button>
                </Link>
                {/* <Button classes="blue-btn mobile-btn">
                    Search your name
                  </Button> */}
              </div>
              <small>
                *This service is currently available in Nigeria only*
              </small>
            </div>
          </div>
        </div>
      </section>
      <section className="africa-section dark">
        <div className="wrap">
          {/* Carousel  */}
          <div className="text-block">
            <small>Build for Africa</small>
            <h2>Africa at the tip of your fingers</h2>
            <p>
              You’re killing it in your primary market. Now, it’s time to expand
              to other countries on the continent. Create your company in any
              African country, register your trademark or expand your
              organisation from an intuitive and accessible dashboard.
            </p>
            <Link href="https://start.norebase.com/signup">
              <Button>Incorporate your African company</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="for-you">
        <div className="wrap">
          <h2>Built with you in mind</h2>
          <p>
            Our services are designed for founders, entrepreneurs and creators
            worldwide.
          </p>
          <div className="for-who">
            <div className="who">
              <div className="image-control">
                <Image
                  loader={loader}
                  src="/svgs/creators-card-banner.svg"
                  width={351}
                  height={188}
                  alt="Creators Card Banner"
                />
              </div>
              <h3>For Creators</h3>
              <p>
                Ideas are the roots of creation. Trademark your intellectual
                property and protect your legal rights to have them recognised
                worldwide.{" "}
              </p>
              <Link passHref href="/use-cases/creators">
                <Button classes="learn-more outline-btn">Learn More</Button>
              </Link>
            </div>
            <div className="who">
              <div className="image-control">
                <Image
                  loader={loader}
                  src="/svgs/business-card-banner.svg"
                  width={351}
                  height={188}
                  alt="Business Card Banner"
                />
              </div>
              <h3>For Businesses</h3>
              <p>
                It’s time to get serious with that your hustle. Register your
                business, get a corporate back account, Tax Identification
                Number and CAC incorporation certificate.
              </p>
              <Link passHref href="/use-cases/business">
                <Button classes="learn-more outline-btn">Learn More</Button>
              </Link>
            </div>
            <div className="who">
              <div className="image-control">
                <Image
                  loader={loader}
                  src="/svgs/startups-card-banner.svg"
                  width={351}
                  height={188}
                  alt="Startups Card Banner"
                />
              </div>
              <h3>For Startups</h3>
              <p>
                Launching your first company or expanding your market? Let’s
                handle the registration while you focus on building.
              </p>
              <Link passHref href="/use-cases/startups">
                <Button classes="learn-more outline-btn">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <div className="wrap">
          <h2>The Norebase way sounds like this</h2>
          <div className="testimonials">
            <div className="testimonial">
              <div>
                <p>
                  Norebase helped us streamline and simplify our expansion
                  process, saving us time and money. Would recommend for start
                  ups looking to expand to markets across africa
                </p>
                <strong>CEO, Sola Akindolu</strong>
              </div>
              <div className="image-control vertical ">
                <BrassLogoBlack />
              </div>
            </div>
            <div className="testimonial">
              <div>
                <p>
                  Norebase is disrupting the trade sector! It feels surreal that
                  I now own a company in the U.S without getting on a plane
                </p>
                <strong>CEO, Yele Bademosi</strong>
              </div>
              <div className="image-control vertical">
                <NestcoinBlack />
              </div>
            </div>
            <div className="testimonial">
              <div>
                <p>
                  Norebase made our expansion to Kenya so easy we didn't have to
                  think about it again after filling the form. It's the perfect
                  tool for African startups looking to expand into new markets
                </p>
                <strong>CEO, Nadayar Enegesi</strong>
              </div>
              <div className="image-control vertical">
                <EdenLogo />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="try-section dark">
        <div className="wrap">
          <div className="text-block">
            <small>Try Norebase now</small>
            <h2>Create your business in just 30 minutes</h2>
            <div className="actions">
              <Link href="https://start.norebase.com/signup">
                <Button classes="desktop-only">Create business now</Button>
              </Link>
              {/* <Button classes="text-btn">
                    Play Video
                    <ArrowRight></ArrowRight>
                  </Button> */}
            </div>
          </div>
          <div className="video-block">
            <div className="image-control vertical">
              {/* <Image
                loader={loader}
                src="/gifs/plug.gif"
                alt="API Plug Animation"
                height={452}
                width={1000}
              /> */}
              <Image
                loader={loader}
                src="/images/3d-earth-orange.png"
                alt="Orange Globe"
                height={474}
                width={474}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="noreledge-section">
        <div className="wrap">
          <h2>Some Nore-ledge to get you started</h2>
          <p>
            We have added resources you might need to start, run and grow your
            business.
          </p>
          <div className="noreledge-cards">
            <div className="noreledge-card">
              {/* <div className="image-control">
                    <img src={BlogImage1} alt="Blog image1" />
                  </div> */}
              <div className="text-block">
                <h3>
                  Business structures and what you need to know about them
                </h3>
                <p>
                  For any one person or group of people considering starting a
                  business, it is important to know which organisational
                  structure will work best for your business idea...
                </p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://blog.norebase.com/company-structures/"
                >
                  <Button classes="read-btn">
                    Read
                    <EyeIcon />
                  </Button>
                </a>
              </div>
            </div>
            <div className="noreledge-card">
              {/* <div className="image-control">
                  <img src={BlogImage2} alt="Blog image2" />
                </div> */}
              <div className="text-block">
                <h3>
                  Expanding to a new country? Here are four things to consider
                </h3>
                <p>
                  If you are reading this, you’re probably thinking of expanding
                  your company to a new country. However, the big move into a
                  new country comes with its own complexities right from the
                  get-go...
                </p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://blog.norebase.com/expanding-to-a-new-country-here-are-four-things-to-consider/"
                >
                  <Button classes="read-btn">
                    Read
                    <EyeIcon />
                  </Button>
                </a>
              </div>
            </div>
            <div className="noreledge-card">
              {/* <div className="image-control">
                  <img src={BlogImage2} alt="Blog image2" />
                </div> */}
              <div className="text-block">
                <h3>How your business can survive during a recession</h3>
                <p>
                  It is no longer news that we are slowly inching toward a
                  recession; to some, we are already in the middle of one.{" "}
                  <br /> Company structure, also known as a legal business
                  entity, dictates ....
                </p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://blog.norebase.com/how-your-business-can-survive-during-a-recession/"
                >
                  <Button classes="read-btn">
                    Read
                    <EyeIcon />
                  </Button>
                </a>
              </div>
            </div>
            {/* <div className="noreledge-card">
                  <div className="image-control">
                    // <img src={BlogImage3} alt="Blog image3" />
                  </div>
                  <div className="text-block">
                    <h3>Why you need to Incorporate your company</h3>
                    <p>
                      Every successful company today was once an idea. Of
                      course, your brand{" "}
                    </p>
                    <Button classes="download-btn">
                      Download
                      <DownloadIcon />
                    </Button>
                  </div>
                </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}

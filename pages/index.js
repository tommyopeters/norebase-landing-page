import React, { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import loader from "../utils/loader";

import Button from "../components/ui/Button";
import Trustees from "../components/ui/Trustees";

import EyeIcon from "../public/svgs/eye-icon-light.svg";
import BrassLogoBlack from "../public/svgs/brass-black.svg";
import EdenLogo from "../public/svgs/eden-green.svg";
import NestcoinBlack from "../public/svgs/nestcoin-black.svg";
import AltSchoolLogoBlack from "../public/svgs/alt-school-black.svg";

export default function Home() {
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
    <div className="">
      <Head>
        <title>Norebase</title>
        <meta
          name="description"
          content="The easiest way to start, scale and operate your business"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="home">
        <section className="hero-section">
          <div className="wrap">
            <div className="text-block">
              <div className="news">
                <span>NEWS</span>
                <p>We just raised 1 million dollars!</p>
                <Link passHref href={"/"}>
                  Read more
                </Link>
              </div>
              <div className="image-control mobile-only">
                <Image
                  loader={loader}
                  src="/gifs/globe.gif"
                  alt="Globe Animation"
                  width={474}
                  height={474}
                />
              </div>
              <h1>The easiest way to start, scale and operate your business</h1>
              <p className="extra">
                Norebase is your partner for seamless cross-border expansion and
                company incorporation
              </p>
              <Link href="https://start.norebase.com">
                <Button classes="">Start your Business Today</Button>
              </Link>

              <p className="subtitle">
                No confusing paperwork, no complexities, and no hidden fees!
              </p>
            </div>
            <div className="image-block">
              <div className="image-control">
                <Image
                  loader={loader}
                  src="/gifs/globe.gif"
                  alt="Globe Animation"
                  width={469}
                  height={469}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="trustees-section dark">
          <div className="wrap">
            <div className="text-block">
              <h2>
                Start, operate and scale your company the easy way with
                Norebase.
              </h2>
            </div>
            <div className="trustees-block">
              <h3>Trusted By</h3>
              {Trustees}
            </div>
          </div>
        </section>
        <section className="our-offerings" id="our-offerings">
          <div className="wrap">
            <h2>
              <span className="dot"></span>Our Offerings
            </h2>
            <div
              className={`scroll-section desktop-only ${
                scrolled ? "down" : ""
              }`}
            >
              <div className="wrapper">
                <div className="wrapper-wrap">
                  <div className="top-section section">
                    <div className="text-block">
                      <h2>Start your business</h2>
                      <p>
                        Set up your company in any country. Let us help you take
                        the guesswork out of country-specific laws and
                        regulations– and get your business started fast.
                      </p>
                      <p className="grey">
                        We are currently available in Nigeria, Ghana, Kenya,
                        South Africa and Delaware, USA. More countries coming
                        soon.
                      </p>
                      <Link href="https://start.norebase.com">
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
                        Break new grounds for your business. Expand your
                        business to new countries and reach your customers where
                        they are. Enter a new market with the click of a button.
                      </p>
                      <p className="grey">
                        We are currently available in Nigeria, Ghana, Kenya,
                        South Africa and Delaware, USA. More countries coming
                        soon.
                      </p>
                      <Link href="https://start.norebase.com">
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
              <div
                className={"extra-element " + (scrolled ? "down" : "")}
              ></div>
            </div>
            <div className="mobile-only">
              <div className="left-section section">
                <div className="image-block">
                  <div className="image-control vertical">
                    <Image
                      loader={loader}
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
                    Set up your company in any country. Let us help you take the
                    guesswork out of country-specific laws and regulations– and
                    get your business started fast.
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
                    Break new grounds for your business. Expand your business to
                    new countries and reach your customers where they are. Enter
                    a new market with the click of a button.
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
                  Today’s Intellectual Property is tomorrow’s asset. Trademark
                  your business name, slogan, logo and IP with Norebase.
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
                  Your business can be so much more with a business name
                  registration. Get your brand legally recognized with CAC
                  hassle-free with Norebase.
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
                  <Link href="https://start.norebase.com">
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
              <h2>Experience Africa as one big market</h2>
              <p>
                Your access to the continent on the go. Whether you own an
                African business or not, start and expand your business in any
                country on the continent without hopping on a plane.{" "}
              </p>
              <Link href="https://start.norebase.com">
                <Button>Incorporate your African company</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="for-you">
          <div className="wrap">
            <h2>Built with you in mind</h2>
            <p>
              Norebase packages specially crafted for a variety of people who
              need to create entities for their different needs.
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
                <h3>For Creator</h3>
                <p>
                  Trademark your Intellectual property today so you don’t lose
                  legal rights over.
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
                <h3>For Business</h3>
                <p>
                  Register your business name with CAC from anywhere within 3-5
                  days.
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
                  Launch your first company or Expand into your third market.
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
                    Norebase is disrupting the trade sector! It feels surreal
                    that I now own a company in the U.S without getting on a
                    plane
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
                    Norebase made our expansion to Kenya so easy we didn't have
                    to think about it again after filling the form. It's the
                    perfect tool for African startups looking to expand into new
                    markets
                  </p>
                  <strong>CEO, Nadaya Enegesi</strong>
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
                <Link href="https://start.norebase.com">
                  <Button classes="desktop-only">Create business now</Button>
                </Link>
                {/* <Button classes="text-btn">
                    Play Video
                    <ArrowRight></ArrowRight>
                  </Button> */}
              </div>
            </div>
            <div className="video-block">
              <div className="image-control">
                <Image
                  loader={loader}
                  src="/gifs/plug.gif"
                  alt="API Plug Animation"
                  height={452}
                  width={1000}
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
              {/* <div className="noreledge-card">
                  <div className="image-control">
                    // <img src={BlogImage1} alt="Blog image1" />
                  </div>
                  <div className="text-block">
                    <h3>
                      Business structures and what you need to know about them
                    </h3>
                    <p>
                      For any one person or group of people considering starting
                      a business, it is important...
                    </p>
                    <Button classes="download-btn">
                      Download
                      <DownloadIcon />
                    </Button>
                  </div>
                </div> */}
              <div></div>
              <div className="noreledge-card">
                <div className="image-control">
                  {/* <img src={BlogImage2} alt="Blog image2" /> */}
                </div>
                <div className="text-block">
                  <h3>
                    Expanding to a new country? Here are four things to consider
                  </h3>
                  <p>
                    If you are reading this, you’re probably thinking of
                    expanding your company to a new country. However, the big
                    move into a new country comes with its own complexities
                    right from the get-go...
                  </p>
                  <Link href="https://blog.norebase.com/category/resources/">
                    <Button classes="read-btn">
                      Read
                      <EyeIcon />
                    </Button>
                  </Link>
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
      </div>
    </div>
  );
}

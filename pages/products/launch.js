import React, { useRef, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import loader from "../../utils/loader";

import Button from "../../components/ui/Button";
import TrusteesDark from "../../components/ui/TrusteesDark";

import Profile from "../../public/svgs/profile.svg";
import Calling from "../../public/svgs/calling.svg";
import Settings from "../../public/svgs/settings.svg";

function ProductsLaunch() {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.norebase.com` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  return (
    <main className="products-page launch">
      <Head>
        <title>Products | Norebase</title>
        <meta name="description" content="Norebase Products" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <section className="banner-section products-banner">
        <div className="wrap">
          <div className="text-block">
            <div className="title">
              Products <span className="circle"></span> Launch
            </div>
            {/* <div className="image-control mobile-ony">
                  <img src={Building} alt="Building" />
                </div> */}
            <h1>Company Incorporation</h1>
            <p>
              Launch or expand your company in any African country, British
              Virgin Islands and the U.S, right from your phone or laptop.
            </p>
            {/* Log in link */}
            <Link href="https://start.norebase.com/signup">
              <Button>Incorporate your company</Button>
            </Link>
            <div className="trustees-section">
              <h4>Business who use Norebase</h4>
              {TrusteesDark}
            </div>
          </div>
          <div className="image-block">
            <div className="image-control">
              <Image
                loader={loader}
                height={500}
                width={500}
                src="/gifs/houses.gif"
                alt="Building"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="steps-section">
        <div className="wrap">
          <ul className="steps">
            <li>
              <div className="index">1</div>
              <p>Create an account</p>
            </li>
            <li>
              <div className="index">2</div>
              <p>Select your country</p>
            </li>
            <li>
              <div className="index">3</div>
              <p>Input the required details</p>
            </li>
            <li>
              <div className="index">4</div>
              <p>Get a registered company and Tax Identification Number</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="support-section">
        <div className="wrap">
          <h2>What comes with the package</h2>
          <div className="support-steps">
            <div className="support-step">
              <div className="image-control vertical">
                <Settings></Settings>
              </div>
              <h3>Set up in days </h3>
              <p>
                File your application in minutes, get set up in days. Once you
                complete the online application, we will register your company
                and share your incorporation documents within 3-5 days.
              </p>
            </div>
            <div className="support-step">
              <div className="image-control vertical">
                <Calling />
              </div>
              <h3>Get Support</h3>
              <p>
                Setting up in a new terrain? We’ll hold your hand through the
                process and help you navigate launch or expansion for your
                industry.
              </p>
            </div>
            <div className="support-step">
              <div className="image-control vertical">
                <Profile />
              </div>
              <h3>More Support</h3>
              <p>
                We don’t just stop at incorporation. Get a leg up in your new
                location with our post-incorporation services.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="action-section">
        <div className="wrap">
          <div className="text-block">
            <h2>Start your company incorporation today</h2>
            <p>
              Launch or expand your company in any African country, BVI and the
              U.S, right from your phone or laptop.{" "}
            </p>
            <Link href="https://start.norebase.com/signup">
              <Button>Incorporate your Company</Button>
            </Link>
          </div>
          <div className="image-block">
            <div className="image-control vertical">
              <Image
                loader={loader}
                width={500}
                height={500}
                src="/gifs/globe.gif"
                alt="Earth image"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductsLaunch;

import React from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import loader from "../../utils/loader";

import SearchIcon from "../../public/svgs/search.svg";
import LockIcon from "../../public/svgs/lock.svg";
import FlagIcon from "../../public/svgs/flag.svg";

import Button from "../../components/ui/Button";
import TrusteesDark from "../../components/ui/TrusteesDark";
function ProductsTrademark() {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.norebase.com` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  return (
    <main className="products-page trademark">
      <Head>
        <title>Products | Norebase</title>
        <meta name="description" content="Norebasae Products" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <section className="banner-section products-banner peach-banner">
        <div className="wrap">
          <div className="text-block">
            <div className="title">
              Products <span className="circle"></span> Trademark IP
            </div>
            <h1>Trademark Registration</h1>
            <p>
              Protect your brand assets with an online trademark registration
            </p>
            <Link href="https://start.norebase.com/signup">
              <Button>Secure your IP</Button>
            </Link>
            <div className="trustees-section">
              <h4>Business who use Norebase</h4>
              {TrusteesDark}
            </div>
          </div>
          <div className="image-block">
            <div className="image-control desktop-only">
              <Image
                loader={loader}
                height={518}
                width={614}
                src="/images/business-name-padded.png"
                alt="Business name padded"
              />
            </div>
            <div className="image-control mobile-only">
              <Image
                loader={loader}
                height={355}
                width={439}
                src="/images/business-name.png"
                alt="Business name"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="support-section">
        <div className="wrap">
          <div className="support-steps">
            <div className="support-step">
              <div className="image-control vertical">
                <SearchIcon />
              </div>
              <h3>Pre-filing mark check</h3>
              <p>
                We’ll conduct an extensive search of your trademark to ensure
                its availability.
              </p>
            </div>
            <div className="support-step">
              <div className="image-control vertical">
                <LockIcon />
              </div>
              <h3>Secure your brand assets</h3>
              <p>
                Whether you want to trademark your business name, slogan, or
                logo, we’ll file under any of the 45 trademark classes in your
                selected country.
              </p>
            </div>
            <div className="support-step">
              <div className="image-control vertical">
                <FlagIcon />
              </div>
              <h3>Trademark in multiple countries</h3>
              <p>
                Register your trademark in various countries simultaneously
                right from your toilet seat.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="action-section colored">
        <div className="wrap">
          <div className="text-block">
            <h2>Register your trademark today</h2>
            <p>Start your application and protect your brand assets</p>
            <Link href="https://start.norebase.com/signup">
              <Button>Secure your IP</Button>
            </Link>
          </div>
          <div className="image-block">
            <div className="image-control vertical">
              <Image
                loader={loader}
                src="/images/3d-earth-orange.png"
                width={474}
                height={474}
                alt="Orange Globe"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductsTrademark;

import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import loader from "../../utils/loader";

import Button from "../../components/ui/Button";

import Business from "../../public/svgs/business.svg";
import TrusteesDark from "../../components/ui/TrusteesDark";

function UseCasesBusiness() {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.norebase.com` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  return (
    <main className="use-cases-page business">
      <Head>
        <title>Use Cases | Norebase</title>
        <meta name="description" content="Norebase Use Cases" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <section className="banner-section use-cases-banner">
        <div className="wrap">
          <div className="text-block">
            <div className="title">
              Use Cases <span className="circle"></span> Business
            </div>
            <h1>For Businesses</h1>
            <p>
              Launching your first company or expanding your market? Let’s
              handle the registration while you focus on your startup.
            </p>
            <div className="trustees-section">
              <h4>Business who use Norebase</h4>
              {TrusteesDark}
            </div>
          </div>
          <div className="image-block">
            <div className="image-control vertical">
              <Business />
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="wrap">
          <h2>Some of our services perfect for you</h2>

          <div className="services">
            <div className="service">
              <div className="image-control">
                <Image
                  loader={loader}
                  src="/images/business-name-icon.png"
                  alt="Business Name Icon"
                  width={768}
                  height={376}
                />
              </div>
              <div className="text-block">
                <h3>Company Incorporation</h3>
                <p>
                  Register your company in several countries in a few easy
                  steps!
                </p>
                <div className="buttons">
                  <Link href="https://start.norebase.com/signup">
                    <Button>Choose Service</Button>
                  </Link>
                  <Link href="/products/launch">
                    <Button classes="learn-more text-btn">Learn More></Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="service">
              <div className="image-control">
                <Image
                  loader={loader}
                  src="/images/business-name-icon.png"
                  alt="Business Name Icon"
                  width={768}
                  height={376}
                />
              </div>
              <div className="text-block">
                <h3>Business Name Registration</h3>
                <p>
                  Turn your side hustle into a registered business and get your
                  Certificate of Incorporation in just days.
                </p>
                <div className="buttons">
                  <Link href="https://start.norebase.com/signup">
                    <Button>Choose Service</Button>
                  </Link>
                  <Link href="/products/business-name-registration">
                    <Button classes="learn-more text-btn">Learn More ></Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="service">
              <div className="image-control">
                <Image
                  loader={loader}
                  src="/images/brand-stamp-icon.png"
                  alt="Brand Stamp Icon"
                  width={768}
                  height={376}
                />
              </div>
              <div className="text-block">
                <h3>Trademark Your IP</h3>
                <p>
                  Don’t leave your ideas unguarded. Protect your assets by
                  trademarking your IP.
                </p>
                <div className="buttons">
                  <Link href="https://start.norebase.com/signup">
                    <Button>Choose Service</Button>
                  </Link>
                  <Link href="/products/trademark">
                    <Button classes="learn-more text-btn">Learn More ></Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="action-section">
        <div className="wrap">
          <div className="text-block">
            <h2>Sign up to Norebase and start creating</h2>
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

export default UseCasesBusiness;

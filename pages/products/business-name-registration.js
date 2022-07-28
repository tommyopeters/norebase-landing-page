import React from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import loader from "../../utils/loader";

import Buy from "../../public/svgs/buy.svg";
import Star from "../../public/svgs/star.svg";
import Ticket from "../../public/svgs/ticket.svg";

import Button from "../../components/ui/Button";
import TrusteesDark from "../../components/ui/TrusteesDark";

function ProductsBusinessName() {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.norebase.com` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <main className="products-page business-name">
      <Head>
        <title>Products | Norebase</title>
        <meta name="description" content="Norebase Products" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <section className="banner-section products-banner peach-banner">
        <div className="wrap">
          <div className="text-block">
            <div className="title">
              Products <span className="circle"></span> Business Name
              Registration
            </div>
            <h1>Business Name Registration</h1>
            <p>
              Register your business or side hustle with CAC and get your
              incorporation documents within 3-5 days
            </p>
            <Link href="https://start.norebase.com/signup">
              <Button>Register your business name</Button>
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
                height={621}
                width={614}
                src="/images/stamp-padded.png"
                alt="Stamp"
              />
            </div>
            <div className="image-control mobile-only">
              <Image
                loader={loader}
                height={579}
                width={579}
                src="/images/stamp.png"
                alt="Stamp"
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
                <Buy />
              </div>
              <h3>Get your certificate instantly</h3>
              <p>
                Complete your registration on our portal and get your
                certificate of incorporation sent straight to your inbox within
                3-5 days
              </p>
            </div>
            <div className="support-step">
              <div className="image-control vertical">
                <Ticket />
              </div>
              <h3>Your Business, First</h3>
              <p>
                We’ll conduct an extensive search of your trademark to ensure
                its availability.
              </p>
            </div>
            <div className="support-step">
              <div className="image-control vertical">
                <Star />
              </div>
              <h3>Enjoy more benefits</h3>
              <p>
                Get a corporate bank account with any of our partner banks and
                get a Tax ID Number if needed.
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
              <Button>Register your business name</Button>
            </Link>
          </div>
          <div className="image-block">
            <Image
              loader={loader}
              src="/images/3d-earth-orange.png"
              width={474}
              height={474}
              alt="Orange Globe"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductsBusinessName;

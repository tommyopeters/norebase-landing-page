import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "./../components/ui/Button";

import Mercury from "../public/svgs/mercury-full-logo.svg";
import Deel from "../public/svgs/deel-logo.svg";
import OpenPhone from "../public/svgs/open-phone.svg";

function Partners() {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.norebase.com` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  return (
    <main className="partners-page">
      <Head>
        <title>Partners | Norebase</title>
        <meta name="description" content="About Norebase" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <section className="hero-section">
        <div className="wrap">
          <h1>
            Register your business with us and get access to our partner perks
          </h1>
          <p>Experience the perks that come with registering with Norebase</p>
        </div>
      </section>

      <section className="our-partners">
        <div className="wrap">
          <h2>Our Partners</h2>
          <div className="partners">
            <div className="partner svg-container">
              <Deel />
            </div>
            <div className="partner svg-container">
              <Mercury />
            </div>
            <div className="partner svg-container">
              <OpenPhone />
            </div>
          </div>
        </div>
      </section>

      <section className="partner-details">
        <div className="wrap">
          <div className="detail mercury">
            <div className="svg-container">
              <Mercury />
            </div>
            <h3>Banking stack for Norebase companies</h3>
            <p>
              Get $500 when you spend $10k on your debit card in the first 90
              days
            </p>
            <Link href="https://mercury.com/">
              <Button>Learn More</Button>
            </Link>
          </div>
          <div className="detail deel">
            <div className="svg-container">
              <Deel />
            </div>
            <h3>Payroll and compliance built for the worldwide workforce</h3>
            <p>
              Onboard empoyees and contractors in minutes and pay them in 150+
              countries with Deel
            </p>
            <Link href="https://www.deel.com/ko-kr/partners/norebase">
              <Button>Learn More</Button>
            </Link>
          </div>
          <div className="detail openphone">
            <div className="svg-container">
              <OpenPhone />
            </div>
            <h3>Everything your team needs from a phone system</h3>
            <p>
              Collaborate on problems, contacts and conversations - all from
              within OpenPhone
            </p>
            <Link href="https://www.openphone.com">
              <Button>Learn More</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Partners;

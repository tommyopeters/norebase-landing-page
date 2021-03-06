import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import loader from "../../utils/loader";

import Button from "../../components/ui/Button";

import Startups from "../../public/svgs/startups.svg";
import TrusteesDark from "../../components/ui/TrusteesDark";

function UseCasesStartups() {
  function handleLogin(inst) {
    // inst.loginRedirect(loginRequest).catch((e) => {
    //   console.error(e);
    // });
  }
  return (
    <main className="use-cases-page startups">
      <Head>
        <title>Use Cases | Norebase</title>
        <meta name="description" content="Norebase Use Cases" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="banner-section use-cases-banner">
        <div className="wrap">
          <div className="text-block">
            <div className="title">
              Use Cases <span className="circle"></span> Startups
            </div>
            <h1>For Startups</h1>
            <p>
              Ideas are the roots of creation. Trademark your intellectual
              property and protect your legal rights to have them recognised
              worldwide.{" "}
            </p>
            <div className="trustees-section">
              <h4>Business who use Norebase</h4>
              {TrusteesDark}
            </div>
          </div>
          <div className="image-block">
            <div className="image-control vertical">
              <Startups />
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
                  Your access to the continent on the go. Whether you own an
                  African business{" "}
                </p>
                <div className="buttons">
                  <Link href="https://start.norebase.com">
                    <Button>Choose Service</Button>
                  </Link>
                  <Link href="/products/launch">
                    <Button classes="learn-more text-btn">Learn More ></Button>
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
                <h3>Business Name Registeration</h3>
                <p>
                  Your access to the continent on the go. Whether you own an
                  African business
                </p>
                <div className="buttons">
                  <Link href="https://start.norebase.com">
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
                  Your access to the continent on the go. Whether you own an
                  African business{" "}
                </p>
                <div className="buttons">
                  <Link href="https://start.norebase.com">
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
      <section className="action-section colored">
        <div className="wrap">
          <div className="text-block">
            <h2>Sign up to Norebase and start creating</h2>
            <p>Start your application and protect your brand assets</p>
            <Link href="https://start.norebase.com">
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

export default UseCasesStartups;

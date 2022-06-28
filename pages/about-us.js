import React from "react";
import Image from "next/image";
import Head from "next/head";

import loader from "../utils/loader";

function AboutUs() {
  function handleLogin(inst) {
    // inst.loginRedirect(loginRequest).catch((e) => {
    //   console.error(e);
    // });
  }
  return (
    <main className="about-us">
      <Head>
        <title>About Us | Norebase</title>
        <meta name="description" content="About Norebase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="banner-section about-us-banner">
        <div className="wrap">
          <div className="text-block">
            <div className="title">
              <span className="circle"></span> About Us
            </div>
            <h1>Accelerating Trade in the African Continent and beyond</h1>
            <p>
              Norebase is helping entrepreneurs to start businesses and expand
              into other markets in a transparent, fast, and efficient way.
            </p>
          </div>
          <div className="image-block"></div>
        </div>
      </section>

      <section className="big-picture">
        <div className="wrap">
          <div className="image-block">
            <div className="image-control">
              <Image
                loader={loader}
                src="/images/smiling-girl-purple-motif.png"
                width={790}
                height={794}
                alt="Orange Globe"
              />
            </div>
          </div>
          <div className="text-block">
            <h2>The Big Picture</h2>
            <p>
              At Norebase, we believe that leveraging technology to build
              antifragile businesses in more competitive markets will unlock an
              era of Africa-wide prosperity. Our mission is to help founders,
              creators and businesses worldwide access the booming African
              market.
            </p>
          </div>
        </div>
      </section>

      <section className="big-picture-continued">
        <div className="wrap">
          <div className="text-block">
            <p>
              We began our journey knowing that the opportunity to grow
              successful businesses in Africa is bountiful, especially when
              individuals can access the continent as one big market. Our
              learnings of the complexities of various markets birthed a digital
              platform that makes doing business in Africa worthwhile and
              seamless.
            </p>
          </div>
          <div className="image-block">
            <div className="image-control">
              <Image
                loader={loader}
                src="/images/african-american-woman-with-phone-laptop-cafe.png"
                width={540}
                height={300}
                alt="African american woman with phone laptop cafe"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="our-values">
        <div className="wrap">
          <h2>Our Values</h2>
          <p>Some of the things we strongly believe</p>
          <div className="values">
            <div className="value">
              <div className="number">1</div>
              <h3>Innovation</h3>
              <p>
                We are shaping the future of trade in Africa, for Africans and
                beyond. So we are constantly building products and features that
                address these{" "}
              </p>
            </div>
            <div className="value">
              <div className="number">2</div>
              <h3>Transparency</h3>
              <p>
                We are shaping the future of trade in Africa, for Africans and
                beyond. So we are constantly building products and features that
                address these{" "}
              </p>
            </div>
            <div className="value">
              <div className="number">3</div>
              <h3>Customer-Focused</h3>
              <p>
                We are shaping the future of trade in Africa, for Africans and
                beyond. So we are constantly building products and features that
                address these{" "}
              </p>
            </div>
            <div className="value">
              <div className="number">4</div>
              <h3>Predictability, Accountability</h3>
              <p>
                We are shaping the future of trade in Africa, for Africans and
                beyond. So we are constantly building products and features that
                address these{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;

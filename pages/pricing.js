import React from "react";
import Head from "next/head";
import PricingComponent from "../components/ui/Pricing/index";

export default function pricing() {
  return (
    <>
      <Head>
        <title>Pricing | Norebase</title>
        <meta
          name="description"
          content="The easiest way to start, scale and operate your business"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PricingComponent />
    </>
  );
}

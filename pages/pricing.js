import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import PricingComponent from "../components/ui/Pricing/index";

export default function Pricing() {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.norebase.com` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  return (
    <>
      <Head>
        <title>Pricing | Norebase</title>
        <meta
          name="description"
          content="The easiest way to start, scale and operate your business"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <PricingComponent />
    </>
  );
}

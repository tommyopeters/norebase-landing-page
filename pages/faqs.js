import React from "react";
import $ from "jquery";
import Head from "next/head";
import { useRouter } from "next/router";

import ArrowRight from "../public/svgs/arrow-right-light.svg";
import ArrowDown from "../public/svgs/arrow-down-light.svg";

const questions = [
  {
    question: "What are the types of incorporation one can do in the US?",
    answer: `You can set up your US company on Norebase as a C-corp, or an LLC. 
      Both LLCs and C-corps are independent corporate entities separate from the founders. 
      <br /><br />
      However, a C-corp has a board of directors overseeing the activities of the company, while LLCs have a flexible management structure. 
      <br /><br />
      Also, a C-corp has shareholders who hold shares in the company while an LLC has owners who split their ownership via an Operating Agreement. Because of this distinction, most investors insist on corporation.
      <br /><br />
      <a href="https://blog.norebase.com/c-corp-or-llc-which-is-best-for-you/">https://blog.norebase.com/c-corp-or-llc-which-is-best-for-you/</a>  <br />
      ...Learn more about the differences from our blog post.`,
  },
  {
    question: "What is LLP and what do I need to register for it?",
    answer: `LLP stands for LIMITED LIABILITY PARTNERSHIP.  An LLP exists when two or more persons (a maximum of 20 persons) go into business together. 
<br /><br />
      An LLP has a general and limited partners. The liability of the general partner is unlimited, while the limited partner’s liability is restricted to the amount of his investment. 
      <br /><br />
      To register an LLP, you would be required to provide the following;
      <ol>
        <li>Minimum of two names for reservation. The names must end with the word “Limited Partnership” or “LP”.</li>
        <li>Address of the business.</li>
        <li>Full name, phone number, email address and residential address of all partners.</li>
        <li>ID card of all partners.</li>
        <li>E signature of all partners.</li>
        <li>A partnership agreement.</li>
      </ol>
      `,
  },
  {
    question: "What are the requirements to incorporate in Ghana?",
    answer: `To incorporate a company in Ghana, you will be required to provide the following document/information:  
      <ol>
        <li> Proposed name of the operating company.   </li>
         <li>Details of Directors, Shareholders, Secretary (if required), and Beneficial owners of shares. To set up a corporate bank account, it is recommended that one of the directors is a Ghanaian or a foreigner with a work permit.</li>
        <li> Details of auditor (If you do not have one, one would be appointed for you).</li>
         <li> Company’s registered address, digital address and postal address in Ghana.</li>
        <li>The share-capital of the company (foreign shareholders have a higher minimum required shareholding)</li>
         <li>Tax Identification Number (TIN) of Shareholders, Directors and Secretary (if you do not  already have a TIN, Norebase can obtain one for you)</li>
        <li> Notarised Incorporation documents of the parent company (if any) showing the shareholders</li>
        <li> Copies of international passports or Ghana Card, and digital passport photographs of the directors, shareholders, secretary, and auditors.</li>
      </ol>
      `,
  },
  {
    question:
      "Do I get the license to use my trademark anywhere provided I register in Nigeria?",
    answer: `Trademark rights are territorial. A Nigerian trademark registration does not extend beyond geographical limits of Nigeria. A registered Nigerian trademark does not protect the mark from being used in a different country`,
  },
  {
    question: "How long does incorporation take in all the countries?",
    answer: `Each country has different timelines. However, it takes an average of 5 - 7 business days from the receipt of full and complete documentation and fees.`,
  },
  {
    question: "What is EIN and why do I need it?",
    answer: `An EIN (Employer Identification Number) is a unique nine-digit number that identifies your business for tax purposes. It's similar to a Social Security number but is meant for business related items only. As a business owner, you'll need an EIN to open a business bank account, apply for business licenses and file your tax returns.`,
  },
  {
    question: "Do I retain 100% of my company after applying with norebase?",
    answer: `Yes, all business owners retain 100% of the business after getting incorporated through us.
      `,
  },
  {
    question: "Do the incorporation setup include tax setup",
    answer: `YES. Norebase provides a package, and the client can opt for tax registration along with the incorporation as an add-on service.`,
  },
  {
    question: "Can you convert an LLC to a C-corp.",
    answer: `Yes, we can. The process is called a statutory conversion`,
  },
  {
    question:
      "Can a CEO double as the president and CFO in Delaware incorporation.",
    answer: `Yes, one person (U.S. or foreign) can be the President, Secretary, Treasurer, Sole Director and sole stockholder of a Delaware Corporation. Also, one person (U.S. or foreign) can be the member and manager of an LLC.`,
  },
  {
    question:
      "What are the documents I will need to incorporate a Delaware C-corp ",
    answer: `We only need your international passport to verify the identity of the shareholders and directors of the company.`,
  },
  {
    question:
      "In addition to helping with registration, do you also help with bank accounts?",
    answer: `Yes we assist to set up corporate bank accounts.`,
  },
  {
    question:
      "Does Norebase have a system for checking the availability of a trademark",
    answer: `That is the first step of registering a trademark. Norebase conducts a search to see the availability of that mark, and reverts to the client.`,
  },
  {
    question: "Does Norebase set up non-profit in US",
    answer: `Yes. Norebase can assist to set up non-profit companies in the US. Reach out to us at support@norebase.com `,
  },
  {
    question:
      "What are the tax implications of setting up in the US when one is resident in Nigeria",
    answer: `This depends on the type of US Company. An LLC files taxes on the personal income derived by its owners from the business at the US personal tax rate, while a C-corp files tax returns of the company separate from its founders at the US companies income tax rate.`,
  },
  {
    question: "Does Norebase help with incorporation in Seychelles",
    answer: `Not currently`,
  },
];

const faqArray = questions.map((faq, index) => {
  return (
    <li className="faq-item" key={index} onClick={openFAQ}>
      <div className="question">
        <span>{faq.question}</span>
        <ArrowRight className="arrow-right" />
        <ArrowDown className="arrow-down" />
      </div>
      <p
        className="answer"
        dangerouslySetInnerHTML={{ __html: faq.answer }}
      ></p>
    </li>
  );
});
function closeItem(faq) {
  faq.removeClass("open");
  let text = faq.find("p");
  text.slideUp();
}
function openItem(faq) {
  faq.addClass("open");
  let text = faq.find("p");

  text.slideDown();
}
function openFAQ(event) {
  let faq = $(event.target).closest("li");

  if (faq.hasClass("open")) {
    closeItem(faq);
  } else {
    let faqs = faq.parent().children();
    let id = faqs.index(faq);
    faqs.each(function (index) {
      if ($(this).hasClass("open") && index !== id) {
        closeItem($(this));
      }
    });

    openItem(faq);
  }
}

function FAQs() {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.norebase.com` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  return (
    <main className="faq-page">
      <Head>
        <title>FAQS | Norebase </title>
        <meta
          name="description"
          content="Norebase Frequently Asked Questions"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <section className="hero-section">
        <div className="wrap">
          <h1>Frequently Asked Questions</h1>
          {/* <p>
            If others are asking, then you're probably thinking the same thing.
            Here are some answers that would help.
          </p>
          <input type="text" placeholder="Type your question here" /> */}
        </div>
      </section>
      <section className="faqs-section">
        <div className="wrap">
          {/* <nav className="faqs-nav">
            <ul className="products">
              <li>Start</li>
              <li>Trademark</li>
              <li className="active">Business name</li>
            </ul>
          </nav> */}
          <div className="faqs">
            <ul className="faq-list">{faqArray}</ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default FAQs;

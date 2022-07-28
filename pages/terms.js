import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

function Terms() {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.norebase.com` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  return (
    <main className="main">
      <Head>
        <title>Terms And Conditions | Norebase</title>
        <meta name="description" content="Norbase Terms and Conditions" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <section className="privacy_container">
        <div className="privacy_title">
          <p>NOREBASE TERMS OF USE</p>
        </div>
        <div className="privacy_body">
          <p>
            These terms and conditions (the <span>“Terms”</span>) govern the use
            and availability of all Norebase websites and applications
            (collectively, the <span>"Sites"</span>) as well as services (the{" "}
            <span>"Service"</span>) owned, offered and operated by{" "}
            <span>NOREBASE LIMITED</span> or its affiliated companies. By
            registering for or otherwise using any of the Sites or Services (as
            defined below) or accessing any content or material (the{" "}
            <span>"Materials"</span>) that Norebase makes available through the
            Sites or Services, the Client agrees to these Terms:
          </p>
          <p>
            <span>1. Definitions</span>
          </p>
          <p>
            In these Terms, the following words and phrases shall, save where
            the context otherwise requires, have the following meanings:
          </p>
          <p>
            <span>"Agreement"</span> means any agreement (whether or not in
            writing or executed) entered into by Norebase with the Client,
            relevant to such Client, in relation to the provision of Services;
          </p>
          <p>
            <span>"Business Day"</span> means any day between Monday and Friday
            and excluding weekends and recognized public holidays in Nigeria;
          </p>
          <p>
            <span>"CDD"</span> means client due diligence documentation and
            information;
          </p>
          <p>
            <span>"Client"</span> means any natural or legal person (Entity) who
            has entered into an Agreement with Norebase (or on whose behalf
            Norebase has been engaged), in relation to the provision of Services
            or at whose request Norebase shall have agreed to provide Services;
          </p>
          <p>
            <span>"Client Material"</span> means all (or any) information,
            documentation and certifications relating to a Client, including
            (without limitation) details of their legal and beneficial owners
            and controllers, the Client’s relationship with Norebase, accounts
            established for a Client, a person’s name, address, place of
            residence (or registered office), nationality, tax status, date and
            place of birth (if a natural person), social security or other
            applicable identification number and any other CDD;
          </p>
          <p>
            <span>"Company"</span> means a company proposed to be set-up or
            established in any jurisdiction by Norebase upon the Client’s
            request;
          </p>
          <p>
            <span>"Fee Schedule"</span> means any schedule of fees and charges
            for the time being in force and issued by Norebase in relation to
            any of the Services, or any fee schedule as set out or referred to
            in the Agreement;
          </p>
          <p>
            <span>"Insolvency"</span> means any form of insolvency proceeding
            such as liquidation, creditors’ (insolvent) winding-up,
            administration or other equivalent or similar procedure in any
            jurisdiction;
          </p>
          <p>
            <span>"Norebase website"</span> means www.norebase.com;
          </p>
          <p>
            <span>"Officer"</span> means a duly appointed officer (including,
            where relevant, a director, representative, employee or trustee) of
            a Client;
          </p>
          <p>
            <span>"Relevant Sums"</span> means any fees, taxes, disbursements or
            expenses: (a) due to Norebase; (b) which Norebase is liable to pay
            in respect or on behalf of a Client; or (c) in respect of which a
            Client otherwise becomes liable to Norebase (in any manner);
          </p>
          <p>
            <span>"Relevant Jurisdiction(s)"</span> means the country or
            jurisdiction where the Company is purported to be established;
          </p>
          <p>
            <span>"Services"</span> means the company incorporation service
            offered by Norebase to the Client;
          </p>
          <p>
            <span>"Termination"</span> in connection with a Client means
            termination of the provision of the Services to, on behalf of or in
            connection with, such Client, pursuant to the terms hereof.
          </p>
          <p>
            <span>2. Scope of Terms</span>
          </p>
          <p>
            2.1 These Terms shall form an integral part of any Ordering Document
            completed by the Client for the provision of the Service by
            Norebase, either by way of online order or paper form. These Terms,
            the Ordering Document and the{" "}
            <Link href="/privacy">
              <a href="">Privacy Policy</a>
            </Link>{" "}
            (hereby incorporated by reference) form a binding agreement between
            Norebase and the Client (collectively, this <span>"Agreement"</span>
            ).
          </p>
          <p>
            2.2 In the event of any conflict between these Terms and the
            provisions of any written agreement, the provisions of the agreement
            shall prevail over these Terms.
          </p>
          <p>
            2.3 NOREBASE reserves the right to vary these Terms at any time and
            for any reason. Where this is the case, Norebase shall use its
            reasonable endeavors to inform the Client of such variation as it
            considers material to the Client as soon as is reasonably practical.
          </p>
          <p>
            2.4 Notwithstanding Clause 2.3 above, publication of such variation
            on the Norebase website or Sites shall constitute adequate notice to
            the Client and the Client shall be bound by the varied terms as
            provided on the Sites.
          </p>
          <p>
            <strong>3. Scope of the Services</strong>
          </p>
          <p>
            NOREBASE has built a digital product (<span>"Product"</span>) which
            performs a wide range of services including the incorporation of
            business entities, in such jurisdictions as may be specified, listed
            and identified from time to time on the Sites.
          </p>
          <p>
            <strong>4. Representations and Warranties</strong>
          </p>
          <p>
            4.1 By using the Services, the Client represents and warrants the
            following:
          </p>
          <ul>
            <li>
              that it has the legal capacity to enter into this Agreement and in
              the case of an individual client, has attained the age of majority
              in his/her country of origin;
            </li>
            <li>
              that it is not precluded by any legal encumbrance from executing
              this agreement;
            </li>
            <li>
              that it has full corporate power and authority to enter into this
              agreement and to perform all its obligations hereunder;
            </li>
            <li>
              that all CDD provided shall be original, authentic and true to the
              best of its knowledge;
            </li>
            <li>
              that it is has not filed any claims, nor is it the subject of any
              voluntary petition for bankruptcy or Insolvency or similar law
              affecting creditors generally;
            </li>
            <li>
              That it shall satisfy all payment requests, wholly and timeously;
            </li>
            <li>
              That it has taken independent legal and tax advice with respect to
              these Terms and Agreement and the provision of the Services by
              Norebase;
            </li>
            <li>
              The source of any funding, other monies or assets provided, to be
              provided or procured to be so provided (whether in relation to the
              Services or for any other purpose), is lawful and not derived
              from, or in any way otherwise connected with, any illegal
              activity;
            </li>
            <li>
              That it will make all such disclosures and report all such matters
              (in full) as it is legally obliged to do (including, without
              limitation, in respect of applicable taxation) and, in each case,
              to the appropriate authority; and
            </li>
            <li>
              the Company will not (directly or indirectly), in any jurisdiction
              be engaged, involved or used in connection with any unlawful
              activity or purpose;
            </li>
          </ul>
          <p>
            4.2 The Client further warrants that he/she/it will not use any of
            the rights granted in any Agreement for any illegal, obscene,
            immoral or defamatory purposes and will not in any way bring
            Norebase into disrepute. The Client will not in any way whatsoever,
            use or combine the Norebase name, in whole or in part, for the
            purpose of trading activities. Norebase reserves the right to
            cooperate with any official investigating authority if required in
            relation to any allegations of impropriety against the Client.
          </p>
          <p>
            4.3 Norebase further reserves the right to refuse any and/or all its
            services to the Client without giving any reason or explanation
            thereto, and cannot, under any circumstances, be held responsible
            for such refusal.
          </p>
          <p>
            <strong>5. User Registration and Account Creation</strong>
          </p>
          <p>
            <span>Account Creation</span>
          </p>
          <p>
            5.1 While the Client can browse the Norebase Website without
            creating a user account (“Account”), access to the Application or
            any of the Services as well as access to materials via the Website
            requires the Client to create an account with Norebase. In creating
            an account, the Client must provide Norebase with accurate and
            complete registration information during the registration process
            including a valid name, email address and password subject to
            certain requirements. Each account registration is for a single user
            only and the Client may not misrepresent his/her/its identity or
            affiliation with any person or organization and the Client may never
            use another person’s account for any reason whatsoever.
          </p>
          <p>
            5.2 The Client may access the profile associated with the Account
            when logged in. The Client may also be able to edit certain
            information including the email address and password provided and
            may also be able to associate additional information with
            his/her/its profile. The Client may also contact Norebase directly
            at <span>support@norebase.com</span> to edit the information
            provided. It is the responsibility of the Client to ensure that the
            contact information provided is accurate and up to date. The profile
            created may also enable the Client to manage other aspects of the
            Account including the nature and frequency of communications
            Norebase sends among others.
          </p>
          <p>
            <span>Account Protection</span>
          </p>
          <p>
            5.3 The Client is responsible for maintaining the security and
            confidentiality of his/her/its username and password and may not
            share the Account information with third parties or allow third
            parties to use the Account. If the Client believes or suspects that
            an unauthorized person has obtained the password or accessed the
            Account, he/she/it must immediately notify Norebase via email at{" "}
            <span>support@norebase.com.</span> Norebase shall not be liable for
            any loss that the Client may incur as a result of a third party
            using the password or Account, either with or without the knowledge
            or permission of the Client. However, the Client may be liable for
            any loss(es) that may be incurred as a result of an unauthorized use
            of the Account.
          </p>
          <p>
            <span>Account Termination</span>
          </p>
          <p>
            5.4 The Client may terminate the Account at any time any for any
            reason by selecting the “Delete Account” option from the profile
            menu or by sending an email to <span>support@norebase.com.</span>{" "}
            The Account may be deleted within 7 days of the Client’s request for
            deletion. Following termination, Norebase may delete any or all of
            the information associated with the Account, including the Client’s
            entitlement to access any materials and other functionality attached
            to the Account, regardless of any value the Client may ascribe to
            such material or functionality. Norebase further disclaims any value
            the Client may attribute to any of the Client’s data stored on its
            servers. Additionally, the Client will not receive any further
            communications from Norebase unless and until a new account is
            created or the Client otherwise requests that such communications be
            provided to him/her/it. Norebase’s rights under this Terms will
            survive any termination of the Account or cessation of the Client’s
            use of the Services.
          </p>
          <p>
            <strong>6. Prohibited Conduct</strong>
          </p>
          <p>
            Unless expressly provided for herein or as agreed upon in a writing
            duly signed by Norebase and the Client, the Client may not under any
            circumstances:
          </p>

          <ul>
            <li>
              Reproduce, download, modify, translate, add to, distribute,
              transmit, share, publish, perform, display, disclose, archive,
              upload, broadcast or sell, sublicense, index or exploit any
              Materials in any medium without Norebase’s prior express written
              permission, either directly or through the use of any device,
              software, Internet site, web-based service or other means;
            </li>
            <li>
              Copy or print any Materials, whether licensed by Norebase or
              otherwise, unless and to the extent it is for the Client’s own
              personal, non-commercial use and the Client must retain all
              trademark, copyright and other proprietary notices contained in
              and on any such Materials;
            </li>
            <li>
              Use the Materials in a manner that suggests an association with
              any of Norebase’s products, services or brands;
            </li>
            <li>
              Remove, alter, bypass, avoid, interfere with, or circumvent any
              copyright, trademarks or other proprietary notices marked on the
              any Materials or any digital rights management mechanism, device
              or other content protection measures either directly or through
              other means;
            </li>
            <li>
              Mirror, frame, screen scrape or deep link to any aspect of the
              Sites or access any Materials through technology or means other
              than those provided or authorized by Norebase;
            </li>
            <li>
              Access the Sites via any automated system, including without
              limitation by “robots,” “spiders,” “offline readers,” etc., or
              otherwise take any action that imposes, or may impose (as
              determined by Norebase in its sole and absolute discretion) an
              unreasonable or disproportionately large load on its
              infrastructure, or attempt to interfere with the proper working of
              the Sites in any other way.
            </li>
            <li>
              Knowingly or recklessly upload invalid data or introduce viruses,
              worms, Trojan horses or other malware or software agents, whether
              harmful or not, or tamper with, impair, damage, attack, exploit,
              or penetrate the Norebase Sites, or otherwise attempt to interfere
              with or compromise the system integrity or security of Norebase or
              any connected networks, or take any action to impact the proper
              operation of the Sites and any person’s or entity’s use or
              enjoyment thereof;
            </li>
            <li>
              Bypass the measures Norebase may use to prevent or restrict access
              to or use of the Sites including by hacking into secured or
              non-public areas, circumventing any fencing mechanisms or
              otherwise;
            </li>
            <li>
              Attempt to reverse engineer any aspect of the Sites or attempt to
              derive the source code (including the tools, methods, processes
              and infrastructure) that enables or underlies the Sites, create
              any derivative works or materials of any kind using any Materials,
              whether or not the Client intends to give away the derivative
              materials free of charge, or otherwise build a business utilizing
              any aspect of the Services.
            </li>
          </ul>
          <p>
            <strong>7. Client Due Diligence Documentation (CDD)</strong>
          </p>
          <p>
            7.1 The Client shall provide Norebase with such information as
            Norebase considers necessary in order to ensure that the Client
            complies with applicable legislation on anti-money laundering and
            due diligence. The Client is responsible for ensuring that the
            information provided to Norebase is correct and represents to
            Norebase that assets or funds introduced to a Company do not
            represent either directly or indirectly the proceeds of a crime or
            other illegal activity. In order to enable Norebase to meet its
            legal obligation, the Client shall keep Norebase fully and promptly
            informed of any changes in the beneficial ownership, shareholding
            and officers of the company. Beneficial owners indicated by the
            Client shall sign a “form” as may be requested in the Agreement. The
            Client shall immediately inform Norebase of the nature of the
            activities of the company and seek Norebase’s prior written consent
            before making any material changes to those activities. Any
            certification must be done in accordance with the requirements of
            the applicable jurisdiction and as per Norebase’s instructions, if
            any. The Client is obligated to provide the requested due diligence
            material prior to the commencement of the Services.
          </p>
          <p>
            7.2 <span>CDD</span> may include, without limitation:
          </p>
          <ul>
            <li>original certified copies of identity documents,</li>
            <li>a proof of legal domicile no older than 3 months,</li>
            <li>certified copies of corporate documentation,</li>
            <li>certified translations where applicable; and</li>
            <li>any other documentation or information as may be required.</li>
          </ul>
          <p>
            <strong>8. Fees and Payment Terms</strong>
          </p>
          <p>
            <span>General</span>
          </p>
          <p>
            8.1 The Client agrees to pay the fees charged and presented on the
            invoice issued by Norebase for the Services or amounts agreed upon
            by Norebase and the Client in any applicable Ordering Document.
            Norebase shall commence an execution phase only after the receipt of
            the full payment of the fees. All fees and charges are payable in
            the currency nominated by NOREBASE, usually USD, and the amount
            shall be computed using the Foreign Exchange Rate and shall be
            determined as of the date of computation. The Client is not
            authorized to withhold fees and interests due to any service,
            guarantee or liability-related claims. In the same manner, any right
            of off-set on the part of the Client is hereby excluded.
          </p>
          <p>
            <strong>Types of fees </strong>
          </p>
          <p>8.2 Norebase shall be entitled to the following fees:</p>
          <ul>
            <li>
              a one-time set-up fee for the company incorporation process to be
              computed based on the cost of incorporation in the Relevant
              Jurisdiction;
            </li>
            <li>
              an agreed annual fixed fee for maintenance and management of the
              Company;
            </li>
            <li>Relevant Sums if applicable; and</li>
            <li>
              Value Added Tax (VAT) to be remitted to the appropriate tax
              authority in the Relevant Jurisdiction.
            </li>
          </ul>
          <p>
            <strong>Specific Card Payment Conditions</strong>
          </p>
          <p>
            8.3 Norebase reserves the right (and the Client hereby irrevocably
            authorizes Norebase) to collect monies in respect of fees for
            Services, taxes, disbursements and expenses from any bank account
            maintained in respect of the Client (whether in the name of the
            Client or Norebase). Any monies required in the settlement of all
            fees, taxes, disbursements and expenses may immediately be debited
            to any such account for the credit of any account of Norebase, which
            shall immediately become entitled to all such monies. (For the
            avoidance of doubt, Norebase will automatically collect monies due
            to it in respect of any Agreement, annual responsibility (or other)
            fees, taxes, disbursements and expenses from any bank account
            maintained in respect of the Client without the prior approval of
            the Client).
          </p>
          <p>
            8.4 WHERE A THIRD PARTY MAKES A CARD PAYMENT TO NOREBASE ON BEHALF
            OF THE CLIENT, THE CLIENT WARRANTS THAT THE CARDHOLDER HAS
            AUTHORIZED THE PAYMENT, AS WELL AS THE USE OF THE CARD AND
            PROCESSING OF THE CARD DATA BY NOREBASE IN ACCORDANCE WITH THE
            AGREEMENT. THE CLIENT AGREES TO CAUSE THE CARDHOLDER TO SIGN AND
            COMPLY WITH A CARDHOLDER STATEMENT. NOREBASE SHALL NOT BE LIABLE FOR
            ANY UNAUTHORISED THIRD PARTY PAYMENTS.
          </p>
          <h4>9. Exclusivity</h4>
          <p>
            Norebase reserves the right to provide services to other entities
            and clients in its absolute discretion and without prior reference
            to (or approval from) any other Client.
          </p>
          <h4>10. Communication and Instructions</h4>
          <p>
            The Client and Norebase may send to each other instructions,
            notices, documents or any other communication either by postal mail,
            e-mail, or via the Sites. Norebase may also act on original,
            written, facsimile, e-mail or oral guidance or instructions from the
            Client or a duly appointed agent of the Client. Where guidance or
            instructions (in any form, including by telephone) are received on
            behalf of the Client, this shall be entirely at the Client’s own
            risk. Where guidance or instructions are received, purporting to
            come from the Client or a duly appointed agent of the Client,
            Norebase shall be entitled to accept such guidance or instructions
            as authentic and to act on them accordingly. Norebase shall not be
            held liable (in any way whatsoever) as a consequence of acting on
            any such guidance or instructions. In the event the Client
            terminates all NOREBASE Services for one or several registered
            Companies, any notice of termination served by email must be sent to{" "}
            <span>support@norebase.com.</span>
          </p>
          <h4>11. Client acknowledgements</h4>
          <p>The Client acknowledges that:</p>
          <p>
            a. Norebase is required by law and regulation in the UK to obtain
            CDD as part of its client take-on procedures in order to identify
            and verify the identity of the Client (and certain persons connected
            thereto), unless an exemption is available;
          </p>
          <p>
            b. Norebase is at liberty, in its absolute discretion, to determine
            the time at which (and the form in which) Client Material is
            required to be delivered to it;
          </p>
          <p>
            c. if Client Material is not made available to Norebase (or is not
            made available by the time requested or in a form acceptable to
            Norebase), Norebase may (and without liability in respect of so
            doing) terminate the Agreement with the Client with immediate
            effect;
          </p>
          <p>
            d. Norebase is bound by the requirements of applicable data
            protection legislation in the UK (General Data Protection
            Regulation) and other Relevant Jurisdictions.
          </p>
          <p>
            <strong>12. Confidentiality</strong>
          </p>
          <p>Norebase shall keep confidential all Client Material unless:</p>
          <p>
            a. the information concerned is in the public domain (other than as
            a consequence of a disclosure made by Norebase in violation of these
            Terms or the Agreement);{" "}
          </p>
          <p>
            b. Norebase is required (or considers it necessary) to disclose the
            information concerned by virtue of:
          </p>
          <ul>
            <li>
              the law or regulation (including, in particular, but without
              limitation, as may relate to anti-money laundering or taxation
              matters) in the UK or another Relevant Jurisdiction;{" "}
            </li>
            <li>an order of a court of competent jurisdiction; or</li>
            <li>
              an instruction or direction from a government department or
              regulatory authority in the UK or another Relevant Jurisdiction,
              which has power to compel such disclosure;
            </li>
          </ul>
          <p>
            c. Norebase is authorized to disclose the information concerned by
            the Client;
          </p>
          <p>d. Norebase considers that such disclosure is:</p>
          <ul>
            <li>
              necessary or appropriate in furtherance of the provision of the
              Services;{" "}
            </li>
            <li>
              (otherwise) conducive to the more effective, efficient or
              economical provision of the Services;
            </li>
            <li>(otherwise) in the best interest of the Client; or</li>
            <li>
              necessary in order to properly defend any action or claim brought
              by any person (whether the Client or otherwise);
            </li>
          </ul>
          <p>
            e. Norebase makes a disclosure which it considers appropriate to:
          </p>
          <ul>
            <li>its professional indemnity insurer from time to time; or</li>
            <li>a representative of the Norebase team from time to time.</li>
          </ul>
          <p>
            <strong>
              13. Appointment of a director and other Officer of the Company
            </strong>
          </p>
          <p>
            The Client certifies that each of the directors or other Officer to
            be so-named in the Company’s incorporation documents, in accordance
            with a submitted service request, has signed a Consent Form and has,
            in fact, consented to be a director or officer of the Company upon
            its incorporation, and that each director or officer who is a
            natural person has attained the age of 18 years.
          </p>
          <h4>14. Liabilities</h4>
          <p>
            14.1 Without prejudice to any specific provision, any damage
            resulting from the error or omission of Norebase, its directors,
            employees or agents shall be borne by the Client, except it can be
            proven that Norebase, its directors, employees or agents acted with
            gross negligence or fraud or any other liability that cannot be
            excluded pursuant to applicable law. Norebase will not be liable for
            any loss sustained as a result of any mechanical breakdown, strike,
            delay or failure of any staff, manager or caretaker to perform its
            duties.
          </p>
          <p>
            14.2 Any damage whatsoever caused by or arising from, directly or
            indirectly, the error, failure, negligence, act or omission of any
            other person, system, institution or payment infrastructure shall be
            borne by the Client.
          </p>
          <p>
            14.3 Damage or loss resulting from the use of postal services,
            telegraph, telex, facsimile, telephone, other means of
            communications or means of transportation, especially loss resulting
            from delay, misunderstanding, mutilation, abuse by third parties or
            duplication of copies, shall be borne by the Client, unless it can
            be proven that Norebase acted with gross negligence.
          </p>
          <p>
            14.4 Norebase will not be held responsible either in the event of a
            breakdown of any of the communication means necessary for the
            performance of its services under this Agreement or for any mail or
            calls received for the purposes of its services under this
            Agreement.
          </p>
          <h4>15. Force Majeure</h4>
          <p>
            Norebase shall not be liable for the failure to perform any of its
            obligations under this Terms as a result of the occurrence of a
            Force Majeure event or situation which makes it impossible for
            Norebase to perform its obligations and which, for the purposes of
            this Terms, includes but is not limited to acts of God, national
            emergencies, prohibitive decisions of government or local authority,
            war or civil conflict. In the event of a Force Majeure situation or
            event, the performance of the obligations of this Agreement shall be
            extended by the period of the Force Majeure situation or event
            provided it does not exceed thirty (30) days. In the event that the
            Force Majeure situation or event continues for a period of thirty
            (30) days or more either Party shall be entitled to terminate this
            Terms forthwith by written notice to the other Party.
          </p>
          <h4>16. Termination of Services</h4>
          <p>
            Either Norebase or the Client may terminate the Agreement at the end
            date stated therein, or at the end of any extension or renewal
            period, by giving at least one (1) month’s written notice to the
            other. Termination shall be without prejudice to any rights or
            liabilities of any party either arising prior to termination or
            arising in respect of any act or omission occurring prior to
            termination. The right to immediate termination for good cause
            remains unaffected. In case of violation of applicable laws or these
            Terms by the Client, Norebase may terminate any Agreement with
            immediate effect, including any Agreement regarding additional
            services provided by Norebase. It is explicitly agreed and
            understood that Norebase cannot be held liable for any damage
            following such termination.
          </p>
          <h4>17. Refunds</h4>
          <p>
            17.1 The Client will be entitled to receive refunds (excluding
            Relevant Sums and VAT) in the following manner and upon the
            occurrence of the following circumstances:
          </p>
          <ul>
            <li>
              where NOREBASE is unable to complete the incorporation process for
              any reason and through no fault of the Client or as a result of a
              Force Majeure Event, the Client shall be entitled to a full refund
              of the set-up fee;
            </li>
            <li>
              where the Client has failed to provide the requisite documents
              requested for by NOREBASE to complete the incorporation process,
              he/she/it shall be entitled to a full refund excluding all
              processing fees already expended by Norebase; and
            </li>
            <li>
              where the Client makes a request for a refund for any reason
              within one (1) week of payment of the set-up fee, he/she/it shall
              be entitled to a full refund; however, Norebase shall be entitled
              to make applicable deductions for any processes which may have
              begun.{" "}
            </li>
          </ul>
          <p>
            17.2 Refunds will be done only through the Original Mode of Payment.
          </p>
          <h4>18. Miscellaneous</h4>
          <p>
            <strong>Severability</strong>
          </p>
          <p>
            If any term or condition contained herein is or may become under any
            written law, or is found by any court or administrative body of
            competent jurisdiction to be illegal, invalid, prohibited or
            unenforceable then such term or condition shall be ineffective to
            the extent of such illegality, invalidity, prohibition or
            unenforceability. The remaining terms or conditions herein shall
            remain in full force and effect. For the avoidance of doubt, nothing
            in these Terms is intended to (or shall) limit or exclude any
            liability which cannot lawfully be limited or excluded pursuant to
            the English law.
          </p>
          <p>
            <strong>Assignment</strong>
          </p>
          <p>
            To successfully execute the Service, Norebase reserves the right to
            engage Partners in Relevant Jurisdictions who are bound by the
            relevant and applicable provisions of these Agreements. The rights
            and obligations of the Client resulting from this Terms or any other
            Agreement can only be transferred to third parties with the express
            authorization and written consent of Norebase.
          </p>
          <p>
            <strong>Governing Law</strong>
          </p>
          <p>
            These Terms shall be governed by and construed in accordance with
            laws of England and Wales and the English courts shall have
            exclusive jurisdiction to determine all disputes that may arise in
            connection with it.
          </p>
          <p>
            <strong>Dispute Resolution</strong>
          </p>
          <p>
            Efforts shall be made to resolve all disputes (which may arise out
            of or may be in connection with these Terms) amicably. Any dispute
            arising out of these Terms, which cannot be settled, by mutual
            agreement/negotiation within one (1) month shall be referred to and
            finally resolved by arbitration under the London Court of
            International Arbitration (LCIA) Rules which Rules are deemed to be
            incorporated by reference into this Clause. The number of
            arbitrators shall be one (1). The seat of arbitration shall be
            London, England. The language to be used in the arbitration
            proceedings is English Language.
          </p>
          <p>
            <strong>Comments, Complaints & Queries</strong>
          </p>
          <p>
            All comments, complaints and queries may be directed to Norebase via
            the appropriate channels listed in the Sites or via email at{" "}
            <span>support@norebase.com.</span>
          </p>
          <p>
            <span>Last updated August 26, 2021</span>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Terms;

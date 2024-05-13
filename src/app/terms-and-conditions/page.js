"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="w-full flex flex-col gap-0 overflow-hidden font-firaSansCondensed">
      <Header />
      <div className="py-20 px-2 md:px-10">
        <div className="text-xl font-semibold my-2">
          *Africa NFT Metaverse Conference Privacy Policy*
        </div>
        <div className="text-md font-light my-5">
          {" "}
          Effective Date: 10/05/2024{" "}
        </div>
        <div className="text-md font-light my-2">
          Welcome to the Africa NFT Metaverse Conference. Your privacy and the
          security of your personal information are of paramount importance to
          us. This Privacy Policy outlines the types of information we collect
          from you, how we manage and protect this information, and our policy
          on not sharing your data with third parties.
        </div>
        <div className="text-lg font-semibold my-5">
          1. Information Collection
        </div>
        <div className="text-md font-light my-2">
          We collect information to provide better services to all our
          participants. The information we collect includes:
        </div>
        <div className="text-md font-light my-2">
          <span className="font-semibold">
            - Personal Identification Information:{" "}
          </span>
          Name, email address, phone number, and mailing address.
        </div>
        <div className="text-md font-light my-2">
          <span className="font-semibold">
            - Payment and Billing Information:{" "}
          </span>
          Credit/debit card details and billing address, which are necessary for
          processing conference fees and transactions.
        </div>
        <div className="text-md font-light my-2">
          <span className="font-semibold">
            - Interactions and Preferences:{" "}
          </span>
          Data about your interactions with our website, including the choices
          you make and the products and services you show interest in.
        </div>
        <div className="text-lg font-semibold my-5">2. Use of Information</div>
        <div className="text-md font-light my-2">
          The information we collect is used to:
        </div>
        <div className="text-md font-light my-2">
          - Process registrations and transactions.
        </div>
        <div className="text-md font-light my-2">
          - Improve conference planning and logistics.
        </div>
        <div className="text-md font-light my-2">
          - Enhance the safety and security of our online platform.
        </div>
        <div className="text-md font-light my-2">
          - Communicate important information related to the conference,
          including updates and changes.
        </div>
        <div className="text-lg font-semibold my-5">3. Data Protection</div>
        <div className="text-md font-light my-2">
          We implement a variety of security measures to maintain the safety of
          your personal information:
        </div>
        <div className="text-md font-light my-2">
          <span className="font-semibold">- Encryption: </span> Your personal
          information is protected with encryption during transmission over the
          Internet.
        </div>
        <div className="text-md font-light my-2">
          <span className="font-semibold">- Secure Storage: </span>We use secure
          servers where your personal information is stored.
        </div>
        <div className="text-md font-light my-2">
          <span className="font-semibold">- Access Controls: </span>Access to
          personal information is strictly limited to authorized personnel who
          are required to keep the information confidential.
        </div>
        <div className="text-lg font-semibold my-5">
          4. Non-Disclosure of Information
        </div>
        <div className="text-md font-light my-2">
          We do not sell, trade, or otherwise transfer to outside parties your
          personally identifiable information. This does not include trusted
          third parties who assist us in operating our website, conducting our
          business, or serving you, so long as those parties agree to keep this
          information confidential. We may also release your information when we
          believe release is appropriate to comply with the law, enforce our
          site policies, or protect ours or others&apos; rights, property, or
          safety.
        </div>
        <div className="text-lg font-semibold my-5">5. Data Retention</div>
        <div className="text-md font-light my-2">
          We retain your personal data only for as long as necessary to fulfill
          the purposes for which it was collected, including any legal,
          accounting, or reporting requirements.
        </div>
        <div className="text-lg font-semibold my-5">
          6. Rights of Participants{" "}
        </div>
        <div className="text-md font-light my-2"> You have the right to:</div>
        <div className="text-md font-light my-2">
          - Request access to your personal data.
        </div>
        <div className="text-md font-light my-2">
          {" "}
          - Request correction of the personal data that we hold about you.
        </div>
        <div className="text-md font-light my-2">
          {" "}
          - Request erasure of your personal data. - Object to processing of
          your personal data.
        </div>
        <div className="text-md font-light my-2">
          - Request the transfer of your personal data to another service
          provider.{" "}
        </div>
        <div className="text-lg font-semibold my-5">
          7. Changes to Our Privacy Policy
        </div>
        <div className="text-md font-light my-2">
          We may update this privacy policy to reflect changes to our
          information practices. If we make any material changes, we will notify
          you by email (sent to the e-mail address specified in your account) or
          by means of a notice on this website prior to the change becoming
          effective.
        </div>{" "}
        <div className="text-lg font-semibold my-5"> *8. Contact Us*</div>{" "}
        <div className="text-md font-light my-2">
          If you have any questions about this Privacy Policy, the practices of
          this site, or your dealings with this website, please contact us at{" "}
          <Link
            href="https://chat.whatsapp.com/HMYf7iKJqAu24n1prFckmQ"
            className="underline text-blue-400"
          >
            (+234)XXX-XXX-XXXX.
          </Link>{" "}
        </div>
        <div className="text-md font-light my-2">
          We are committed to conducting our conference in accordance with these
          principles in order to ensure that the confidentiality of personal
          information is protected and maintained.
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;

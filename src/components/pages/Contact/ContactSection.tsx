import React, { useState, type JSX } from "react";
import frame from "../../../assets/images/contact/frame-1.svg";
import { ResourcesSection } from "./ResourcesSection";


export const ContactSection = (): JSX.Element => {

  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const internationalOffices = [
    {
      city: "Address in London",
      address: "Fourth Avenue\nStanford Le Hope\nEssex\nSS17 8HN",
      phone: "+44 7576 842 164",
    },
    {
      city: "Address in Lagos",
      address: "19B Adewale Kuku\nLekki Phase 1\nLagos\nNigeria",
      phone: "‪+234 912 222 0444‬",
    },
  ];

  const socialMediaLinks = ["Instagram", "Linkedin", "Facebook"];

const faqData = [
  {
    question:
      "How do I start the process of buying a property through Stelle Homes?",
    answer:
      "The first step is to schedule a consultation with one of our advisors, either in person or virtually. During this meeting, we'll discuss your investment goals, budget, and preferences to help identify the most suitable properties and locations for your needs. From there, we'll guide you through every step of the process, from property viewing to closing the deal.",
  },
  {
    question:
      "As a Nigerian citizen, what are the requirements for purchasing property abroad?",
    answer:
      "Nigerian citizens are generally required to provide valid identification, proof of funds, and sometimes a local bank account for transactions. Our advisors will guide you through the specific legal and regulatory requirements in the country where you intend to purchase property.",
  },
  {
    question:
      "Do you offer property management services for international investors?",
    answer:
      "Yes, we provide comprehensive property management services including tenant sourcing, rent collection, maintenance, and reporting, so you can invest with peace of mind even if you are not physically present.",
  },
  {
    question:
      "How do you handle currency exchange for international transactions?",
    answer:
      "We partner with trusted financial institutions to facilitate secure currency exchange and international transfers. Our advisors will ensure you get competitive rates and that all transactions comply with local regulations.",
  },
  {
    question: "What should I do if I need immediate assistance?",
    answer:
      "If you require urgent support, you can contact us directly via phone, WhatsApp, or email. We prioritize immediate queries and will connect you with an advisor as quickly as possible.",
  },
];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  return (
<div className="w-auto mx-auto">
  <div className="mx-auto p-4 md:p-0 bg-[#fffdf8]">
    <div className=" mx-auto p-4 md:p-0">
        
    {/* Top Section */}
    <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto gap-12 md:gap-16 lg:gap-24 px-4 sm:px-6">
    {/* Column 1: Address + Email */}
    <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-2xl sm:text-3xl text-[#c89901] font-normal font-[Montserrat]">
        Address
        </h2>
        <div className="text-base sm:text-lg text-black leading-relaxed not-italic font-[Montserrat]">
            <a href="tel:+2341234567890" className="hover:text-[#c89901]">
            Nigeria: +234 123 456 7890
            </a>
            <br />
            <a href="tel:+15551234567" className="hover:text-[#c89901]">
            London: +44 7576 842164
            </a>
        </div>

        <p className="text-sm sm:text-base text-[#0a0000] font-[Montserrat]">
        Mon-Fri: 9:00 AM - 5:00 PM
        </p>

        <h2 className="text-2xl sm:text-3xl text-[#c89901] font-normal mt-[108px] font-[Montserrat] mb-4">
        Email Us
        </h2>
        <div className="text-base sm:text-lg text-black font-[Montserrat]">
        General Inquiries: <br />
        <a href="mailto:info@stellehomes.com" className=" hover:text-[#c89901]">
            info@stellehomes.com
        </a>
        </div>
    </div>

    {/* Column 2: International Presence */}
    <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-2xl sm:text-3xl text-[#c89901] font-normal font-[Montserrat]">
        Our Address
        </h2>
        {internationalOffices.slice(0, 1).map((office) => (
        <div key={office.city} className="flex flex-col gap-2">
            <h3 className="text-base sm:text-lg text-[#c89901] font-normal font-[Montserrat]">
            {office.city}
            </h3>
            <address className="text-sm sm:text-base text-black font-[Helvetica] not-italic">
            {office.address.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                {line}
                <br />
                </React.Fragment>
            ))}
            <a
                href={`tel:${office.phone.replace(/\s/g, "")}`}
                className="hover:text-[#c89901]"
            >
                Tel: {office.phone}
            </a>
            </address>
        {/* Social Media */}
        <div className="mt-12">
        <h2 className="text-2xl sm:text-3xl text-[#c89901] font-normal font-[Montserrat] mb-4">
            Social Media
        </h2>
        <nav className="flex flex-col gap-1 font-[Montserrat]">
            {socialMediaLinks.map((platform) => (
            <a
                key={platform}
                href={`#${platform.toLowerCase()}`}
                className="text-base sm:text-lg text-[#0a0000] font-[Helvetica] hover:text-[#c89901]"
            >
                {platform}
            </a>
            ))}
        </nav>
        </div>
        </div>
        ))}
    </div>

    {/* Column 3: 3rd International Office + Social Media */}
    <div className="flex-1 flex flex-col gap-8 mt-[60px]">
        {/* 3rd International Office */}
        <div>
        <h3 className="text-base sm:text-lg text-[#c89901] font-normal font-[Montserrat] mb-2">
            {internationalOffices[1].city}
        </h3>
        <address className="text-sm sm:text-base text-black font-[Helvetica] not-italic">
            {internationalOffices[1].address.split("\n").map((line, i) => (
            <React.Fragment key={i}>
                {line}
                <br />
            </React.Fragment>
            ))}
            <a
            href={`tel:${internationalOffices[1].phone.replace(/\s/g, "")}`}
            className="hover:text-[#c89901]"
            >
            Phone: {internationalOffices[1].phone}
            </a>
            <br />
        </address>
        </div>
    </div>
    </div>



    {/* Form Section */}
    <div className="flex flex-col md:flex-row gap-8 mt-8 mb-12 md:mb-20 md:mt-20 px-4 sm:px-6 max-w-[1200px] mx-auto">
    {/* Left Column: Heading */}
    <div className="w-full md:w-[375px] flex-shrink-0">
        <h1 className="text-3xl sm:text-[35px] text-[#c89901] font-normal font-[Montserrat] leading-snug sm:leading-[43px]">
        Send Us a <br />
        Message
        </h1>
    </div>

    {/* Right Column: Form */}
    <form
      action="https://formspree.io/f/xandwvze"
      method="POST"
      className="flex-1 flex flex-col gap-4 w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full h-[52px] px-4 sm:px-6 bg-[#f6f4f1] rounded-lg text-[#686352] font-[Montserrat]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          required
          className="w-full h-[52px] px-4 sm:px-6 bg-[#f6f4f1] rounded-lg text-[#686352] font-[Montserrat]"
        />
        <input
          type="tel"
          name="telephone"
          placeholder="Telephone"
          className="w-full h-[52px] px-4 sm:px-6 bg-[#f6f4f1] rounded-lg text-[#686352] font-[Montserrat]"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="w-full h-[52px] px-4 sm:px-6 bg-[#f6f4f1] rounded-lg text-[#686352] font-[Montserrat]"
        />
      </div>

      <select
        name="inquiryType"
        className="w-full h-[52px] px-4 sm:px-6 bg-[#f6f4f1] rounded-lg text-[#686352] font-[Montserrat]"
      >
        <option value="">Inquiry Type</option>
        <option value="general">General Inquiry</option>
        <option value="nigerian-property">Nigerian Property</option>
        <option value="international-property">International Property</option>
        <option value="investment-advisory">Investment Advisory</option>
        <option value="property-management">Property Management</option>
      </select>

      <textarea
        name="message"
        placeholder="Message"
        required
        className="w-full h-[102px] px-4 sm:px-6 py-4 bg-[#f6f4f1] rounded-lg text-[#686352] font-[Montserrat] resize-none"
      />

      <select
        name="contactMethod"
        className="w-full h-[52px] px-4 sm:px-6 bg-[#f6f4f1] rounded-lg text-[#686352] font-[Montserrat]"
      >
        <option value="">Preferred Contact Method</option>
        <option value="email">Email</option>
        <option value="phone">Phone</option>
        <option value="whatsapp">WhatsApp</option>
      </select>

      <button
        type="submit"
        className="w-full h-[52px] bg-[#f7bd01] rounded-lg hover:bg-[#e6a800] text-[#05372d] font-[Helvetica] text-base transition-colors mt-4"
      >
        Send message
      </button>
    </form>

    </div>

    </div>
</div>

    <ResourcesSection />
    
<div className="max-w-[1213px] mx-auto p-4 md:p-0 bg-[#fffdf8]">
    
    <section className="flex flex-col items-center mt-40 mx-auto mb-16">
    <h2 className="text-[35px] text-center font-normal font-[Montserrat] text-black leading-[43px] mb-16">
        Your questions answered
    </h2>

    <div className="flex flex-col gap-4 w-full max-w-[1172px]">
        {faqData.map((faq, index) => (
        <div key={index} className="flex flex-col w-full">
            <button
            onClick={() => toggleFaq(index)}
            className="flex items-center justify-between w-full px-5 py-6 bg-[#f6f5f1] rounded-[15px] hover:bg-[#f0efeb] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c89901] focus:ring-offset-2"
            aria-expanded={expandedFaq === index}
            >
            <span className="text-lg text-[#686352] font-normal font-[Montserrat] text-left">
                {faq.question}
            </span>

            {/* SVG */}
            <img
                src={frame}
                alt={expandedFaq === index ? "Collapse" : "Expand"}
                className={`w-4 h-4 md:h-[17px] ${expandedFaq === index ? "filter invert" : ""}`}
            />
            </button>

            {expandedFaq === index && faq.answer && (
            <div className="mt-3 px-4 text-base text-black font-normal font-[Montserrat] leading-6">
                {faq.answer}
            </div>
            )}
        </div>
        ))}
    </div>
    </section>
    </div>

  </div>
);
};
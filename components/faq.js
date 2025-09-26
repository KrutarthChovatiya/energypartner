import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What services does ENERGY PARTNER provide?",
    answer: "We provide high-quality engineering products, packages, and end-to-end solutions across industries like Oil & Gas, Metals & Mining, FMCG, and Infrastructure.",
  },
  {
    question: "Do you supply both products and services?",
    answer: "Yes. We specialize in products like piping, valves, expansion joints, and also offer packages like HVAC, cranes, and engineering services.",
  },
  {
    question: "How does your blockchain-enabled business model work?",
    answer: "Our model ensures secure negotiations, compliance, data privacy, and tamper-proof transactions, acting as a reliable bridge between suppliers and customers.",
  },
  {
    question: "How experienced is your team?",
    answer: "Our team consists of technocrats with over a decade of experience and domain expertise in engineering solutions.",
  },
  {
    question: "What makes ENERGY PARTNER different from competitors?",
    answer: "We focus on transparency, value addition, and building long-term relationships through trust and technical expertise.",
  },
  {
    question: "How can I start working with ENERGY PARTNER?",
    answer: "You can reach us via phone or email. Our team will discuss your requirements and provide a proposal tailored to your needs.",
  },
  {
    question: "Do you work with international clients and suppliers?",
    answer: "Yes, we collaborate with global suppliers and customers while ensuring compliance with international standards.",
  },
  {
    question: "How do you ensure confidentiality in deals?",
    answer: "Through blockchain-enabled negotiations, we guarantee secure, private, and tamper-proof transactions.",
  },
];

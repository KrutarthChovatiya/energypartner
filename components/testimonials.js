import Image from "next/image";
import React, { useRef } from "react";
import Container from "./container";

const userOneImg = "/images/user1.jpg";
const userTwoImg = "/images/user2.jpg";
const userThreeImg = "/images/user3.jpg";
const userFourImg = "/images/user4.jpg";
const userFiveImg = "/images/user5.jpg";
const userSixImg = "/images/user6.jpg";

const testimonials = [
  {
    text: "Energy Partner has been instrumental in strengthening our position in the petrochemicals sector. Their deep industry knowledge and strategic guidance helped us gain a strong foothold in the Ball Valves market, enabling us to compete effectively and secure long-term relationships with key clients.",
    image: userOneImg,
    name: "Managing Director",
    title: "Leading Ball Valve Company",
  },
  {
    text: "Working with Energy Partner has been a turning point for our business. Their expertise and market access have enabled us to establish turnkey EPC contracts for HVAC and plant erection projects across India. Their professional approach and network have added tremendous value to our growth journey.",
    image: userTwoImg,
    name: "Vice President",
    title: "Leading Turnkey Contractor",
  },
  {
    text: "Energy Partner played a pivotal role in helping us secure the historic turnkey Engineering, Procurement, and Fabrication (EPF) contract for cranes. Their strategic insights and ability to connect us with the right opportunities transformed this milestone into a reality for our company.",
    image: userThreeImg,
    name: "Promoter",
    title: "Crane Manufacturing Company",
  },
  {
    text: "As an MSME, scaling up against larger players was always a challenge. With Energy Partner’s support, we achieved a 30% CAGR in revenue and 15%+ CAGR in profit over the last three years. Their guidance helped us reposition ourselves from a comparatively smaller organization into a serious competitor among large valve manufacturers.",
    image: userFourImg,
    name: "Promoter",
    title: "MSME Valve Company",
  },
  {
    text: "Through our transparent partnership with Energy Partner, we successfully cracked our first large-scale contracts in India. Their support and market expertise enabled us to showcase our manufacturing capabilities and establish a strong presence in the Indian market.",
    image: userFiveImg,
    name: "President",
    title: "Pipe Spool Fabrication Company (China)",
  },
  {
    text: "Energy Partner guided us in developing a new product line specifically for the refinery and petrochemicals sector in India. With their support, we introduced a first-of-its-kind innovative product at the national level that directly competes with leading European manufacturers. This breakthrough has enabled us to secure a market position of over USD 5M per annum.",
    image: userSixImg,
    name: "Owner",
    title: "Expansion Joints Manufacturer",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth * 0.9; // 90% of visible area

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Container>
      <div className="relative">
        {/* SCROLL CONTAINER */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto overflow-y-hidden flex-nowrap space-x-6 scroll-smooth snap-x snap-mandatory no-scrollbar px-2"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="snap-start shrink-0 min-w-[90%] sm:min-w-[70%] md:min-w-[45%] lg:min-w-[33%] my-10 mx-5"
            >
              <div className="flex flex-col justify-between text-justify h-full px-8 py-10 rounded-2xl dark:bg-trueGray-800 shadow-2xl transition-transform duration-300 transform hover:scale-105">
                <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-0">{t.text}</p>
                <Avatar image={t.image} name={t.name} title={t.title} />
              </div>
            </div>

          ))}
        </div>

        {/* ARROWS */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-2 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14" style={{ filter: 'blur(3px)' }}>
        <Image
          src={props.image}
          width={56}
          height={56}
          alt="Avatar"
          className="rounded-full"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

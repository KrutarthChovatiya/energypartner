import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo, benefitThree } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import AutoScrollCarousel from "../components/AutoScrollCarousel";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));


export default function Home() {
  return (
    <>
      <Head>
        <title>Energy Partner – Engineering Products & End-to-End Solutions</title>
        <meta
          name="description"
          content="Energy Partner is your trusted partner for engineering products, packages, and end-to-end solutions. Serving Oil & Gas, Metals & Mining, FMCG, and Infrastructure with transparency, expertise, and innovation."
        />
        <link
          rel="icon"
          href={
            process.env.NODE_ENV === "production" && !process.env.VERCEL
              ? "/favicon.ico"  // GitHub Pages
              : "/favicon.ico"                 // local dev or Vercel
          }
        />
      </Head>

      <Navbar />
      <Hero />
      <div className="flex justify-center">
        <div className="max-w-2xl mt-1 text-3xl font-bold leading-snug tracking-tight text-indigo-800 lg:leading-tight lg:text-5xl dark:text-white">
          Industries We Serve
        </div>
      </div>
      <AutoScrollCarousel scrollSpeed={1} className="my-custom-class">
        <div className="mx-[5%]">
      <SectionTitle className="break-words"  title="Buildings & Factories">
        FMCG projects and industrial facilities
      </SectionTitle>
        </div>
        <div className="mx-[5%]">
      <SectionTitle className="break-words"  title="Oil & Gas">
        FPSO, LNG, Offshore Jackets, Petrochemicals, Refinery
      </SectionTitle>
      </div>
      <div className="mx-[5%]">
      <SectionTitle className="break-words"  title="Metals & Mining">
        Smelters & Steel Plants
      </SectionTitle>
      </div>
      <div className="mx-[5%]">
      <SectionTitle className="break-words"  title="Buildings & Factories">
        FMCG projects and industrial facilities
      </SectionTitle>
      </div>
      <div className="mx-[5%]">
      <SectionTitle className="break-words"  title="Oil & Gas">
        FPSO, LNG, Offshore Jackets, Petrochemicals, Refinery
      </SectionTitle>
      </div>
      <div className="mx-[5%]">
      <SectionTitle className="break-words"  title="Metals & Mining" >
        Smelters & Steel Plants
      </SectionTitle>
      </div>
    </AutoScrollCarousel>

      <div className="flex justify-center" id="ProductandSolution">
        <div className="max-w-2xl mt-10 text-3xl font-bold leading-snug tracking-tight text-indigo-800 lg:leading-tight lg:text-5xl dark:text-white">
          Products & Solutions
        </div>
      </div>
      <AutoScrollCarousel scrollSpeed={1} className="my-custom-class">
        <div className="mx-[5%]">
        <SectionTitle className="break-words" title="Piping & Valves">
          Ball, GGC, Butterfly, Check, Cryo, MOV, ROV, DPCV, Piping Spool Fabrication.
        </SectionTitle>
        </div>
        <div className="mx-[5%]">
        <SectionTitle className="break-words"  title="Packages">
          HVAC, Cranes, Skids, E-Houses, Power Distribution Centers
        </SectionTitle>
        </div>
        <div className="mx-[5%]">
        <SectionTitle className="break-words"  title="Specialty Products">
          Steam Drums, Heat Exchangers, Expansion Joints, Dampers, Flame Arrestors, Ducting
        </SectionTitle>
        </div>
        <div className="mx-[5%]">
        <SectionTitle className="break-words"  title="Piping & Valves">
          Ball, GGC, Butterfly, Check, Cryo, MOV, ROV, DPCV, Piping Spool Fabrication.
        </SectionTitle>
        </div>
        <div className="mx-[5%]">
        <SectionTitle className="break-words"  title="Packages">
          HVAC, Cranes, Skids, E-Houses, Power Distribution Centers
        </SectionTitle>
        </div>
        <div className="mx-[5%]">
        <SectionTitle className="break-words"  title="Specialty Products">
          Steam Drums, Heat Exchangers, Expansion Joints, Dampers, Flame Arrestors, Ducting
        </SectionTitle>
        </div>
      </AutoScrollCarousel>

      <div id="BusinessModel">
        <Benefits data={benefitOne} />
      </div>
      <div id="CoreValues">
        <Benefits imgPos="right" data={benefitTwo} />
      </div>
      <div id="KeyAchievements">
        <Benefits data={benefitThree} />
      </div>
      {/* <Video /> */}
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
      </SectionTitle>
      <Faq />
      <div id="AboutUs">
        <SectionTitle title="About Us">
          At <b>ENERGY PARTNER</b>, we specialize in liaison and project marketing consultancy for the oil & gas, power, and EPC industries. Our core mission is simple: <b>Help customers and suppliers unlock maximum value and secure the right opportunities in the market</b>. We act as your trusted partner in navigating complex tendering processes, <b>connecting with the right stakeholders, and positioning your solutions</b> where they matter most.
        </SectionTitle>
      </div>
      <div id="ContactUs" className="py-16 bg-gray-50 dark:bg-gray-900">
      <SectionTitle title="Contact Us">
        <p className="text-base text-gray-600 dark:text-gray-400">
          We'd love to hear from you. Reach out to us anytime!
        </p>

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:justify-center">
          {/* Email Button */}
            <a
              href="mailto:energypartner1@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition"
            >
              <EnvelopeIcon className="w-6 h-6" />
              Email Us
            </a>

            {/* Phone Button */}
            <a
              href="tel:+918160547881"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition"
            >
              <PhoneIcon className="w-6 h-6" />
              Call Now
            </a>
          </div>
        </SectionTitle>
      </div>
      {/* <div class="flex justify-center">
        <div className="max-w-2xl mt-1 text-3xl font-bold leading-snug tracking-tight text-indigo-800 lg:leading-tight lg:text-4xl dark:text-white">
          About Us
        </div>
      </div>
      <div class="flex justify-center">
      <div className="max-w-5xl mt-1 text-3xl font-bold leading-normal text-gray-700 lg:text-xl xl:text-xl dark:text-gray-300 dark:text-white">
        At <b>ENERGY PARTNER</b>, we are more than just a supplier — we are your trusted partner in delivering <b>engineering products and end-to-end solutions</b>. With <b>over a decade of expertise</b>, our team of seasoned technocrats provides high-quality, reliable, and tailored solutions across diverse industries. Our mission is to create a <b>single-window experience</b> for customers, simplifying complexities and ensuring smooth project execution.
        </div>
      </div> */}
      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </>
  );
}

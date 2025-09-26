import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import AutoScrollCarousel from "../components/AutoScrollCarousel";

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
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link
          rel="icon"
          href={
            process.env.NODE_ENV === "production" && !process.env.VERCEL
              ? "/energypartner/favicon.ico"  // GitHub Pages
              : "/favicon.ico"                 // local dev or Vercel
          }
        />
      </Head>

      <Navbar />
      <Hero />
      <div class="flex justify-center">
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
        FPSO, LNG, Offshore Jackets, Brownfield, Petrochemicals, Refinery
      </SectionTitle>
      </div>
      <div className="mx-[5%]">
      <SectionTitle className="break-words"  title="Metals & Mining">
        Copper smelters and heavy industries
      </SectionTitle>
      </div>
      <div className="mx-[5%]">
      <SectionTitle className="break-words"  title="Buildings & Factories">
        FMCG projects and industrial facilities
      </SectionTitle>
      </div>
      <div className="mx-[5%]">
      <SectionTitle className="break-words"  title="Oil & Gas">
        FPSO, LNG, Offshore Jackets, Brownfield, Petrochemicals, Refinery
      </SectionTitle>
      </div>
      <div className="mx-[5%]">
      <SectionTitle className="break-words"  title="Metals & Mining" >
        Copper smelters and heavy industries
      </SectionTitle>
      </div>
    </AutoScrollCarousel>

      <div class="flex justify-center">
        <div className="max-w-2xl mt-10 text-3xl font-bold leading-snug tracking-tight text-indigo-800 lg:leading-tight lg:text-5xl dark:text-white">
          Products & Solutions
        </div>
      </div>
      <AutoScrollCarousel scrollSpeed={1} className="my-custom-class">
        <div className="mx-[5%]">
        <SectionTitle className="break-words" title="Piping & Valves">
          Ball, GGC, Axial Flow, Butterfly, Dual Plate Check, Control Valves, Piping Spool Fabrication.
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
          Ball, GGC, Axial Flow, Butterfly, Dual Plate Check, Control Valves, Piping Spool Fabrication.
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

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <SectionTitle title="About Us">
                At <b>ENERGY PARTNER</b>, we are more than just a supplier — we are your trusted partner in delivering <b>engineering products and end-to-end solutions</b>. With <b>over a decade of expertise</b>, our team of seasoned technocrats provides high-quality, reliable, and tailored solutions across diverse industries. Our mission is to create a <b>single-window experience</b> for customers, simplifying complexities and ensuring smooth project execution.
      </SectionTitle>
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

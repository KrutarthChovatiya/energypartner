import Image from "next/image";
import Container from "./container";
//import heroImg from "../public/img/hero.png";

const heroImg = "/images/hero.png";
const mailImg = "/images/icons/mail.svg";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function Hero() {
  const email = process.env.EP_MAIN;
const phone = process.env.EP_PHONE;
  return (
    
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              More Markets.<br/>More Margins.<br/>More Momentum.
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 text-justify">
              At Energy Partner, we help businesses expand into new markets, maximize profitability, and accelerate growth. With our deep industry knowledge, strategic insights, and end-to-end support, we empower suppliers to capture opportunities in Oil & Gas, Metals & Mining, FMCG, and Infrastructure sectors. Our mission is simple — to be the bridge that transforms potential into performance.
            </p>


            <div className="flex flex-col items-start gap-3 sm:space-y-0 sm:items-center sm:flex-row">
              {/* Email Button */}
              <a
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition"
              >
                <EnvelopeIcon className="w-6 h-6" />
                Email Us
              </a>

              {/* Phone Button */}
              <a
                href={`tel:${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition"
              >
                <PhoneIcon className="w-6 h-6" />
                Call Now
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="hidden lg:block">
            <Image
              src={heroImg}
              width="616"
              height="617"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              loader={({ src }) => src}
              //placeholder="blur"
            />
          </div>
        </div>
      </Container>
      {/* <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Trusted by <span className="text-indigo-600">2000+</span> customers
            worldwide
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <AmazonLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <VerizonLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <MicrosoftLogo />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <NetflixLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <SonyLogo />
            </div>
          </div>
        </div>
      </Container> */}
    </>
  );
}


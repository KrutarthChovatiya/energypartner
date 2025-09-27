
//import benefitOneImg from "../public/img/benefit-one.png";
//import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOneImg = "/images/benefit-one.png";
const benefitTwoImg = "/images/benefit-two.png";
const benefitThreeImg = "/images/benefit-three.png";

const benefitOne = {
  title: "What We Do",
  desc: "We act as a reliable bridge between suppliers and customers, delivering efficiency, trust, and favorable outcomes.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Market Access",
      desc: "We open doors by connecting global suppliers with decision-makers in fast-growing energy and infrastructure sectors.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
  <path fillRule="evenodd" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7 5.5a5.485 5.485 0 0 1-4.007-1.732l.28-.702a.402.402 0 0 1 .658-.135.804.804 0 0 0 1.138 0l.012-.012a.822.822 0 0 0 .154-.949l-.055-.11a.497.497 0 0 1 .134-.611L8.14 7.788a.57.57 0 0 0 .154-.7.57.57 0 0 1 .33-.796l.028-.01a1.788 1.788 0 0 0 1.13-1.13l.072-.214a.747.747 0 0 0-.18-.764L8.293 2.793A1 1 0 0 1 8.09 2.5 5.5 5.5 0 0 1 12.9 10.5h-.486a1 1 0 0 1-.707-.293l-.353-.353a1.207 1.207 0 0 0-1.708 0l-.531.531a1 1 0 0 1-.26.188l-.343.17a.927.927 0 0 0-.512.83v.177c0 .414.336.75.75.75a.75.75 0 0 1 .751.793c-.477.135-.98.207-1.501.207Z" clipRule="evenodd" />
</svg>
    },
    {
      title: "Opportunity Identification",
      desc: "We track upcoming projects and help you position early, increasing your chance to win.",
      icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clipRule="evenodd" />
</svg>
    },
    {
      title: "Project Liaisoning",
      desc: "From tender submissions to follow-ups with clients and consultants, we ensure smooth communication and representation.",
      icon:  <svg viewBox="0 -8 72 72" fill="#000000">
    <path
      fill="currentColor"
      d="M64,12.78v17s-3.63.71-4.38.81-3.08.85-4.78-.78C52.22,27.25,42.93,18,42.93,18a3.54,3.54,0,0,0-4.18-.21c-2.36,1.24-5.87,3.07-7.33,3.78a3.37,3.37,0,0,1-5.06-2.64,3.44,3.44,0,0,1,2.1-3c3.33-2,10.36-6,13.29-7.52,1.78-1,3.06-1,5.51,1C50.27,12,53,14.27,53,14.27a2.75,2.75,0,0,0,2.26.43C58.63,14,64,12.78,64,12.78ZM27,41.5a3,3,0,0,0-3.55-4.09,3.07,3.07,0,0,0-.64-3,3.13,3.13,0,0,0-3-.75,3.07,3.07,0,0,0-.65-3,3.38,3.38,0,0,0-4.72.13c-1.38,1.32-2.27,3.72-1,5.14s2.64.55,3.72.3c-.3,1.07-1.2,2.07-.09,3.47s2.64.55,3.72.3c-.3,1.07-1.16,2.16-.1,3.46s2.84.61,4,.25c-.45,1.15-1.41,2.39-.18,3.79s4.08.75,5.47-.58a3.32,3.32,0,0,0,.3-4.68A3.18,3.18,0,0,0,27,41.5Zm25.35-8.82L41.62,22a3.53,3.53,0,0,0-3.77-.68c-1.5.66-3.43,1.56-4.89,2.24a8.15,8.15,0,0,1-3.29,1.1,5.59,5.59,0,0,1-3-10.34C29,12.73,34.09,10,34.09,10a6.46,6.46,0,0,0-5-2C25.67,8,18.51,12.7,18.51,12.7a5.61,5.61,0,0,1-4.93.13L8,10.89v19.4s1.59.46,3,1a6.33,6.33,0,0,1,1.56-2.47,6.17,6.17,0,0,1,8.48-.06,5.4,5.4,0,0,1,1.34,2.37,5.49,5.49,0,0,1,2.29,1.4A5.4,5.4,0,0,1,26,34.94a5.47,5.47,0,0,1,3.71,4,5.38,5.38,0,0,1,2.39,1.43,5.65,5.65,0,0,1,1.48,4.89s.8.9,1.29,1.39a2.46,2.46,0,0,0,3.48-3.48s2,2.48,4.28,1c2-1.4,1.69-3.06.74-4a3.19,3.19,0,0,0,4.77.13,2.45,2.45,0,0,0,.13-3.3s1.33,1.81,4,.12c1.89-1.6,1-3.43,0-4.39Z"
    />
  </svg>,
    },
    {
      title: "Value Maximization",
      desc: "By showcasing your strengths, we help you achieve better pricing, improved margins, and long-term customer relationships.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clipRule="evenodd" />
</svg>
    },
    {
      title: "End-to-End Support",
      desc: "Whether it’s pre-bid, techno-commercial discussions, or project execution coordination, we stand by you.",
      icon: <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"/>
</svg>,
    },
    
  ],
};

const benefitTwo = {
  title: "Why Choose ENERGY PARTNER?",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Global Projects Knowledge",
      desc: "With insights from major oil & gas and EPC projects worldwide, we understand how to position suppliers for maximum competitiveness.",
      icon:<svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-gray-800"
  >
    <path
      fill="currentColor"
      d="M9 5h30v10H9zM39 29V19H9v10zM9 33h30v10H9zM39 33v8H14a3 3 0 0 1-3-3v-5zM39 19v8H14a3 3 0 0 1-3-3v-5zM39 5v8H14a3 3 0 0 1-3-3V5zM39 5H9a2 2 0 0 1 0-4h30a2 2 0 0 1 0 4zM41 45a2 2 0 0 1-2 2H9a2 2 0 0 1 0-4h30a2 2 0 0 1 2 2zM41 45H11a2 2 0 0 1-2-2h30a2 2 0 0 1 2 2zM7.59 29.59A2 2 0 0 0 9 33h30a2 2 0 0 0 0-4c-32.76 0-30.6-.24-31.41.59zM40.41 18.41A2 2 0 0 0 39 15H9a2 2 0 0 0 0 4c32.76 0 30.6.24 31.41-.59zM41 31H11a2 2 0 0 1-2-2h30a2 2 0 0 1 2 2zM41 17H11a2 2 0 0 1-2-2h30a2 2 0 0 1 2 2zM41 3H11a2 2 0 0 1-2-2h30a2 2 0 0 1 2 2zM33 24a9 9 0 1 1-14.28-7.28A9 9 0 0 1 33 24zM33 24a8.94 8.94 0 0 1-1.72 5.28 9 9 0 0 1-12.56-12.56A9 9 0 0 1 33 24zM27 26a3 3 0 0 1-6 0c0-1.45 2.29-5.72 3-7 0 0 3 5.34 3 7zM27 26.24A3 3 0 0 1 22 24c0-1.17 1.31-3.75 2-5 2.57 4.58 3.12 6.69 3 7.24z"
    />
  </svg>,
    },
    {
      title: "Growth Opportunity Identification",
      desc: "We don’t wait for projects to come; we proactively identify upcoming opportunities, ensuring you are always ahead of the curve.",
      icon: <svg fill="#ffffff" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.192"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="a"></g> <g id="b"> <path d="M53.2676,21.2861c-1.0825-.6357-2.3833-.6509-3.4761-.0396-2.353,1.3145-4.3789,2.7593-6.021,4.2944-.4897,.457-.7705,1.1182-.7705,1.814v26.145c0,.8271,.6729,1.5,1.5,1.5h9c.8271,0,1.5-.6729,1.5-1.5V24.3076c0-1.2554-.6475-2.3848-1.7324-3.0215Zm.7324,32.2139c0,.2759-.2241,.5-.5,.5h-9c-.2759,0-.5-.2241-.5-.5V27.355c0-.4194,.165-.8145,.4531-1.0835,1.5835-1.48,3.5435-2.877,5.8257-4.1519,.3818-.2129,.7988-.3193,1.2153-.3193,.436,0,.8721,.1162,1.2676,.3481,.7754,.4556,1.2383,1.2627,1.2383,2.1592v29.1924Zm-17.7324-22.2139c-1.083-.6357-2.3828-.6509-3.4761-.0396-2.353,1.3145-4.3789,2.7593-6.021,4.2944-.4897,.457-.7705,1.1182-.7705,1.814v16.145c0,.8271,.6729,1.5,1.5,1.5h9c.8271,0,1.5-.6729,1.5-1.5v-19.1924c0-1.2554-.6475-2.3848-1.7324-3.0215Zm.7324,22.2139c0,.2759-.2241,.5-.5,.5h-9c-.2759,0-.5-.2241-.5-.5v-16.145c0-.4194,.165-.8145,.4531-1.0835,1.5835-1.48,3.5435-2.877,5.8257-4.1519,.3818-.2129,.7988-.3193,1.2153-.3193,.436,0,.8721,.1162,1.2676,.3481,.7754,.4556,1.2383,1.2627,1.2383,2.1592v19.1924Zm-17.7324-13.2139c-1.0835-.6357-2.3833-.6509-3.4761-.0396-2.353,1.3145-4.3789,2.7593-6.021,4.2944-.4897,.457-.7705,1.1182-.7705,1.814v7.145c0,.8271,.6729,1.5,1.5,1.5h9c.8271,0,1.5-.6729,1.5-1.5v-10.1924c0-1.2554-.6475-2.3848-1.7324-3.0215Zm.7324,13.2139c0,.2759-.2241,.5-.5,.5H10.5c-.2759,0-.5-.2241-.5-.5v-7.145c0-.4194,.165-.8145,.4531-1.0835,1.5835-1.48,3.5435-2.877,5.8257-4.1519,.3818-.2129,.7988-.3193,1.2153-.3193,.436,0,.8721,.1162,1.2676,.3481,.7754,.4556,1.2383,1.2627,1.2383,2.1592v10.1924ZM43.6836,20.1655c.3647-3.4077,.4043-6.7339,.1177-9.8862-.0664-.7373-.6958-1.2827-1.4419-1.272-3.7036,.1211-7.1143,.7529-10.1372,1.8789-.5161,.1924-.8765,.6313-.9644,1.1743-.0869,.54,.1152,1.0674,.542,1.4097l1.6562,1.3315c-.9927,1.4741-5.3232,7.1528-14.8311,10.1787-1.1265,.3579-2.333,.6167-3.4995,.8667-3.2983,.7065-6.4131,1.3745-6.0996,4.1621,.0684,.6157,.4351,1.4844,1.7964,2.125,1.188,.5591,2.9023,.8423,4.8721,.8423,4.1152,0,9.3442-1.2358,13.21-3.7739,6.1064-4.0073,9.9341-7.9927,11.0273-9.1943l1.4014,1.1226c.4146,.3335,.9805,.4111,1.4722,.2065,.4937-.2056,.8223-.6436,.8784-1.1719Zm-.9941-.1064c-.0244,.23-.1958,.3252-.2686,.3555-.1582,.0654-.3306,.042-.4629-.064l-1.772-1.4199c-.2114-.1699-.5195-.1392-.6943,.0674-.0391,.0464-3.9951,4.6826-11.1362,9.3687-5.3623,3.5215-13.7422,4.4468-17.1074,2.8628-.7568-.356-1.1699-.8037-1.228-1.3315-.2026-1.7969,1.8877-2.3384,5.3149-3.0732,1.1899-.2549,2.4204-.5186,3.5933-.8911,11.3286-3.6055,15.4551-10.6943,15.6255-10.9946,.1206-.2134,.0693-.4829-.1221-.6362l-2.0059-1.6118c-.2051-.165-.1943-.3843-.1807-.4707,.0142-.0884,.0747-.3032,.3257-.3965,2.9219-1.0884,6.2261-1.6997,9.8208-1.8174h.0122c.2046,0,.3833,.1602,.4014,.3628v.0005c.2808,3.0869,.2422,6.3472-.1157,9.6895Z"></path> </g> </g></svg>,
    },
    {
      title: "Market Development Expertise",
      desc: "Beyond winning tenders, we help you expand into new geographies, customer segments, and industry verticals.",
      icon:  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
  <path fillRule="evenodd" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7 5.5a5.485 5.485 0 0 1-4.007-1.732l.28-.702a.402.402 0 0 1 .658-.135.804.804 0 0 0 1.138 0l.012-.012a.822.822 0 0 0 .154-.949l-.055-.11a.497.497 0 0 1 .134-.611L8.14 7.788a.57.57 0 0 0 .154-.7.57.57 0 0 1 .33-.796l.028-.01a1.788 1.788 0 0 0 1.13-1.13l.072-.214a.747.747 0 0 0-.18-.764L8.293 2.793A1 1 0 0 1 8.09 2.5 5.5 5.5 0 0 1 12.9 10.5h-.486a1 1 0 0 1-.707-.293l-.353-.353a1.207 1.207 0 0 0-1.708 0l-.531.531a1 1 0 0 1-.26.188l-.343.17a.927.927 0 0 0-.512.83v.177c0 .414.336.75.75.75a.75.75 0 0 1 .751.793c-.477.135-.98.207-1.501.207Z" clipRule="evenodd" />
</svg>
    },
    {
      title: "Margin & Value Optimization",
      desc: "Our liaison strategy ensures you get the highest possible margins by showcasing your strengths and negotiating from a position of value.",
      icon:<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>
</svg>
    },
    {
      title: "Client-Centric Value Proposition",
      desc: "We highlight your unique solutions in a way that resonates with project owners and EPC contractors, giving you a clear edge over competitors.",
      icon: <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.16923 2.00234C8.11301 2.00078 8.0566 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 7.9434 13.9992 7.88699 13.9977 7.83077L15.7642 6.06422C15.9182 6.68407 16 7.33249 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C8.66751 0 9.31593 0.0817526 9.93578 0.235791L8.16923 2.00234Z" fill="#ffffff"></path> <path d="M4 7.99996C4 6.13612 5.27477 4.57002 7 4.12598V6.26752C6.4022 6.61333 6 7.25968 6 7.99996C6 9.10453 6.89543 9.99996 8 9.99996C8.74028 9.99996 9.38663 9.59776 9.73244 8.99996H11.874C11.4299 10.7252 9.86384 12 8 12C5.79086 12 4 10.2091 4 7.99996Z" fill="#ffffff"></path> <path d="M14 2L13 0L10 3V4.58579L7.79289 6.79289L9.20711 8.20711L11.4142 6H13L16 3L14 2Z" fill="#ffffff"></path> </g></svg>,
    },
    {
      title: "End-to-End Partnership",
      desc: "From market entry to project execution, we serve as your extended business development arm, reducing risk and accelerating results.",
      icon: <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"/>
</svg>,
    },
  ],
};

const benefitThree = {
  title: "Key Achievements",
  desc: "",
  image: benefitThreeImg,
  bullets: [
    {
      title: "Proven Business Wins",
      desc: "Enabled stakeholders to achieve high margins across product lines while driving sustained growth and market creation, consistently delivering ~15% net margins per contract.",
      icon: <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.384"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0H12V2H16V4C16 6.45641 14.2286 8.49909 11.8936 8.92038C11.5537 10.3637 10.432 11.5054 9 11.874V14H12V16H4V14H7V11.874C5.56796 11.5054 4.44628 10.3637 4.1064 8.92038C1.77136 8.49909 0 6.45641 0 4V2H4V0ZM12 6.82929V4H14C14 5.30622 13.1652 6.41746 12 6.82929ZM4 4H2C2 5.30622 2.83481 6.41746 4 6.82929V4Z" fill="#ffffff"></path> </g></svg>
    },
    {
      title: "High-Value Deliveries",
      desc:"Secured multi-crore contracts across Oil & Gas, Metals & Mining, and EPC sectors.",
      icon: <svg fill="#ffffff" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.48 12c-.13.004-.255.058-.347.152l-2.638 2.63-1.625-1.62c-.455-.474-1.19.258-.715.712l1.983 1.978c.197.197.517.197.715 0l2.995-2.987c.33-.32.087-.865-.367-.865zM.5 16h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm0-4h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm0-4h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3C.223 9 0 8.777 0 8.5S.223 8 .5 8zm24 11c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5 2.5-1.125 2.5-2.5-1.125-2.5-2.5-2.5zm0 1c.834 0 1.5.666 1.5 1.5s-.666 1.5-1.5 1.5-1.5-.666-1.5-1.5.666-1.5 1.5-1.5zm-13-1C10.125 19 9 20.125 9 21.5s1.125 2.5 2.5 2.5 2.5-1.125 2.5-2.5-1.125-2.5-2.5-2.5zm0 1c.834 0 1.5.666 1.5 1.5s-.666 1.5-1.5 1.5-1.5-.666-1.5-1.5.666-1.5 1.5-1.5zm-5-14C5.678 6 5 6.678 5 7.5v11c0 .822.678 1.5 1.5 1.5h2c.676.01.676-1.01 0-1h-2c-.286 0-.5-.214-.5-.5v-11c0-.286.214-.5.5-.5h13c.286 0 .5.214.5.5V19h-5.5c-.66 0-.648 1.01 0 1h7c.66 0 .654-1 0-1H21v-9h4.227L29 15.896V18.5c0 .286-.214.5-.5.5h-1c-.654 0-.654 1 0 1h1c.822 0 1.5-.678 1.5-1.5v-2.75c0-.095-.027-.19-.078-.27l-4-6.25c-.092-.143-.25-.23-.422-.23H21V7.5c0-.822-.678-1.5-1.5-1.5z"></path></g></svg>,
    },
    {
      title: "Market Growth",
      desc: "Generated 12%–50% CAGR in supplier business wins through strategic positioning and negotiation.",
      icon: <svg fill="#ffffff" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.192"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="a"></g> <g id="b"> <path d="M53.2676,21.2861c-1.0825-.6357-2.3833-.6509-3.4761-.0396-2.353,1.3145-4.3789,2.7593-6.021,4.2944-.4897,.457-.7705,1.1182-.7705,1.814v26.145c0,.8271,.6729,1.5,1.5,1.5h9c.8271,0,1.5-.6729,1.5-1.5V24.3076c0-1.2554-.6475-2.3848-1.7324-3.0215Zm.7324,32.2139c0,.2759-.2241,.5-.5,.5h-9c-.2759,0-.5-.2241-.5-.5V27.355c0-.4194,.165-.8145,.4531-1.0835,1.5835-1.48,3.5435-2.877,5.8257-4.1519,.3818-.2129,.7988-.3193,1.2153-.3193,.436,0,.8721,.1162,1.2676,.3481,.7754,.4556,1.2383,1.2627,1.2383,2.1592v29.1924Zm-17.7324-22.2139c-1.083-.6357-2.3828-.6509-3.4761-.0396-2.353,1.3145-4.3789,2.7593-6.021,4.2944-.4897,.457-.7705,1.1182-.7705,1.814v16.145c0,.8271,.6729,1.5,1.5,1.5h9c.8271,0,1.5-.6729,1.5-1.5v-19.1924c0-1.2554-.6475-2.3848-1.7324-3.0215Zm.7324,22.2139c0,.2759-.2241,.5-.5,.5h-9c-.2759,0-.5-.2241-.5-.5v-16.145c0-.4194,.165-.8145,.4531-1.0835,1.5835-1.48,3.5435-2.877,5.8257-4.1519,.3818-.2129,.7988-.3193,1.2153-.3193,.436,0,.8721,.1162,1.2676,.3481,.7754,.4556,1.2383,1.2627,1.2383,2.1592v19.1924Zm-17.7324-13.2139c-1.0835-.6357-2.3833-.6509-3.4761-.0396-2.353,1.3145-4.3789,2.7593-6.021,4.2944-.4897,.457-.7705,1.1182-.7705,1.814v7.145c0,.8271,.6729,1.5,1.5,1.5h9c.8271,0,1.5-.6729,1.5-1.5v-10.1924c0-1.2554-.6475-2.3848-1.7324-3.0215Zm.7324,13.2139c0,.2759-.2241,.5-.5,.5H10.5c-.2759,0-.5-.2241-.5-.5v-7.145c0-.4194,.165-.8145,.4531-1.0835,1.5835-1.48,3.5435-2.877,5.8257-4.1519,.3818-.2129,.7988-.3193,1.2153-.3193,.436,0,.8721,.1162,1.2676,.3481,.7754,.4556,1.2383,1.2627,1.2383,2.1592v10.1924ZM43.6836,20.1655c.3647-3.4077,.4043-6.7339,.1177-9.8862-.0664-.7373-.6958-1.2827-1.4419-1.272-3.7036,.1211-7.1143,.7529-10.1372,1.8789-.5161,.1924-.8765,.6313-.9644,1.1743-.0869,.54,.1152,1.0674,.542,1.4097l1.6562,1.3315c-.9927,1.4741-5.3232,7.1528-14.8311,10.1787-1.1265,.3579-2.333,.6167-3.4995,.8667-3.2983,.7065-6.4131,1.3745-6.0996,4.1621,.0684,.6157,.4351,1.4844,1.7964,2.125,1.188,.5591,2.9023,.8423,4.8721,.8423,4.1152,0,9.3442-1.2358,13.21-3.7739,6.1064-4.0073,9.9341-7.9927,11.0273-9.1943l1.4014,1.1226c.4146,.3335,.9805,.4111,1.4722,.2065,.4937-.2056,.8223-.6436,.8784-1.1719Zm-.9941-.1064c-.0244,.23-.1958,.3252-.2686,.3555-.1582,.0654-.3306,.042-.4629-.064l-1.772-1.4199c-.2114-.1699-.5195-.1392-.6943,.0674-.0391,.0464-3.9951,4.6826-11.1362,9.3687-5.3623,3.5215-13.7422,4.4468-17.1074,2.8628-.7568-.356-1.1699-.8037-1.228-1.3315-.2026-1.7969,1.8877-2.3384,5.3149-3.0732,1.1899-.2549,2.4204-.5186,3.5933-.8911,11.3286-3.6055,15.4551-10.6943,15.6255-10.9946,.1206-.2134,.0693-.4829-.1221-.6362l-2.0059-1.6118c-.2051-.165-.1943-.3843-.1807-.4707,.0142-.0884,.0747-.3032,.3257-.3965,2.9219-1.0884,6.2261-1.6997,9.8208-1.8174h.0122c.2046,0,.3833,.1602,.4014,.3628v.0005c.2808,3.0869,.2422,6.3472-.1157,9.6895Z"></path> </g> </g></svg>,
    },
    {
      title: "Sector Diversity",
      desc: "Delivered success across Oil & Gas (FPSO, LNG, Refineries, Petrochemicals), Metals & Mining (Smelters & Steel Plants), and FMCG/Building sectors.",
      icon: <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22,1H18a1,1,0,0,0-1,1V9H15V7a1,1,0,0,0-1.447-.895L9,8.382V7a1,1,0,0,0-1.447-.895l-6,3A1,1,0,0,0,1,10V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V2A1,1,0,0,0,22,1ZM21,3V5H19V3ZM3,21V10.618l4-2V10a1,1,0,0,0,1.447.895L13,8.618V10a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V7h2V21Zm2-8H8v2H5Zm5,0h4v2H10Zm6,0h3v2H16ZM5,17H8v2H5Zm5,0h4v2H10Zm6,0h3v2H16Z"></path></g></svg>,
    },
    {
      title: "Global-Standard Solutions",
      desc: "Facilitated supply of specialized commodities including piping, valves, expansion joints, dampers, cranes, ID/FD fans, HVAC, and turnkey erection packages.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
</svg>,
    },
    {
      title: "End-to-End Consultancy",
      desc: "Represented suppliers from FEED & detailed engineering to supply packages, ensuring smooth execution.",
      icon: <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"/>
</svg>,
    },
    {
      title: "Blockchain-Driven Transparency",
      desc: "Among the few liaison firms applying blockchain-enabled models for secure, transparent, and compliant supplier-buyer interactions.",
      icon: <svg fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>chain</title> <path d="M0 22.944q0 2.464 1.76 4.224l3.072 3.104q1.76 1.728 4.224 1.728t4.256-1.728l2.688-2.976q1.376-1.344 1.664-3.232t-0.512-3.552l-6.784 6.784q-0.576 0.576-1.408 0.576t-1.44-0.576l-2.816-2.816q-0.576-0.608-0.576-1.408t0.576-1.408l6.784-6.816q-1.632-0.8-3.52-0.512t-3.264 1.664l-2.944 2.72q-1.76 1.76-1.76 4.224zM9.792 20.256q0 0.832 0.576 1.408t1.408 0.576 1.408-0.576l8.48-8.48q0.576-0.576 0.576-1.408t-0.576-1.408q-0.608-0.576-1.44-0.576t-1.408 0.576l-8.448 8.48q-0.576 0.576-0.576 1.408zM14.336 7.968q-0.288 1.888 0.512 3.552l6.816-6.816q0.576-0.576 1.408-0.576t1.408 0.576l2.816 2.848q0.576 0.576 0.576 1.408t-0.576 1.408l-6.784 6.784q1.632 0.832 3.52 0.512t3.264-1.664l2.944-2.944q1.76-1.76 1.76-4.224t-1.76-4.256l-2.816-2.816q-1.76-1.76-4.224-1.76t-4.256 1.76l-2.944 2.944q-1.344 1.376-1.664 3.264z"></path> </g></svg>,
    },
  ],
};

export { benefitOne, benefitTwo, benefitThree };

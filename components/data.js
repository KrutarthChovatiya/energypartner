
//import benefitOneImg from "../public/img/benefit-one.png";
//import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOneImg = "/images/benefit-one.png";
const benefitTwoImg = "/images/benefit-two.png";
const benefitThreeImg = "/images/benefit-three.png";

const benefitOne = {
  title: "Business Model",
  desc: "We act as a reliable bridge between suppliers and customers, delivering efficiency, trust, and favorable outcomes. Our One-to-One Blockchain-Enabled Integration Model ensures:",
  image: benefitOneImg,
  bullets: [
    {
      title: "Secure and confidential negotiations",
      desc: "Safe, private, and trusted deal-making",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
  <path fillRule="evenodd" d="M8.5 1.709a.75.75 0 0 0-1 0 8.963 8.963 0 0 1-4.84 2.217.75.75 0 0 0-.654.72 10.499 10.499 0 0 0 5.647 9.672.75.75 0 0 0 .694-.001 10.499 10.499 0 0 0 5.647-9.672.75.75 0 0 0-.654-.719A8.963 8.963 0 0 1 8.5 1.71Zm2.34 5.504a.75.75 0 0 0-1.18-.926L7.394 9.17l-1.156-.99a.75.75 0 1 0-.976 1.138l1.75 1.5a.75.75 0 0 0 1.078-.106l2.75-3.5Z" />
</svg>,
      
    },
    {
      title: "Full compliance with rules and standards",
      desc: "Always aligned with global compliance norms",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clipRule="evenodd" />
</svg>,
    },
    {
      title: "Data privacy and pseudonymity",
      desc: "Protecting identity with secure data handling",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
</svg>,
    },
    {
      title: "Real-time transparency and tamper-proof transactions",
      desc: "Clear, traceable, and reliable processes",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clipRule="evenodd" />
</svg>,
    },
  ],
};

const benefitTwo = {
  title: "Core Values",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Understanding Customer Needs",
      desc: "Focused on what truly matters to you",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M7.491 5.992a.75.75 0 0 1 .75-.75h12a.75.75 0 1 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM7.49 11.995a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM7.491 17.994a.75.75 0 0 1 .75-.75h12a.75.75 0 1 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.24 3.745a.75.75 0 0 1 .75-.75h1.125a.75.75 0 0 1 .75.75v3h.375a.75.75 0 0 1 0 1.5H2.99a.75.75 0 0 1 0-1.5h.375v-2.25H2.99a.75.75 0 0 1-.75-.75ZM2.79 10.602a.75.75 0 0 1 0-1.06 1.875 1.875 0 1 1 2.652 2.651l-.55.55h.35a.75.75 0 0 1 0 1.5h-2.16a.75.75 0 0 1-.53-1.281l1.83-1.83a.375.375 0 0 0-.53-.53.75.75 0 0 1-1.062 0ZM2.24 15.745a.75.75 0 0 1 .75-.75h1.125a1.875 1.875 0 0 1 1.501 2.999 1.875 1.875 0 0 1-1.501 3H2.99a.75.75 0 0 1 0-1.501h1.125a.375.375 0 0 0 .036-.748H3.74a.75.75 0 0 1-.75-.75v-.002a.75.75 0 0 1 .75-.75h.411a.375.375 0 0 0-.036-.748H2.99a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
</svg>,
    },
    {
      title: "Building Lasting Relationships",
      desc: "Strong partnerships built on trust and care",
      icon: <svg viewBox="0 -8 72 72" fill="#000000">
    <path
      fill="currentColor"
      d="M64,12.78v17s-3.63.71-4.38.81-3.08.85-4.78-.78C52.22,27.25,42.93,18,42.93,18a3.54,3.54,0,0,0-4.18-.21c-2.36,1.24-5.87,3.07-7.33,3.78a3.37,3.37,0,0,1-5.06-2.64,3.44,3.44,0,0,1,2.1-3c3.33-2,10.36-6,13.29-7.52,1.78-1,3.06-1,5.51,1C50.27,12,53,14.27,53,14.27a2.75,2.75,0,0,0,2.26.43C58.63,14,64,12.78,64,12.78ZM27,41.5a3,3,0,0,0-3.55-4.09,3.07,3.07,0,0,0-.64-3,3.13,3.13,0,0,0-3-.75,3.07,3.07,0,0,0-.65-3,3.38,3.38,0,0,0-4.72.13c-1.38,1.32-2.27,3.72-1,5.14s2.64.55,3.72.3c-.3,1.07-1.2,2.07-.09,3.47s2.64.55,3.72.3c-.3,1.07-1.16,2.16-.1,3.46s2.84.61,4,.25c-.45,1.15-1.41,2.39-.18,3.79s4.08.75,5.47-.58a3.32,3.32,0,0,0,.3-4.68A3.18,3.18,0,0,0,27,41.5Zm25.35-8.82L41.62,22a3.53,3.53,0,0,0-3.77-.68c-1.5.66-3.43,1.56-4.89,2.24a8.15,8.15,0,0,1-3.29,1.1,5.59,5.59,0,0,1-3-10.34C29,12.73,34.09,10,34.09,10a6.46,6.46,0,0,0-5-2C25.67,8,18.51,12.7,18.51,12.7a5.61,5.61,0,0,1-4.93.13L8,10.89v19.4s1.59.46,3,1a6.33,6.33,0,0,1,1.56-2.47,6.17,6.17,0,0,1,8.48-.06,5.4,5.4,0,0,1,1.34,2.37,5.49,5.49,0,0,1,2.29,1.4A5.4,5.4,0,0,1,26,34.94a5.47,5.47,0,0,1,3.71,4,5.38,5.38,0,0,1,2.39,1.43,5.65,5.65,0,0,1,1.48,4.89s.8.9,1.29,1.39a2.46,2.46,0,0,0,3.48-3.48s2,2.48,4.28,1c2-1.4,1.69-3.06.74-4a3.19,3.19,0,0,0,4.77.13,2.45,2.45,0,0,0,.13-3.3s1.33,1.81,4,.12c1.89-1.6,1-3.43,0-4.39Z"
    />
  </svg>,
    },
    {
      title: "Technical Expertise",
      desc: "Specialized knowledge driving innovative solutions",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
</svg>,
    },
    {
      title: "Adding Real Value",
      desc: "Solutions that go beyond expectations",
      icon: <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"/>
</svg>,
    },
    {
      title: "Problem-Solving Approach",
      desc: "Turning challenges into successful outcomes",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
</svg>
,
    },
    {
      title: "Continuous Feedback & Improvement",
      desc: "Evolving through learning and constant growth",
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
      title: "30%+ Year-on-Year Growth in business proposals and project wins",
      icon: <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667"/>
</svg>,
    },
    {
      title: "High conversion ratio from proposals to successful projects",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
</svg>,
    },
    {
      title: "50%+ Margins achieved in specialized engineering services",
      icon: <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path  d="M7.05 4.05A7 7 0 0 1 19 9c0 2.407-1.197 3.874-2.186 5.084l-.04.048C15.77 15.362 15 16.34 15 18a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1c0-1.612-.77-2.613-1.78-3.875l-.045-.056C6.193 12.842 5 11.352 5 9a7 7 0 0 1 2.05-4.95ZM9 21a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm1.586-13.414A2 2 0 0 1 12 7a1 1 0 1 0 0-2 4 4 0 0 0-4 4 1 1 0 0 0 2 0 2 2 0 0 1 .586-1.414Z" clip-rule="evenodd"/>
</svg>,
    },
    {
      title: "Oil & Gas",
      desc: (
        <>
          <p>30%+ Margins delivered in Oil & Gas expansion projects</p>
          <p>Expansion Joints & Dampers: Secured projects with 30%+ profitability</p>
          <p>Engineering (FEED & DE): Specialized projects with 50%+ returns</p>
        </>
      ),
      icon: <svg
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
      title: "Metals & Mining",
      desc: 
      (
        <>
          <p>Strong performance across Metals & Mining with steady double-digit growth</p>
          <p>Piping: Delivered projects with 15 to 20% margins</p>
          <p>Valves: Achieved 12 to 14% growth margins</p>
        </>
      ),
      icon: <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-black"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.02172 1.79241C3.11977 1.33042 3.52766 1 3.99994 1H7.49994C10.8167 1 13.9504 2.15662 16.5142 4.05499L16.8139 3.77241C17.2074 3.40139 17.8246 3.41046 18.207 3.79289L20.207 5.79289C20.5895 6.17532 20.5986 6.79251 20.2275 7.18601L19.945 7.48571C21.8433 10.0496 22.9999 13.1833 22.9999 16.5V20C22.9999 20.4723 22.6695 20.8802 22.2075 20.9782C21.7455 21.0763 21.2779 20.8377 21.0861 20.4061C19.5548 16.9607 17.8884 14.1436 15.9191 11.7594L5.78873 22.5551C4.82264 23.5847 3.19624 23.6105 2.19791 22.6122L1.38775 21.802C0.389428 20.8037 0.415275 19.1773 1.44482 18.2112L12.2405 8.08084C9.85633 6.11151 7.03927 4.44513 3.5938 2.91381C3.16223 2.722 2.92368 2.2544 3.02172 1.79241ZM13.7415 9.41504L2.81338 19.6696C2.60747 19.8629 2.6023 20.1881 2.80197 20.3878L3.61213 21.198C3.81179 21.3976 4.13707 21.3925 4.33029 21.1866L14.5849 10.2585C14.3099 9.97106 14.0289 9.69005 13.7415 9.41504ZM8.31869 3.02736C10.6049 4.30007 12.6125 5.70113 14.4033 7.30303C15.2115 8.026 15.9739 8.78848 16.6969 9.59669C18.2988 11.3875 19.6999 13.3951 20.9726 15.6813C20.7848 12.8712 19.6408 10.2169 17.8574 8.06282C17.2794 7.36462 16.6353 6.72057 15.9371 6.14252C13.783 4.35913 11.1287 3.21514 8.31869 3.02736Z"
      />
    </svg>,
    },
  ],
};

export { benefitOne, benefitTwo, benefitThree };

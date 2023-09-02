 
import RestCountries from "./../assets/portfolioImages/restcountries.jpg";
import SpaceTourism from "./../assets/portfolioImages/spacetourism.jpg";
import Advice from "./../assets/portfolioImages/advice.jpg";
import Page from "./../assets/portfolioImages/intropage.jpg";
// import AWS from "./../assets/portfolioImages/s3.PNG";
import Todo from "./../assets/portfolioImages/todo.jpg"

// in progress projects

import Servista from './../assets/portfolioImages/servista.png'
import landingPage from './../assets/portfolioImages/url.jpg'
 
const ProjectsData = [
  {
    id: "ecommorce",
    img: Servista,
    name: "MERN E-commerce Website",
    stack: ["< Particle Js />", "< Tailwind css />", "< React.js />"],
    live: "pending",
    source: "code",
    description:  
        "The MERN E-commerce website is a dynamic online marketplace built to deliver a superior shopping experience to users. In my role as a full-stack developer, I contributed significantly to this project, harnessing the power of React, Strapi, Stripe, Node.js, and MongoDB to create a cutting-edge e-commerce platform. The website's core features include product display, seamless Stripe payment integration, and content management capabilities through Strapi CMS",
  }, 
  {
    id: "metaverse",
    img: RestCountries,
    name: "MetaVerse Landing Page",
    stack: ["< Next />", "< Tailwind Css />", "< React.js />"],
    live: "https://metaverse-next-js-website.vercel.app/",
    source: "https://github.com/rimshub/rest-countries-api",
    description:  
        "Landing-page Metaverse website provides relevent information for users. It has a responsive design and navigation. A large and complex project that required me to plan ahead and break down the work into smaller chunks. I used Next.js to build the website and Tailwind Css for styling and framer motion for animation.",
  },

  {
    id: "portfolio",
    img: SpaceTourism,
    name: "Personal Portfolio v2",
    stack: ["< React.js />", "< Next.Js />"],
    live: "https://awesome-portfolioi.netlify.app/",
    source: "https://github.com/rimshub/react-space-tourism-website",
    description:  
        "Multi-page personal portfolio website provides relevent information for users. It has a responsive design and navigation. I used Next.js to build the website and Tailwind css for styling, also i used framer motion for animation and particle js library for particles movement on the page.",
  
  },
  // {
  //   id: "cloud-storage",
  //   img: AWS,
  //   name: "Cloud Storage with AWS Simple Storage Service",
  //   stack: ["< AWS S3 /> " , "< JavaScript /> " , "< Express.js />"],
  //   live: "",
  //   source: "https://github.com/rimshub/cloud-storage-s3",
  //   description:  
  //       "This challenge from frontendmentor tested my skills to create dropdown navigation menus, a common pattern on larger sites. It also has some nice basic layout challenge",
  // },

  {
    id: "advice-generator",
    img: Advice,
    name: "Advice Generator App",
    stack: ["< HTML5 />", "< CSS3 />", "< JavaScript />"],
    live: "https://rimshub.github.io/javascript-advice-generator/",
    source: "https://github.com/rimshub/javascript-advice-generator",
    description:  
        "This advice generator app using the Advice Slip API. A small and fun app to practice JavaScript and mobile first workflow and CSS3. It has a responsive design and navigation.",
  },


  {
    id: "todo",
    img: Todo,
    name: "JavaScript Todo App",
    stack: ["< JavaScript />  ", "< Sass />"],
    live: "https://rimshub.github.io/JavaScript-Todo-App/",
    source: "https://github.com/rimshub/JavaScript-Todo-App",
    description:  
        "Responsive JS todo app with color theme switcher. Enables users to add, delete, filter, and clear day-to-day tasks. It has user-friendly interface and navigation. I was able to practice my JavaScript and Sass skills in this project.",
  },

  {
    id: "dropdown-nav",
    img: Page,
    name: "Homepage with dropdown navigation / Figma to React",
    stack: ["< React.js />   ", "< CSS3 />"],
    live: "https://rimshub.github.io/figma-design-to-reactjs/",
    source: "https://github.com/rimshub/figma-design-to-reactjs",
    description:  
        "This challenge from frontendmentor tested my skills to create dropdown navigation menus, a common pattern on larger sites. It also has some nice basic layout challenge. As a front-end developer, I was able to practice my React.js and CSS3 skills in this project.",
  },  
   
];

const InprogressProjectsData = [
   
  {
    id: "url-short",
    img: landingPage,
    name: "URL shortening API landing page",
    stack: ["< JavaScript />", "< NodeJS />"],
    live: "",
    source: "https://github.com/rimshub/URL-shortening-API-landing-page",
    description:  
        "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge",
  },

];

export default {ProjectsData, InprogressProjectsData}
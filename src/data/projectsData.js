 
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
    img: Servista,
    name: "MetaVerse Landing Page",
    stack: ["< Next />", "< Tailwind Css />", "< React.js />"],
    live: "https://metaverse-next-js-website.vercel.app/",
    source: "https://github.com/rimshub/rest-countries-api",
    description:  
        "Landing-page Metaverse website provides relevent information for users. It has a responsive design and navigation. A large and complex project that required me to plan ahead and break down the work into smaller chunks. I used Next.js to build the website and Tailwind Css for styling and framer motion for animation.",
  },

  {
    id: "portfolio",
    img: Servista,
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
    id: "expense Tracker App",
    img: Servista,
    name: "Expense Tracker App",
    stack: ["< React />", "< Styled Component />", "< JavaScript />"],
    live: "https://expense-trcker.netlify.app/",
    source: "https://github.com/rimshub/javascript-advice-generator",
    description:  
        "This is a expense tracker app using hooks and states. A small and fun app to practice React.Js. It has functionality to add or remove expenses and manage it .",
  },


  {
    id: "pizza",
    img: Servista,
    name: "Pizza Eccomerce Website with Cart Management (In Progress)", 
    stack: ["< React Js />  ", "< State management />"],
    live: "https://rimshub.github.io/JavaScript-Todo-App/",
    source: "https://github.com/rimshub/JavaScript-Todo-App",
    description:  
        "Responsive JS todo app with color theme switcher. Enables users to add, delete, filter, and clear day-to-day tasks. It has user-friendly interface and navigation. I was able to practice my JavaScript and Sass skills in this project.",
  },

  {
    id: "Job Vacancy App",
    img: Servista,
    name: "Job Vacancy App",
    stack: ["< React.js />   ", "< CSS3 />"],
    live: "https://jobs-vacancies.netlify.app/",
    source: "https://github.com/rimshub/figma-design-to-reactjs",
    description:  
        "In this app, I build a portal where jobs are displaying and user can apply and create job vacancy. I used React.js to build the website and Tailwind Css for styling. also i used hooks and states to manage the data. ",
  },  
  {
    id: "imdb movies app",
    img: Servista,
    name: "IMDB Movies Clone App",
    stack: ["< React.js />   ", "< CSS3 />"],
    live: "https://the-imdb-movies.netlify.app/",
    source: "https://github.com/rimshub/figma-design-to-reactjs",
    description:  
        "'ve implemented this multi page website with React, Custom Css, React Carasoul,React Router, React Hooks, React Context API, . I've used React Router to navigate between pages.",
  },
   
];

const InprogressProjectsData = [
   
  {
    id: "url-short",
    img: Servista,
    name: "URL shortening API landing page",
    stack: ["< JavaScript />", "< NodeJS />"],
    live: "",
    source: "https://github.com/rimshub/URL-shortening-API-landing-page",
    description:  
        "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge",
  },

];

export default {ProjectsData, InprogressProjectsData}
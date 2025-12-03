import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  anteraja,
  satuhikmah,
  kominfo,
  jakarta,
  mysql,
  aws,
  postgree,
  java,
  angular,
  satuhikmahweb,
  movieweb,
  anterajaweb,
  gradient,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Canva",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  { name: "Java", icon: java },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  { name: "Angular", icon: angular },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "MySQL",
    icon: mysql,
  },
  { name: "AWS", icon: aws },
  {
    name: "Postgree",
    icon: postgree,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Software Development",
    company_name: "AnterAja",
    icon: anteraja,
    iconBg: "#383E56",
    date: "Jul 2025 - Present",
    points: [
      "Implemented website design according to provided UI/UX specifications, ensuring responsive and user-friendly interfaces.",
      "Developed and maintained backend unit tests in Spring Boot using JUnit and Mockito to ensure code reliability and improve overall system quality.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "SatuHikmah",
    icon: satuhikmah,
    iconBg: "#E6DEDD",
    date: "Sep 2025 - Present",
    points: [
      "Responsible for maintaining and redesigning the organization’s website to improve its functionality, user experience, and visual consistency.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Kominfo",
    icon: kominfo,
    iconBg: "#383E56",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Developed and enhanced a website by adding features using the CodeIgniter framework included designing, coding, and integrating new functionalities while optimizing for performance and user experience. Collaborated with the team to troubleshoot, test, and refine features. Gained hands-on experience in PHP-based web development and strengthened problem-solving and coding skills .",
    ],
  },
  {
    title: "Internship",
    company_name: "Jakarta City Government",
    icon: jakarta,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Mar 2019",
    points: [
      "Assisting the City Government in monitoring spatial planning and land utilization using Google Maps, along with generating reports.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SatuHikmah",
    description:
      "Developed and deployed a highly responsive community platform (satuhikmah.id) designed to promote self-development and career programs for Muslim youth. The project involved translating a complete, pre-existing design from Figma intofunctional code, ensuring pixel-perfect accuracy and consistency. This platform features clear, user-friendly navigation forflagship spiritual programs (e.g., Kembara Hikmah) and digital products.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: satuhikmahweb,
    source_code_link: "https://github.com/Faridl003/satuhikmah",
  },
  {
    name: "Real-Time Movie & TV Dashboard",
    description:
      "Developed a Real-Time Movie & TV Dashboard using React.js for the frontend, powered by Appwrite as the backend service, and integrating the TMDB API for data fetching. The platform features dynamic, real-time trending views and arobust universal search function that allows users to explore movies and TV shows instantly. Implemented RESTful APIconsumption and utilized Appwrite for seamless user management (Authentication/Database) and data persistence.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: movieweb,
    source_code_link: "https://github.com/Faridl003/react-movies",
  },
  {
    name: "AnterAja Website",
    description:
      "Contributed as a Frontend Developer to the main Anteraja corporate website, focusing on the implementation of several new content pages into the production environment. This project involved accurately translating visual designsprovided in Figma into fully functional Angular components, utilizing the Bootstrap framework for styling and ensuring a responsiveand consistent user experience across all devices. This contribution enriched the user journey by supporting thedisplay of new corporate information and services.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: anterajaweb,
    source_code_link: "https://anteraja.id/id/umkm",
  },
];

export { services, technologies, experiences, testimonials, projects };

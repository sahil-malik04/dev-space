import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const about =
  "Hi, I’m Sahil Malik - a Full-Stack Developer passionate about transforming ideas into smooth and engaging digital experiences. Over the past 3.5+ years, I’ve built web and mobile applications that are not only reliable but also user-friendly and scalable. I love tackling challenging problems, improving performance, and exploring new technologies to craft innovative solutions. Teamwork and continuous learning motivate me, and I take pride in creating products that truly make a difference.";

const profileTitle = [
  "Sahil Malik",
  1000,
  "Full-Stack Developer",
  1000,
  "MERN Stack Specialist",
  1000,
  "Mobile App Developer",
  1000,
];

const achievementsList = [
  {
    metric: "Years of Experience",
    value: "3.5",
    postfix: "+",
  },
  {
    metric: "Projects Delivered",
    value: "20",
    postfix: "+",
  },

  {
    metric: "Awards & Recognitions",
    value: "4",
  },
  {
    metric: "Team Members Led",
    value: "5",
    postfix: "+",
  },
];

const skills = [
  "System Design",
  "Data Structures",
  "Javascript",
  "C",
  "C++",
  "Node.js",
  "Express.js",
  "REST APIs",
  "TypeScript",
  "React.js",
  "Redux",
  "React Native",
  "Next.js",
  "Vue.js",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Git",
  "Amazon Web Services (AWS)",
  "Twilio",
];

const certifications = [
  {
    id: 1,
    title: "Excellence Performance",
    company: "DuckTale IT Services Pvt. Ltd.",
    date: "(May 2024)",
  },
  {
    id: 2,
    title: "Code for the Web and Terminology of Internet",
    company: "University of Leeds",
    date: "(Jun 2020)",
  },
  {
    id: 3,
    title: "Fundamentals of Digital Marketing",
    company: "Google",
    date: "(Apr 2020)",
  },
  {
    id: 4,
    title: "'C' Test",
    company: "Spoken Tutorial",
    date: "(Sep 2019)",
  },
  {
    id: 5,
    title: "'C++' Test",
    company: "Spoken Tutorial",
    date: "(Sep 2019)",
  },
  {
    id: 6,
    title: "Hackathon Participant (Spr. by Hackerearth, Code::Blocks)",
    company: "Chandigarh Group of Colleges, Jhanjeri Mohali",
    date: "(Sep 2019)",
  },
  {
    id: 7,
    title: "Volunteer Parivartan-fest (2018)",
    company: "Chandigarh Group of Colleges, Landran, Punjab",
    date: "(Nov 2018)",
  },
];

const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    field: "Information Technology",
    university: "Chandigarh University",
    date: "(2023 – 2025)",
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    field: "Information Technology",
    university: "Chandigarh University",
    date: "(2018 – 2021)",
  },
];

const projectsData = [
  {
    id: 1,
    title: "CureEats",
    description:
      "CureEats is a nutrition-focused platform that helps users access personalized diet plans and healthy meal recommendations. The platform allows clients to track their progress, consult with dieticians, and receive tailored guidance to meet their health goals. With an intuitive interface and data-driven insights, CureEats makes healthy eating simple and achievable for everyone.",
    image: "/images/projects/cureeats-collage.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://thecureeats.com/",
  },
  {
    id: 2,
    title: "LaFetch",
    description:
      "LaFetch is a luxury e-commerce platform that brings exclusive, high-end products to your doorstep. Its unique quick commerce model sets it apart - with certain outfits and essentials delivered in as little as 2 hours, combining the elegance of luxury shopping with the speed of instant delivery. It’s designed to give customers a premium shopping experience without the wait.",
    image: "/images/projects/laFetch-collage.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/sahil-malik04/laFetch-backend.git",
    previewUrl: "https://www.la-fetch.com/",
  },
  {
    id: 3,
    title: "Invozio",
    description:
      "Invozio is a user-friendly online invoicing platform that helps business owners streamline their billing process. Customers can easily register, manage clients, and generate professional invoices for employees or freelancers. The platform simplifies financial management, saving time and reducing errors, while providing a seamless digital experience for businesses of all sizes.",
    image: "/images/projects/invozio-collage.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sahil-malik04/invozio-web",
    previewUrl: "https://invozio.com/",
  },
];

const social = [
  {
    id: 1,
    href: "https://github.com/sahil-malik04",
    src: GithubIcon,
    alt: "Github Icon",
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/sahil-malik04/",
    src: LinkedinIcon,
    alt: "Linkedin Icon",
  },
];

const socialText =
  "Got an idea that needs life online? Whether you’re a business aiming to go digital, a startup with an exciting project, or someone looking for a talented developer to bring your vision to reality, I’m here to help. Let’s team up, create something amazing, and turn your ideas into sleek, high-performing web and mobile experiences that truly stand out!";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export {
  profileTitle,
  achievementsList,
  skills,
  certifications,
  about,
  education,
  projectsData,
  social,
  socialText,
  navLinks,
};

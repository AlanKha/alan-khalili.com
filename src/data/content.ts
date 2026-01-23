export const RESUME_LINK = "https://drive.google.com/file/d/1Tl-Rk3PzGutTMBqUW4pap3Og_XXCxw2E/view?usp=sharing";

export const heroContent = {
  greeting: "Hi, my name is",
  name: "Alan Khalili",
  emoji: "👋",
  intro: "Excited to join Capital One as a Software Engineer in August!",
  highlight: "I love coding, coffee, and keyboards!",
  callToAction: "Always on the lookout for new, exciting opportunities! Feel free to",
  linkText: "reach out",
};

export const ASSETS = {
  marqueeBannerPng: "https://2tbvn4haj0.ufs.sh/f/jTupBFNKiwOdYQmj72MQnJx6waY0mdLOvijU4ZgC9fyrzhDB",
  noiseLight: "https://2tbvn4haj0.ufs.sh/f/jTupBFNKiwOdIOeZYna9fZUb5QXuMdGaP9yYqsJ6mljEhpAI",
};

export interface ExperienceItem {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  link: string;
}

export interface ProjectItem {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  link: string;
  githubLink?: string;
}

export const experiences: ExperienceItem[] = [
  {
    imageSrc:
      "https://2tbvn4haj0.ufs.sh/f/jTupBFNKiwOdbyPUSsW8K4koVYbBQRTlniSfmwzOyZ37FEht",
    imageAlt: "Walmart logo",
    title: "Software Engineer Intern, Walmart",
    description:
      "Developed internal tools for Walmart's suppliers to streamline their workflows.",
    link: "https://walmart.com/",
  },
  {
    imageSrc:
      "https://2tbvn4haj0.ufs.sh/f/jTupBFNKiwOdi4mlgNTk8Jzg2tHIWo7UcKfeSRpLaDwkvBGx",
    imageAlt: "Hack4Impact logo",
    title: "Director of Talent Development, Hack4Impact",
    description:
      "Led 30+ students to build and maintain our internal web applications.",
    link: "https://utk.hack4impact.org/",
  },
  {
    imageSrc:
      "https://2tbvn4haj0.ufs.sh/f/jTupBFNKiwOdqIcvNI3oG3Dmfe0pcas4OESBkTqy7ZlQbtPd",
    imageAlt: "University of Tennessee logo",
    title: "Research Intern, University of Tennessee",
    description:
      "Trained computer vision algorithms for shooter identification and tracking.",
    link: "https://www.utk.edu/",
  },
];

export const projects: ProjectItem[] = [
  {
    imageSrc:
      "https://2tbvn4haj0.ufs.sh/f/jTupBFNKiwOdcRbej9Xly7KdRxX4tiC2wkPnsvJcS9ZEzoWI",
    imageAlt: "St. Christopher's Fund logo",
    title: "Developer, St. Christopher's Fund",
    description:
      "Developed centralized user and admin dashboards for streamlined program management.",
    link: "https://truckersfund.org/",
    githubLink: "https://github.com/hack4impact-utk/st-christophers-fund",
  },
  {
    imageSrc:
      "https://2tbvn4haj0.ufs.sh/f/jTupBFNKiwOdEASBfigjC0lcn14ZKXYTafLu3g6RbB8oJyDH",
    imageAlt: "Geekhack Logo",
    title: "Geekhack, Reimagined",
    description:
      "Redesigned the Geekhack website to improve user experience and engagement.",
    link: "https://geekhack.org/",
    githubLink: "https://github.com/AlanKha/GeekHack-Reimagined",
  },
  {
    imageSrc:
      "https://2tbvn4haj0.ufs.sh/f/jTupBFNKiwOdpVTH5hPNpbdSjuwPJhY9exT1OlBkRgZUmKQy",
    imageAlt: "Donation Box Gif",
    title: "Donation Management System",
    description:
      "Delivered a user-centric inventory management system to a local donation center serving families in Rural Appalachia.",
    link: "https://missionofhope.org/",
    githubLink: "https://github.com/hack4impact-utk/mission-of-hope",
  },
];

export const musicContent = {
  title: "My Café",
  description: "A collection of songs that I've been listening to recently.",
  playlistUrl: "https://open.spotify.com/embed/playlist/37i9dQZEVXdenIm3AHUCwI?utm_source=generator",
};

export const menuItems = [
  { href: "#Experience", text: "Experience" },
  { href: "#Projects", text: "Projects" },
  { href: "#Contact", text: "Contact" },
  {
    href: RESUME_LINK,
    text: "Resume",
    isExternal: true,
  },
];

export const footerLinks = [
  {
    href: "https://linkedin.com/in/alankhalili",
    text: "LinkedIn",
  },
  {
    href: "mailto:khalilialan@gmail.com",
    text: "Email",
  },
  {
    href: "https://github.com/alankha",
    text: "GitHub",
  },
  {
    href: "https://www.instagram.com/alan_khalili/",
    text: "Instagram",
  },
];

import Card from "../ui/Card";

export default function Projects() {
  const projects = [
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

  return (
    <div
      id="Projects"
      className=" bg-custom-ivory text-black px-8 lg:px-36 pb-32 py-16"
    >
      <div className="px-3 text-2xl flex justify-between border-b pb-2 border-black">
        <h1 className="">Projects</h1>
        <h2 className="justify-end"></h2>
      </div>
      {projects.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
  );
}

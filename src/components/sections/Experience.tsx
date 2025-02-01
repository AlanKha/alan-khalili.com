import Card from "../ui/Card";

export default function Experience() {
  const experiences = [
    {
      imageSrc: "https://2tbvn4haj0.ufs.sh/f/jTupBFNKiwOdqIcvNI3oG3Dmfe0pcas4OESBkTqy7ZlQbtPd",
      imageAlt: "University of Tennessee logo",
      title: "Research Intern, University of Tennessee",
      description: "Implemented computer vision algorithms for shooter identification and tracking.",
      link: "https://www.utk.edu/",
    },
    {
      imageSrc: "https://2tbvn4haj0.ufs.sh/f/jTupBFNKiwOdcRbej9Xly7KdRxX4tiC2wkPnsvJcS9ZEzoWI",
      imageAlt: "St. Christopher's Fund logo",
      title: "Fullstack Developer, St. Christopher's Fund",
      description: "Developed centralized user and admin dashboards for streamlined program management.",
      link: "https://truckersfund.org/",
    },
    {
      imageSrc: "https://2tbvn4haj0.ufs.sh/f/jTupBFNKiwOdpVTH5hPNpbdSjuwPJhY9exT1OlBkRgZUmKQy",
      imageAlt: "mission of hope logo",
      title: "Fullstack Developer, Mission of Hope",
      description: "Increased operational efficiencies by creating internal systems for their donors and admins.",
      link: "https://missionofhope.org/",
    },
  ];

  return (
    <div
      id="Experience"
      className="bg-none bg-white text-black px-8 lg:px-36 py-16"
    >
      <div className="pt-12 px-3 text-2xl flex justify-between border-b pb-2 border-black">
        <h1 className="">Experience</h1>
        <h2 className="justify-end"></h2>
      </div>
      {experiences.map((experience, index) => (
        <Card key={index} {...experience} />
      ))}
    </div>
  );
}

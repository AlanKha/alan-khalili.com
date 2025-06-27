import Card from "../ui/Card";

export default function Experience() {
  const experiences = [
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
        "Led 40+ students to build and maintain our internal web applications.",
      link: "https://utk.hack4impact.org/",
    },
    {
      imageSrc:
        "https://2tbvn4haj0.ufs.sh/f/jTupBFNKiwOdcRbej9Xly7KdRxX4tiC2wkPnsvJcS9ZEzoWI",
      imageAlt: "St. Christopher's Fund logo",
      title: "Developer, St. Christopher's Fund",
      description:
        "Developed centralized user and admin dashboards for streamlined program management.",
      link: "https://truckersfund.org/",
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

  return (
    <div
      id="Experience"
      className="bg-none bg-custom-ivory text-black px-8 lg:px-36 py-16"
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

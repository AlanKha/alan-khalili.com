import Card from "../ui/Card";

export default function Projects() {
  const projects = [
    {
      imageSrc: "https://2tbvn4haj0.ufs.sh/f/jTupBFNKiwOdvOOqzy03rj14VZx5hyJniPDg6cU0wRQuFdpL",
      imageAlt: "Donation Box Gif",
      title: "Donation Management System",
      description: "Delivered a user-centric inventory management system to a local donation center serving families in Rural Appalachia.",
      link: "https://missionofhope.org/",
      githubLink: "https://github.com/hack4impact-utk/mission-of-hope",
    },
    {
      imageSrc: "https://2tbvn4haj0.ufs.sh/f/jTupBFNKiwOdrnC0ogY0BNidfcysT9vhaLJquFW5bt6DSEGU",
      imageAlt: "Dijkstra's Algorithm Demo",
      title: "Routing App",
      description: "A high-performance application to find the optimal route between cities using Dijkstra's Algorithm.",
      link: "https://github.com/AlanKha/Routing-Application",
      githubLink: "https://github.com/AlanKha/Routing-Application",
    },
    {
      imageSrc: "https://2tbvn4haj0.ufs.sh/f/jTupBFNKiwOdDlQ15P73P591hwCtevRZd2uEpgUFfcTzHYxK",
      imageAlt: "Python Logo",
      title: "Coffee Recommender",
      description: "A recommendation system using cosine similarity based on numeric and textual attributes.",
      link: "https://github.com/AlanKha/Coffee-Recommender",
      githubLink: "https://github.com/AlanKha/Coffee-Recommender",
    },
  ];

  return (
    <div
      id="Projects"
      className="bg-none bg-white text-black px-8 lg:px-36 pb-32 py-16"
    >
      <div className="px-3 text-2xl flex justify-between border-b pb-2 border-black">
        <h1 className="">Featured Work</h1>
        <h2 className="justify-end"></h2>
      </div>
      {projects.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
  );
}

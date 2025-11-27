import { projects } from "../../data/content";
import Card from "../ui/Card";
import { Section, SectionHeader } from "../ui/Section";

/**
 * A component that renders the projects section.
 */
export default function Projects() {
  return (
    <Section
      id="Projects"
      className="bg-custom-ivory text-black pb-32"
    >
      <SectionHeader title="Projects" />
      {projects.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </Section>
  );
}

import { projects } from "../../data/content";
import Card from "../ui/Card";
import { Section, SectionHeader } from "../ui/Section";

export default function Projects() {
  return (
    <Section id="Projects" className="pb-32">
      <SectionHeader title="Projects" subtitle="Things I've built" />
      {projects.map((project) => (
        <Card key={project.id} {...project} />
      ))}
    </Section>
  );
}

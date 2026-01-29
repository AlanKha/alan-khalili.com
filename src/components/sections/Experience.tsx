import { experiences } from "../../data/content";
import Card from "../ui/Card";
import { Section, SectionHeader } from "../ui/Section";

export default function Experience() {
  return (
    <Section id="Experience">
      <SectionHeader title="Experience" subtitle="Where I've honed my craft" />
      {experiences.map((experience) => (
        <Card key={experience.id} {...experience} ctaText="View Company" />
      ))}
    </Section>
  );
}

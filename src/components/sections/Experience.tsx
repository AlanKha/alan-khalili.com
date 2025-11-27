import { experiences } from "../../data/content";
import Card from "../ui/Card";
import { Section, SectionHeader } from "../ui/Section";

/**
 * A component that renders the experience section.
 */
export default function Experience() {
  return (
    <Section
      id="Experience"
      className="bg-none bg-custom-ivory text-black"
    >
      <SectionHeader title="Experience" />
      {experiences.map((experience, index) => (
        <Card key={index} {...experience} />
      ))}
    </Section>
  );
}

import { RoughNotation } from "react-rough-notation";
import { heroContent } from "../../data/content";
import Music from "./Music";

/**
 * A component that renders the hero section.
 */
export default function Hero() {
  return (
    <>
      <div
        id="Hero"
        className="px-8 lg:px-36 flex justify-center  text-center flex-col items-center min-h-[85vh] py-24"
      >
        <h1 className="text-6xl leading-snug font-bold pb-4">
          {heroContent.greeting}{" "}
          <span className="text-custom-blue">
            <RoughNotation
              type="underline"
              show={true}
              animationDelay={500}
              color="var(--color-custom-ivory)"
              strokeWidth={3}
              multiline={true}
            >
              {heroContent.name}
            </RoughNotation>
          </span>
          {heroContent.emoji}
        </h1>
        <h2 className="text-xl leading-loose">
          {heroContent.intro}{" "}
          <RoughNotation
            type="highlight"
            iterations={1}
            show={true}
            color="var(--color-custom-yellow)"
            animationDelay={2000}
            animationDuration={1000}
            multiline={true}
          >
            {heroContent.highlight}
          </RoughNotation>{" "}
          {heroContent.callToAction}{" "}
          <RoughNotation
            type="circle"
            show={true}
            color="var(--color-custom-ivory)"
            animationDelay={4000}
            multiline={true}
          >
            <a className="underline" href="#Contact">
              {heroContent.linkText}
            </a>
          </RoughNotation>
        </h2>
        <Music />
      </div>
    </>
  );
}

import { RoughNotation } from "react-rough-notation";

export default function Hero() {
  return (
    <div
      id="Hero"
      className="px-8 lg:px-36 flex justify-center  text-center flex-col items-center min-h-[85vh] py-24"
    >
      <h1 className="text-6xl leading-snug font-bold pb-4">
        Hi, my name is{" "}
        <span className="text-blue-300">
          <RoughNotation
            type="underline"
            show={true}
            animationDelay={500}
            color={"white"}
            strokeWidth={3}
            multiline={true}
          >
            Alan Khalili
          </RoughNotation>
        </span>
        👋
      </h1>
      <h2 className="text-xl leading-loose">
        It&apos;s my last year at The University of Tennessee studying Computer
        Science!{" "}
        <RoughNotation
          type="highlight"
          iterations={1}
          show={true}
          color={"#bf9002"}
          animationDelay={2000}
          animationDuration={1000}
          multiline={true}
        >
          I love coding, coffee, and keyboards!
        </RoughNotation>{" "}
        Always on the lookout for new, exciting opportunities! Feel free to{" "}
        <RoughNotation
          type="circle"
          show={true}
          color="white"
          animationDelay={4000}
          multiline={true}
        >
          <a className="underline" href="#Contact">
            reach out
          </a>
        </RoughNotation>
      </h2>
    </div>
  );
}

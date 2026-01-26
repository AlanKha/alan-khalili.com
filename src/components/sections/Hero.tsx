import { RoughNotation } from "react-rough-notation";
import { heroContent } from "../../data/content";

/**
 * A component that renders the hero section.
 */
export default function Hero() {
  return (
    <div
      id="Hero"
      className="px-6 lg:px-36 flex justify-center text-center flex-col items-center min-h-[90vh] py-32 bg-custom-ivory relative overflow-hidden"
    >
      {/* Decorative background element could go here */}
      
      <div className="max-w-4xl z-10">
        <h1 className="text-5xl md:text-8xl leading-[1.1] font-medium pb-8 text-custom-black">
          <span className="font-serif italic block mb-2">{heroContent.greeting}</span>
          <span className="font-sans font-bold tracking-tight text-custom-black relative inline-block">
            <RoughNotation
              type="highlight"
              show={true}
              animationDelay={500}
              color="var(--color-custom-brown)"
              padding={[0, 10, 0, 10]}
              multiline={true}
              iterations={2}
            >
              <span className="text-custom-ivory px-2">{heroContent.name}</span>
            </RoughNotation>
          </span>
          <span className="ml-4 align-top text-6xl md:text-8xl transform rotate-12 inline-block origin-bottom-left hover:animate-pulse cursor-default">
            {heroContent.emoji}
          </span>
        </h1>
        
        <h2 className="text-xl md:text-3xl leading-relaxed font-serif text-custom-black/80 max-w-2xl mx-auto mt-8">
          {heroContent.intro}{" "}
          <span className="whitespace-nowrap">
            <RoughNotation
              type="underline"
              iterations={3}
              show={true}
              strokeWidth={2}
              color="var(--color-custom-green)"
              animationDelay={2000}
              animationDuration={1500}
            >
              {heroContent.highlight}
            </RoughNotation>
          </span>{" "}
          <span className="block mt-4">{heroContent.callToAction}</span>
        </h2>

        <div className="mt-12">
           <a 
             className="group relative inline-block text-2xl font-bold uppercase tracking-widest hover:text-custom-brown transition-colors" 
             href="#Contact"
           >
            {heroContent.linkText}
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-custom-black group-hover:bg-custom-brown transition-colors"></span>
           </a>
        </div>
      </div>
    </div>
  );
}

import { AiFillGithub } from "react-icons/ai";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  link: string;
  githubLink?: string;
}

export default function Card({
  imageSrc,
  imageAlt,
  title,
  description,
  link,
  githubLink,
}: CardProps) {
  return (
    <div className="text-2xl pt-4 md:pt-0 md:h-40 flex flex-col md:flex-row items-center border-b pb-2 border-black">
      <div className="w-full md:w-32 mb-4 md:mb-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="object-scale-down w-full max-h-32 md:max-w-none"
        />
      </div>
      <div className="w-full md:w-[80%] px-2 flex flex-col gap-1 justify-end">
        <a
          href={link}
          target="_blank"
          className="text-xl font-semibold"
        >
          {title}
        </a>
        <h3 className="text-lg">
          {description}
        </h3>
      </div>
      {githubLink && (
        <div className="invisible md:visible w-full md:w-16 ml-auto flex items-center justify-end">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="text-3xl" size={50} />
          </a>
        </div>
      )}
    </div>
  );
}

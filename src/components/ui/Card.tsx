import { AiFillGithub } from "react-icons/ai";
import { motion } from "motion/react";

/**
 * The props for the Card component.
 */
interface CardProps {
  id?: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  link: string;
  githubLink?: string;
}

/**
 * A component that renders a card with an image, title, description, and links.
 * @param imageSrc The source of the image.
 * @param imageAlt The alt text for the image.
 * @param title The title of the card.
 * @param description The description of the card.
 * @param link The link to the project.
 * @param githubLink The link to the project's GitHub repository.
 */
export default function Card({
  imageSrc,
  imageAlt,
  title,
  description,
  link,
  githubLink,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0.25,
      }}
      viewport={{ once: true }}
    >
      <div className="text-2xl pt-4 md:pt-0 md:h-40 flex flex-col md:flex-row items-center border-b pb-2 border-black">
        <div className="w-full md:w-32 mb-4 md:mb-0">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="object-scale-down w-full max-h-32 md:max-w-none"
          />
        </div>
        <div className="w-full md:w-[80%] px-2 flex flex-col gap-1 justify-end">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold">
            {title}
          </a>
          <h3 className="text-lg">{description}</h3>
        </div>
        {githubLink && (
          <div className="hidden md:flex w-full md:w-16 ml-auto flex items-center justify-end">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <AiFillGithub className="text-3xl" size={50} />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

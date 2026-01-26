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
  ctaText?: string;
}

/**
 * A component that renders a card with an image, title, description, and links.
 * @param imageSrc The source of the image.
 * @param imageAlt The alt text for the image.
 * @param title The title of the card.
 * @param description The description of the card.
 * @param link The link to the project.
 * @param githubLink The link to the project's GitHub repository.
 * @param ctaText Optional text for the call-to-action button.
 */
export default function Card({
  imageSrc,
  imageAlt,
  title,
  description,
  link,
  githubLink,
  ctaText = "Visit Website",
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="w-full"
    >
      <div className="bg-[var(--color-surface)] border-2 border-custom-black p-6 mb-8 shadow-[6px_6px_0px_0px_var(--color-custom-black)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_var(--color-custom-black)] flex flex-col md:flex-row gap-6 items-start">
        {/* Image Container */}
        <div className="w-full md:w-48 shrink-0">
          <div className="border border-custom-black p-2 bg-custom-ivory">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-32 object-contain bg-[var(--color-surface)]"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col flex-grow gap-3">
          <div className="flex justify-between items-start">
            <h3 className="font-serif text-3xl italic font-medium text-custom-black leading-tight">
              {title}
            </h3>
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block text-custom-black hover:text-custom-brown transition-colors"
              >
                <AiFillGithub size={32} />
              </a>
            )}
          </div>
          
          <p className="font-sans text-custom-black/80 leading-relaxed text-lg">
            {description}
          </p>

          <div className="mt-auto pt-4 flex items-center gap-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-custom-black text-custom-ivory px-6 py-2 font-bold uppercase tracking-wider text-sm border-2 border-transparent hover:bg-transparent hover:text-custom-black hover:border-custom-black transition-all"
            >
              {ctaText}
            </a>
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden text-custom-black hover:text-custom-brown"
              >
                <AiFillGithub size={32} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

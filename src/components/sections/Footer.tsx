import { footerLinks } from "../../data/content";

/**
 * A component that renders the footer section.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col px-8 lg:px-36 pb-5 md:flex-row text-center md:text-left md:items-center">
      <div className="flex-1 flex-wrap mb-2 ">
        {footerLinks.map((link) => (
          <a
            key={link.text}
            href={link.href}
            target="_blank"
            className="underline mr-2"
            rel="noreferrer"
          >
            {link.text}
          </a>
        ))}
      </div>
      <p className="md:text-right">Alan Khalili © {currentYear}</p>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col px-8 lg:px-36 pb-5 md:flex-row text-center md:text-left md:items-center">
      <div className="flex-1 flex-wrap mb-2 ">
        <a
          href="https://linkedin.com/in/alankhalili"
          target="_blank"
          className="underline mr-2"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="mailto:khalilialan@gmail.com"
          target="_blank"
          className="underline mr-2"
          rel="noreferrer"
        >
          Email
        </a>
        <a
          href="https://github.com/alankha"
          target="_blank"
          className="underline mr-2"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.instagram.com/alan_khalili/"
          target="_blank"
          className="underline"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
      <p className="md:text-right">Alan Khalili © {currentYear}</p>
    </div>
  );
}

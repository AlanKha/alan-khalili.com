import Marquee from "react-fast-marquee";
import { useGithubRepos } from "../../hooks/useGithubRepos";

/**
 * A component that renders a sliding marquee of GitHub repositories.
 */
export default function SlidingMarquee() {
  const { repos, error } = useGithubRepos("AlanKha");

  if (error || !repos || repos.length === 0) {
    return null;
  }

  return (
    <div className="my-0 flex text-custom-black text-2xl bg-linear-to-b from-transparent to-custom-ivory via-custom-ivory overflow-hidden">
      <div className="h-32 flex items-center justify-center w-full relative">
        {/* Masked Border Layer */}
        <div className="absolute inset-0 w-full h-full mask-marquee bg-custom-black pointer-events-none opacity-20 dark:opacity-40"></div>

        <Marquee pauseOnHover={true} delay={1}>
          {repos
            .filter((repo) => !repo.private) // Filter out private repositories
            .map((repo) => (
              <a
                key={repo.id}
                href={`https://github.com/AlanKha/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mx-6 ">
                  {repo.name}{" "}
                  <span className="text-sm">
                    {repo.language ? `(${repo.language})` : ""}
                  </span>
                </span>
              </a>
            ))}
        </Marquee>
      </div>
    </div>
  );
}

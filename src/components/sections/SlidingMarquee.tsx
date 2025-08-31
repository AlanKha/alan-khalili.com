import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

/**
 * An interface for a GitHub repository.
 */
interface GitHubRepo {
  id: number;
  name: string;
  private: boolean;
  language: string | null;
}

/**
 * A component that renders a sliding marquee of GitHub repositories.
 */
export default function SlidingMarquee() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/AlanKha/repos")
      .then((res) => res.json())
      .then((data: GitHubRepo[]) => setRepos(data));
  }, []);

  return (
    <div className="my-0 flex text-black text-2xl bg-linear-to-b from-transparent to-custom-ivory via-custom-ivory overflow-hidden">
      <div className="h-32 flex items-center justify-center w-full bg-marquee-banner bg-repeat-x bg-contain">
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

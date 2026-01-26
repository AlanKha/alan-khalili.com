import { useEffect, useState } from "react";

export interface GitHubRepo {
  id: number;
  name: string;
  private: boolean;
  language: string | null;
}

export function useGithubRepos(username: string) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const cacheKey = `github_repos_${username}`;
    const cachedData = localStorage.getItem(cacheKey);
    const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

    if (cachedData) {
      const { repos, timestamp } = JSON.parse(cachedData);
      if (Date.now() - timestamp < CACHE_DURATION) {
        setRepos(repos);
        setLoading(false);
        return;
      }
    }

    setLoading(true);
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch repos");
        }
        return res.json();
      })
      .then((data: GitHubRepo[]) => {
        setRepos(data);
        localStorage.setItem(
          cacheKey,
          JSON.stringify({ repos: data, timestamp: Date.now() })
        );
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [username]);

  return { repos, loading, error };
}


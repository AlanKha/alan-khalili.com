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
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [username]);

  return { repos, loading, error };
}


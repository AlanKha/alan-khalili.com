import { useEffect } from 'react';

interface ExternalRedirectProps {
  to: string;
}

/**
 * A component that redirects the user to an external URL.
 * @param to The URL to redirect to.
 */
const ExternalRedirect = ({ to }: ExternalRedirectProps) => {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return null;
};

export default ExternalRedirect;

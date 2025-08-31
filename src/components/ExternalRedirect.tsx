import { useEffect } from 'react';

interface ExternalRedirectProps {
  to: string;
}

const ExternalRedirect = ({ to }: ExternalRedirectProps) => {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return null;
};

export default ExternalRedirect;

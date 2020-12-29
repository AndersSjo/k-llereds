import { useEffect, useState } from "react";

export const useMediaQuery = (query, win) => {
  console.log("win", win);
  const mediaMatch = win ? win.matchMedia(query) : {};
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  return matches;
};

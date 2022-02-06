import { useEffect, useState } from "react";

export const useOnScreen = (
  ref,
  options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  }
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    // for using Browser API specific utils https://stackoverflow.com/a/59426367
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);
    if (ref.current) observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
};

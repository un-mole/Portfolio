import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false);
  const homeRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 } // Adjust this threshold as needed
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  let nameFontSize = "text-9xl";
  let jobFontSize = "text-4xl";

  if (windowWidth < 768) {
    nameFontSize = "text-5xl";
    jobFontSize = "text-2xl";
  } else if (windowWidth < 1224) {
    nameFontSize = "text-7xl";
    jobFontSize = "text-3xl";
  }

  return (
    <div
      ref={homeRef}
      className="flex flex-col gap-6 h-screen items-center justify-center overflow-x-hidden"
    >
      <div
        id="Name"
        className={`font-Dancing max-w-full ${nameFontSize} ${
          isVisible ? "fade-left" : ""
        }`}
      >
        Anmol Raykhere
      </div>
      <div
        className={`ml-4 max-w-full ${jobFontSize} ${
          isVisible ? "fade-right" : ""
        }`}
      >
        ● Full Stack Developer
      </div>
    </div>
  );
}

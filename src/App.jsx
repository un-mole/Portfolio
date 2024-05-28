import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import CodingProfiles from "../pages/CodingProfiles";

function App() {
  const [count, setCount] = useState(0);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  const cpRef = useRef(null);

  // Function to handle smooth scroll to About section
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToCp = () => {
    cpRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col md:flex-row md:h-screen h-full w-screen overflow-x-hidden font-montserrat">
      <aside
        className="relative flex flex-col h-full bg-black p-5 text-gray-100 text-xs md:text-sm px-10 md:w-1/4 w-full items-center justify-center shadow-lg"
        style={{ boxShadow: "4px 4px 45px rgba(255, 255, 255, 0.3)" }}
      >
        <div className="flex flex-col items-center md:mb-14 mb-8 mt-5 md:mt-0">
          <img
            src="dp.jpg"
            className="w-40 md:w-40 rounded-full mb-7" // Basic styles
            // style={{ boxShadow: "0 0 15px 8px rgba(255, 255, 255, 0.8)" }} // Custom white shadow
            alt="Profile"
          />
          <div
            className="text-lg font-bold text-center"
            // style={{ textShadow: "0 0 15px rgba(255, 255, 255, 1)" }} // Custom white text shadow
          >
            Anmol Raykhere
          </div>
        </div>
        <nav className="flex md:flex-col flex-row md:gap-7 gap-5 text-center">
          <div
            className="hover:text-gray-400 cursor-pointer flex gap-1"
            onClick={scrollToHome}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="md:size-5 size-0 -translate-y-0.5"
            >
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
            <div>Home</div>
          </div>
          <div
            className="hover:text-gray-400 cursor-pointer flex gap-1"
            onClick={scrollToAbout} // Add onClick handler to scroll to About
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="md:size-5 size-0"
            >
              <path
                fill-rule="evenodd"
                d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z"
                clip-rule="evenodd"
              />
            </svg>

            <div>About</div>
          </div>
          <div className="hover:text-gray-400 cursor-pointer flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="md:size-5 size-0"
            >
              <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
              <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
              <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
              <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
            </svg>

            <div>Projects</div>
          </div>
          <div
            className="hover:text-gray-400 cursor-pointer flex gap-1"
            onClick={scrollToCp}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="md:size-5 size-0"
            >
              <path
                fill-rule="evenodd"
                d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 17.25a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75Zm2.25-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-5.25Z"
                clip-rule="evenodd"
              />
              <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
            </svg>

            <div className=" text-left">Coding Profiles</div>
          </div>
          <div
            className="hover:text-gray-400 cursor-pointer flex gap-1"
            onClick={scrollToContact}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="md:size-5 size-0"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>

            <div>Contact</div>
          </div>
        </nav>
      </aside>
      <main className="bg-gray-900 grow flex-row items-center justify-center p-5 text-gray-300">
        <div ref={homeRef}>
          {" "}
          <Home />
        </div>
        <div ref={aboutRef}>
          {" "}
          <About />
        </div>
        <div ref={cpRef}>
          {" "}
          <CodingProfiles />
        </div>
        <div ref={contactRef}>
          {" "}
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;

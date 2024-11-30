"use client";

import { useTheme } from "next-themes";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  return (
    // <footer classame="flex flex-col text-sm p-5 justify-between text-center dark:bg-[#fffff]">
    <footer className="flex flex-col text-sm p-5 justify-between text-center bg-gradient-to-r from-[#e16c29] via-[#8f4ac7] via-[#e0c650] to-[#91b710] drop-shadow-xl p-5 justify-between">
       <p className="m-auto text-center text-gray-800">
        Made with {theme === "light" ? "🖤" : "🤍"} by{" "}
        <a
          href="https://github.com/blurridge"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          @blurridge
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/zachriane/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Zach Riane Machacon
        </a>
      </p>
      <p className="m-auto text-center text-gray-800">
        Reach out to <a href="mailto:cmante@devcon.ph" className="hover:underline">cmante@devcon.ph</a> for inquiries regarding your certificate.
      </p>
    </footer>
  );
};

import { useEffect, useState } from "react";

export default function ToggleDarkMode() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const html = document.getElementsByTagName("html")[0];
    const svg = document.getElementById("love").children[0].children[0];
    if (theme === "light") {
      setTheme("dark");
      html.setAttribute("class", theme);
      svg.setAttribute("stroke", "white");
    } else {
      setTheme("light");
      html.setAttribute("class", theme);
      svg.setAttribute("stroke", "black");
    }
  };
  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    html.setAttribute("class", theme);
  });

  return (
    <div className="flex items-center py-10 dark:text-white">
      <span>Light</span>

      <div>
        <div
          className="flex items-center w-8 h-5 p-1 mx-3 bg-white border rounded-full border-black/60"
          onClick={toggleTheme}
        >
          <div
            className={`inline-block w-4 h-4 bg-dark rounded-full transition-all ${
              theme === "light" ? "" : "translate-x-2"
            }`}
          ></div>
        </div>
      </div>
      <span>Dark</span>
    </div>
  );
}

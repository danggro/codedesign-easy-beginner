import { useState } from "react";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";
import NavRight from "./NavRight";

export default function Navbar() {
  const [offcanvas, setOffcanvas] = useState(false);
  return (
    <>
      <div className="xl:flex items-center mt-[58px] hidden">
        <div className="w-2/12">
          <NavLogo />
        </div>
        <div className="w-7/12">
          <NavItem />
        </div>
        <div className="w-3/12 ">
          <NavRight />
        </div>
      </div>
      <div className="flex items-center justify-between xl:hidden">
        <div className="my-7">
          <NavLogo />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#203271"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-menu"
          onClick={() => setOffcanvas(true)}
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </div>
      <div
        className={`fixed top-0 p-10 w-full min-h-screen transition-all z-50 bg-block xl:hidden ${
          offcanvas ? "right-0" : "-right-full"
        }`}
      >
        <NavItem />
        <NavRight />
        <div className="absolute top-9 right-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x"
            onClick={() => setOffcanvas(false)}
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";

export default function NavRight() {
  return (
    <div className="flex mt-8 text-white xl:mt-0 xl:justify-end xl:text-text">
      <div className="">
        <Link
          href=""
          className="font-bold text-[16px] mr-[15px] px-5 py-2 border border-transparent hover:border xl:hover:border-block hover:border-white transition-all"
        >
          Login
        </Link>
      </div>
      <div className="">
        <Link
          href=""
          className="font-bold text-[16px] px-5 py-2 border xl:border-block border-white transition-all xl:hover:bg-block xl:hover:text-white hover:bg-white hover:text-text"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}

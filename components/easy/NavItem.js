import Link from "next/link";

export default function NavItem() {
  return (
    <ul className="flex xl:space-x-[50px] text-[16px] xl:text-text text-white flex-col xl:p-0 space-y-5 xl:flex-row xl:space-y-0">
      <li>
        <Link
          href=""
          className="font-semibold hover:underline xl:hover:no-underline xl:hover:font-semibold xl:opacity-60 hover:opacity-100"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href=""
          className="font-semibold hover:underline xl:hover:no-underline xl:hover:font-semibold xl:opacity-60 hover:opacity-100"
        >
          Features
        </Link>
      </li>
      <li>
        <Link
          href=""
          className="font-semibold hover:underline xl:hover:no-underline xl:hover:font-semibold xl:opacity-60 hover:opacity-100"
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          href=""
          className="font-semibold hover:underline xl:hover:no-underline xl:hover:font-semibold xl:opacity-60 hover:opacity-100"
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="font-semibold hover:underline xl:hover:no-underline xl:hover:font-semibold xl:opacity-60 hover:opacity-100"
        >
          To Beginner Page
        </Link>
      </li>
    </ul>
  );
}

import Link from "next/link";

export default function Tweet({ tweet, tag1, tag2, tag3 }) {
  return (
    <p className="leading-[25px] text-[16px] my-[15px] inline-block">
      {tweet}
      <span className="text-[#1DA1F2]">
        <span>
          {" "}
          <Link href="/" className="hover:underline">
            {tag1}
          </Link>
        </span>
        <span>
          {" "}
          <Link href="/" className="hover:underline">
            {tag2}
          </Link>
        </span>
        <span>
          {" "}
          <Link href="/" className="hover:underline">
            {tag3}
          </Link>
        </span>
      </span>
    </p>
  );
}

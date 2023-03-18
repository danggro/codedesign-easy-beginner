import Link from "next/link";

export default function ButEasy() {
  return (
    <div className="my-10">
      <Link href="/easy">
        <button className="px-6 py-2 font-bold rounded-lg dark:bg-[#243447] dark:text-white hover:border hover:border-dark bg-white transition-all box-border borderTwitterLight dark:shadowTwitterDark dark:border-dark hover:dark:border-white">
          To Easy Page
        </button>
      </Link>
    </div>
  );
}

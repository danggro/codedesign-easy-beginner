import Image from "next/image";

export default function FooterItem({ title, description, frame }) {
  return (
    <>
      <Image src={frame} width="40" height="40" alt="" />
      <div className="ml-[25px]">
        <p className="text-xl font-bold">{title}</p>
        <p className="opacity-80 leading-[26px] text-[18px] mt-[10px]">
          {description}
        </p>
      </div>
    </>
  );
}

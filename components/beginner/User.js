import Image from "next/image";
export default function User({ userAvatar, userName, userUsername }) {
  return (
    <div className="flex ">
      <Image
        src={userAvatar}
        width="50"
        height="50"
        className="object-contain"
        alt="avatar"
      />
      <div className="pl-5 flex flex-col justify-center">
        <h4 className="font-semibold text-lg leading-5">{userName}</h4>
        <p className="opacity-60 text-[16px] leading-5">{userUsername}</p>
      </div>
    </div>
  );
}

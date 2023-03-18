import Image from "next/image";

export default function Hero() {
  return (
    <div className="xl:flex">
      <div className="xl:w-5/12 xl:mt-[151px] xl:mb-[228px] mt-5 text-text w-full">
        <h1 className="text-5xl font-medium leading-[62px] font-dm">
          Get the healthcare you need, when you need it.
        </h1>
        <p className="text-[20px] leading-[30px] mt-4">
          Manage all of your healthcare needs in one convenient place – from
          booking appointments to tracking your health history.
        </p>
        <button className="px-[35px] py-[15px] text-lg border border-transparent bg-block text-white mt-10 hover:border-block hover:bg-white hover:text-text ">
          Book an Appointment
        </button>
      </div>
      <div className="relative w-full xl:w-7/12">
        <Image
          src="/image.png"
          alt=""
          className="xl:absolute bottom-0 left-[200px] -z-10"
          width="530"
          height="794"
        />
        <Image
          src="/Rectangle.png"
          alt=""
          className="absolute xl:bottom-0 bottom-[220px] left-0 -z-20 xl:left-[140px]"
          width="590"
          height="847"
        />
        <div className="p-5 rounded-[10px] shadowHoladok w-[300px] mx-auto xl:absolute left-[38px] top-[120px] bg-white text-text xl:m-0 my-10">
          <div className="flex justify-between">
            <div className="flex items-center space-x-[10px]">
              <Image src="/EllipseHoladok.png" alt="" width="30" height="30" />
              <span className="font-semibold text-[12px]">Jane Doe</span>
            </div>
            <Image
              src="/petik.svg"
              alt=""
              className="mr-2"
              width="24"
              height="24"
            />
          </div>
          <p className="text-[12px] leading-[20px] mt-3 pr-2">
            “The doctor appointment app has been great for me. Scheduling
            appointments and getting medication reminders is much easier, and I
            love the option for virtual consultations. I&apos;d recommend this
            app to others.”
          </p>
        </div>
      </div>
    </div>
  );
}

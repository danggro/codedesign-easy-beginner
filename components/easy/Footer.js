import FooterItem from "./FooterItem";

export default function Footer() {
  return (
    <div className="xl:pl-[150px] xl:pr-[69px] xl:mb-8">
      <div className="flex p-10 bg-block xl:space-x-[32px] xl:flex-nowrap flex-wrap space-y-[32px] xl:space-y-0">
        <div className="flex items-start text-white xl:w-4/12 ">
          <FooterItem
            frame="/frame-1.svg"
            title="Online appointment scheduling"
            description="Allows users to schedule appointments with their healthcare provider through the app."
          />
        </div>
        <div className="flex items-start text-white xl:w-4/12">
          <FooterItem
            frame="/frame-2.svg"
            title="Medication reminders"
            description="Allows users to schedule appointments with their healthcare provider through the app."
          />
        </div>
        <div className="flex items-start text-white xl:w-4/12">
          <FooterItem
            frame="/frame-3.svg"
            title="Virtual consultations"
            description="Allows users to schedule appointments with their healthcare provider through the app."
          />
        </div>
      </div>
    </div>
  );
}

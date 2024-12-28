import Link from "next/link";
import { CircularText }from "../atoms/Icons";
import { ChatModal } from "../atoms/Chat"

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex flex-col items-center justify-center md:right-8 sm:right-0 
    overflow-hidden md:bottom-auto md:left-auto md:top-0 md:absolute z-20">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText
          className={"fill-dark dark:fill-light animate-spin-slow duration-200"}
        />
        <Link
          href='/' 
          className="flex items-center justify-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] shadow-md border border-solid
            bg-dark rounded-full text-white w-20 h-20 font-semibold hover:bg-light hover:border-dark hover:text-dark dark:text-dark dark:bg-light dark:hover:bg-dark
            md:w-12 md:h-12 md:text-[10px]
            "
        >
          <ChatModal />
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
import { helpMenuLink } from "@/constants";
import Link from "next/link";

const HelpMegaMenu = () => {
  return (
    <>
      <div
        className={` p-6 help-mega-menu mb-4 sm:mb-0  shadow-sm shadow-qpaytwo bg-white rounded-xl`}
      >
        <div className="container m-auto w-full flex flex-wrap justify-between ">
          {helpMenuLink.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="hover:text-qpayone"
            >
              <h4>{item.title}</h4>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HelpMegaMenu;

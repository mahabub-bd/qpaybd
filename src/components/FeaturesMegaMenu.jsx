import { featuresList } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const FeaturesMegaMenu = () => {
  return (
    <>
      <div
        className={` p-6 features-mega-menu mb-4 sm:mb-0  shadow-sm shadow-qpaytwo bg-white rounded-xl`}
      >
        <div className="container m-auto w-full flex flex-wrap justify-between ">
          {featuresList.map((item) => (
            <div key={item.id} className="flex p-1 mt-6">
              <Link
                href="../features"
                className="flex justify-center items-center flex-col hover:scale-110 text-black hover:text-qpayone"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  className="w-[30px]  h-[30px] object-contain"
                />
                <h1 className="mt-3 text-[12px]"> {item.title}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturesMegaMenu;

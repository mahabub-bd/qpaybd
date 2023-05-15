import { featuresList } from "@/constants";
import styles, { layout } from "@/styles/style";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
const Features = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="feature-bg">
      <section id="features" className={`${styles.boxWidth} mx-auto`}>
        <h2 className={`text-center ${styles.heading2} mt-4 qpay-gradient`}>
          Features
        </h2>
        <section className={`${layout.section}`}>
          <div
            className={`flex  flex-wrap justify-around  flex-col lg:flex-row items-center ${styles.paddingX}`}
          >
            {featuresList.map((item, index) => (
              <div
                key={item.id}
                className=" mb-4  rounded-[30px] cursor-pointer sectionhover feature-box  "
              >
                <div className="h-[170px] w-[340px]  h-shadow-xl flex-col  justify-around items-center relative p-2  flex ">
                  <div
                    className={` px-3 rounded-[30px] flex justify-between items-center hovercontent 
                   ${activeIndex === index && "clickevent"}  
                    top-0 sm:h-[170px] h-[150px] sm:w-[96%] w-[100%]  h-shadow-xl bg-qpayone`}
                  >
                    <h1 className="text-[16px]  font-bold text-center text-white">
                      {item.title}
                    </h1>
                    <div className="cursor-pointer icon-box p-2 backdrop-sepia-0 bg-white/30 rounded-full shadow-sm">
                      <Image
                        src={item.img}
                        alt={item.title}
                        className="w-[70px] h-[70px] object-contain p-2"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-center ">
                    <Link href="../features">
                      <p className="main-item font-semibold text-justify h-[150px] p-3 text-[14px] leading-[18px] text-gray-100 ">
                        {item.des}
                      </p>
                    </Link>
                    <BsChevronDown
                      onClick={() => handleClick(index)}
                      size={14}
                      className="sm:hidden flex align-bottom  font-bold justify-end text-white sm:absolute bottom-1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Features;

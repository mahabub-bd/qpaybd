import Image from "next/image";
import { mobile } from "../assets";
import styles from "../styles/style";

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY} `}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 animate-fade-right animate-once`}
      >
        <div className="flex flex-row justify-between items-center w-full ">
          <h1 className="flex-1 font-poppins font-semibold xs:text-[34px] text-[42px] xl:text-[42px] qpay-gradient selection:ss:leading-[70.8px] sm:leading-[46px] xl:leading-[65px] ">
            Easiest way to manage <br className="sm:block hidden" />{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold xs:text-[34px]  text-[42px] xl:text-[42px]  selection:ss:leading-[70.8px] sm:leading-[46px] xl:leading-[65px] w-full">
          all your finances
        </h1>

        <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
          Automate your payment flows and transactions under a single platform
          so that you can focus on more important things in life.
        </p>
        <div className=" mt-10">
          <a href="#download">
            {" "}
            <button className=" flex items-center justify-around w-[240px] rounded text-qpayone hover:text-white border-qpayone border px-5 py-1 font-semibold  bg-transparent hover:bg-qpayone">
              <span>Download Qpay App</span>
              <svg
                class="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
            </button>
          </a>
        </div>
      </div>

      {/* // Left end */}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative  animate-fade-left animate-once `}
      >
        <Image
          src={mobile}
          alt="billing"
          priority
          className=" w-[35%] xl:w-[45%]  relative z-[5]  "
        />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[3] w-[50%] h-[50%] right-20 bottom-20 pink__gradient" />
      </div>
    </section>
  );
};

export default Hero;

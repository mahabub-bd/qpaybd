import { appstore, playstore, qrappstore, qrplaystore } from "@/assets";
import styles, { layout } from "@/styles/style";
import Image from "next/image";

const Download = () => {
  return (
    <div className="download-bg">
      <div id="download" className={`${styles.boxWidth} mx-auto`}>
        <h2
          className={`text-center ${styles.heading2} ${styles.paddingY} qpay-gradient`}
        >
          Qpay Mobile App
        </h2>
        <div className={`${layout.section} xl:px-0 sm:px-16 px-6 `}>
          <div className="flex-1" data-aos="fade-right">
            <h3 className={`${styles.heading3}`}>Scan to Download</h3>
            <div className="flex justify-around items-center mt-5 ">
              <div className="w-[160px] ">
                <Image
                  src={qrappstore}
                  alt="qrappstore"
                  className="object-contain"
                />
                <p className="text-center mt-3 text-lg font-extralight">
                  App Store
                </p>
              </div>

              <div className="w-[160px]">
                <Image
                  src={qrplaystore}
                  alt="qrplaystore"
                  className="object-contain"
                />
                <p className="text-center mt-3 text-lg font-extralight">
                  Play Store
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1" data-aos="fade-left">
            <h3 className={`${styles.heading3}`}>Click URL to Download</h3>
            <p className={`${styles.paragraph}  xs:p-3 md:px-2 xl:px-0`}>
              Automate your payment flows and transactions under a single
              platform so that you can focus on more important things in life.
            </p>
            <div className="flex justify-around items-center mt-10 ">
              <div className="w-[180px] h-14  px-5 py-2 rounded-md ">
                <a
                  href="https://apps.apple.com/us/app/qpay-bangladesh/id1610926259?platform=iphone"
                  target="blank"
                >
                  <Image
                    src={appstore}
                    alt="qrappstore"
                    className="object-contain"
                  />
                </a>
              </div>

              <div className="h-14  px-5 py-2 rounded-md">
                <a
                  href="https://play.google.com/store/apps/details?id=com.recursion.qpay"
                  target="blank"
                >
                  <Image
                    src={playstore}
                    alt="qrplaystore"
                    className="object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;

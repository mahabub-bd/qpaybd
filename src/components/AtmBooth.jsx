import styles from "@/styles/style";

import { basic, fsibl, mgbl, ncc, rbl, sjibl } from "@/assets";
import {
  basicBoothList,
  fsiblBoothList,
  mgblBoothList,
  nccBoothList,
  rblBoothList,
} from "@/constants/atmBooth";
import { sjiblBoothList } from "@/constants/atmBooth/sjibl";
import { BoothComponent } from "../components";

export default function AtmList() {
  return (
    <div
      id="boothlist"
      className={`${styles.boxWidth} ${styles.paddingX} mx-auto my-5 `}
    >
      <h2
        className={`text-center ${styles.heading2} ${styles.paddingY} qpay-gradient`}
      >
        ATM Booth List
      </h2>
      <BoothComponent boothList={rblBoothList} bankImage={rbl} />
      <BoothComponent boothList={nccBoothList} bankImage={ncc} />
      <BoothComponent boothList={fsiblBoothList} bankImage={fsibl} />
      <BoothComponent boothList={sjiblBoothList} bankImage={sjibl} />
      <BoothComponent boothList={mgblBoothList} bankImage={mgbl} />
      <BoothComponent boothList={basicBoothList} bankImage={basic} />
    </div>
  );
}

import {
  About,
  AtmBooth,
  Banks,
  CarouselImage,
  Download,
  Features,
} from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Qpay Solutions Limited Bangladesh</title>
        <meta name="description" content="Qpay FinTech Application" />
        {/* <!--====== Favicon Icon ======--> */}
        <link rel="icon" href="favicon.ico" />
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>

      <div className=" w-full overflow-hidden ">
        <CarouselImage />
        <Features />
        <About />
        <Banks />
        <AtmBooth />
        <Download />
      </div>
    </>
  );
}

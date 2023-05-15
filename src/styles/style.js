const styles = {
  boxWidth: "xl:max-w-[1280px] w-full mx-auto",

  heading2:
    "font-poppins font-semibold xs:text-[36px] text-[30px] text-qpaygradient xs:leading-[76.8px] leading-[46.8px] w-full",
  heading3:
    " font-semibold xs:text-[26 px] text-[22px] text-center text-qpaytwo xs:leading-[56.8px] leading-[36.8px] w-full font-sans",
  paragraph:
    "font-poppins text-justify text-gray-800 font-normal text-secondry text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
import { slides } from "@/constants";
import useCarousel from "@/hooks/useCarousel";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function App() {
  const { currentIndex, prevSlide, nextSlide } = useCarousel();

  return (
    <div className="max-w-[1280px] w-[100%]  m-auto relative group transition-all">
      <div className="">
        <Image
          className="w-full h-full "
          src={slides[currentIndex].url}
          alt="carosel"
          priority
        />
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={16} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={16} />
      </div>
    </div>
  );
}

export default App;

import styles from "@/styles/style";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { close, logo, menu } from "../assets";
import { FeaturesMegaMenu, HelpMegaMenu } from "../components";
import { navLinks } from "../constants";
import useScroll from "../hooks/useScroll";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const { scrolled } = useScroll();

  return (
    <div className={`relative mx-auto bg-white`} id="home">
      <nav
        className={`"  ${
          styles.paddingX
        }  mx-auto flex py-4  xl:justify-around justify-between items-center" ${
          scrolled && "scrolled"
        } `}
      >
        <Link href="/">
          <Image
            src={logo}
            alt="qpay__headerlogo"
            className="w-[100px] h-[42px] object-contain"
            priority
          />
        </Link>
        <ul
          className={`"list-none sm:flex hidden items-center justify-center flex-1"`}
        >
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={` ${
                nav.class
              } font-poppins font-semibold cursor-pointer text-[16px] relative ${
                active === nav.title
                  ? "text-qpayone border-b-2 border-qpayone"
                  : "text-black"
              } [&:not(:last-child)]:mr-10`}
              onClick={() => setActive(nav.title)}
            >
              <Link href={`/#${nav.id}`}>{nav.title}</Link>
              <FeaturesMegaMenu />
              <HelpMegaMenu />
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center relative">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] cursor-pointer object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] rounded-xl sidebar z-50 `}
          >
            <ul className=" list-none flex justify-end flex-col flex-center items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    active === nav.title ? "text-qpayone" : "text-dimWhite"
                  }  [&:not(:last-child)]:mb-4`}
                  onClick={() => setActive(nav.title)}
                >
                  <Link href={`/#${nav.id}`} scroll={false}>
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

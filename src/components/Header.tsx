"use client";
import Link from "next/link";
import { motion, useMotionValue, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { SlMenu } from "react-icons/sl";
import { RiGlobalFill } from "react-icons/ri";

export default function Header() {
  const [isHidden, setIsHidden]: any = useState(false);
  const [isClicked, setIsClicked]: any = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // console.log({ previous, latest });

    // scroll down : previous < latest
    if (previous < latest && 100 < latest) {
      setIsClicked(false);
      setIsHidden(true);
    }
    // scroll up : previous > latest
    else setIsHidden(false);
  });

  useEffect(() => {
    const handleSetIsClicked = () => setIsClicked(false);
    window.addEventListener("click", handleSetIsClicked);
    return () => window.removeEventListener("click", handleSetIsClicked);
  }, []);

  // useEffect(() => {
  //   const unsubscribe = scrollY.on("change", (latestValue: number) => console.log({ latestValue }));
  //   return () => unsubscribe();
  // }, []);
  return (
    <header>
      <section className="section">
        <motion.nav
          variants={navVariants}
          initial="hidden"
          animate={isHidden ? "hidden" : "visible"}
          transition={{ duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="nav WEB">
            <Link href={"/#home"}>Home</Link>
            <Link href={"/#about"}>About</Link>
            <Link href={"/#works"}>Works</Link>
            <Link href={"/#contact"}>Contact</Link>
            <Link href={"/#test"}>Test</Link>
          </div>
          <div className="nav MOBILE">
            <div className="logo-and-hamburger">
              <Link className="logo" href={"/"} onClick={() => setIsClicked(false)}>
                <RiGlobalFill />
              </Link>
              <div className="hamburger" onClick={() => setIsClicked((state: any) => !state)}>
                <SlMenu />
              </div>
            </div>
            <div className="menu-outer">
              <div className={`menu ${isClicked ? "unfold" : ""}`}>
                <Link href={"/#home"} onClick={() => setIsClicked(false)}>
                  Home
                </Link>
                <Link href={"/#about"} onClick={() => setIsClicked(false)}>
                  About
                </Link>
                <Link href={"/#works"} onClick={() => setIsClicked(false)}>
                  Works
                </Link>
                <Link href={"/#contact"} onClick={() => setIsClicked(false)}>
                  Contact
                </Link>
                <Link href={"/#test"} onClick={() => setIsClicked(false)}>
                  Test
                </Link>
              </div>
            </div>
          </div>
        </motion.nav>
      </section>
    </header>
  );
}

const navVariants = {
  hidden: { y: "-200%" },
  visible: { y: 0 },
};

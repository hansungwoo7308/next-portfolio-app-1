"use client";
import Link from "next/link";
import "@/app/page.scss";
import { motion, useMotionValue, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const [hidden, setHidden]: any = useState(false);
  const { scrollY } = useScroll();

  // MotionValueEvent가 scrollY의 값을 트랙킹(추적)한다.
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // console.log({ previous, latest });
    // scroll down : previous < latest
    if (previous < latest && 100 < latest) setHidden(true);
    // scroll up : previous > latest
    else setHidden(false);
  });

  // useEffect(() => {
  //   const unsubscribe = scrollY.on("change", (latestValue: number) => console.log({ latestValue }));
  //   return () => unsubscribe();
  // }, []);
  return (
    <header>
      <section className="section">
        <motion.nav
          variants={{
            hidden: { y: "-200%" },
            visible: { y: 0 },
          }}
          initial="hidden"
          animate={hidden ? "hidden" : "visible"}
          // animate="visible"
          transition={{ duration: 0.5 }}
          // scroll
        >
          <Link href={"/#home"}>Home</Link>
          <Link href={"/#about"}>About</Link>
          <Link href={"/#works"}>Works</Link>
          <Link href={"/#contact"}>Contact</Link>
          <Link href={"/#test"}>Test</Link>
        </motion.nav>
      </section>
    </header>
  );
}

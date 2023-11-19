import { useAnimate, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  // hero section
  const heroRef: any = useRef(null);
  const { scrollYProgress }: any = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity: any = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log({ scrollY });
      // console.log("current.scrollY : ", scrollY.current);
      if (window.scrollY <= 200) {
        animate(scope.current, { opacity: 1, translateY: "0%" }, { duration: 0.5 });
      } else {
        animate(scope.current, { opacity: 0, translateY: "-500%" }, { duration: 0.5 });
      }
      // if (!scale2) return;
      // if (scale2.current === 0.5) {
      //   animate(scope.current, { opacity: 1, translateY: "0%" }, { duration: 0.2 });
      // } else {
      //   animate(scope.current, { opacity: 0, translateY: "-200%" }, { duration: 0.2 });
      // }
    });
  }, []);

  return (
    <motion.section id="hero" className="hero" ref={heroRef} style={{ opacity }}>
      <div className="hero-inner">
        <motion.div className="hero-content" ref={scope}>
          <h1>youserstack</h1>
          <small>Front-end Developer</small>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ullam labore pariatur
            repudiandae? Nihil repellat deserunt vel molestiae veritatis culpa quia, mollitia quae
            iusto! Quasi qui unde vero fugiat architecto.
          </p>
          <p>
            Simple and Clear
            <br />
            Client-Focused
            <br />
            Flexible and Responsive
            <br />
          </p>
          <Link href="/#about" className="hero-button">
            Explore
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

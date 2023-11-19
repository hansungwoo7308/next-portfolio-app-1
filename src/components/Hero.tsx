import { stagger, useAnimate, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const heroContentVariants = {
  animate: {
    transition: {
      // duration: 1,
      delayChildren: 0.7,
      staggerChildren: 0.1,
    },
  },
};

const heroContentChildVariants = {
  initial: { y: 70, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      // type: "spring",
      // damping: 30,
      // stiffness: 400,
      //
    },
    // transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] },
  },
};

export default function Hero() {
  const heroSectionRef: any = useRef(null);

  const { scrollYProgress }: any = useScroll({
    target: heroSectionRef,
    offset: ["start start", "end start"],
  });

  const opacity: any = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y: any = useTransform(scrollYProgress, [0, 1], ["0px", "-300px"]);

  // const [scope, animate]: any = useAnimate();
  // const isInView = useInView(scope, { margin: "0px 100px -50px 0px" });

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY <= 200) {
  //       animate(
  //         scope.current.children,
  //         { opacity: 1, translateY: "0" },
  //         { duration: 2, delay: stagger(0.1) }
  //       );
  //     } else {
  //       animate(
  //         scope.current.children,
  //         { opacity: 0, translateY: "-100px" },
  //         { duration: 2, delay: stagger(0.1) }
  //       );
  //     }
  //   });
  // }, []);

  return (
    <motion.section id="hero" className="hero" ref={heroSectionRef} style={{ opacity }}>
      <div className="hero-inner">
        <motion.div
          className="hero-content"
          // ref={scope}
          style={{ y }}
          variants={heroContentVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            //
            variants={heroContentChildVariants}
          >
            youserstack
          </motion.h1>
          <motion.small variants={heroContentChildVariants}>Front-end Developer</motion.small>
          <motion.p variants={heroContentChildVariants}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ullam labore pariatur
            repudiandae? Nihil repellat deserunt vel molestiae veritatis culpa quia, mollitia quae
            iusto! Quasi qui unde vero fugiat architecto.
          </motion.p>
          <div>
            <motion.p variants={heroContentChildVariants}>Simple and Clear</motion.p>
            <motion.p variants={heroContentChildVariants}>Client-Focused</motion.p>
            <motion.p variants={heroContentChildVariants}>Flexible and Responsive</motion.p>
          </div>
          <motion.div variants={heroContentChildVariants} className="hero-button">
            <Link href="/#about">Explore</Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

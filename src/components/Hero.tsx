import {
  Variants,
  stagger,
  useAnimate,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const heroContentVariants: Variants = {
  visible: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
  // offscreen: {
  //   transition: {
  //     delayChildren: 0.5,
  //     staggerChildren: 0.1,
  //     staggerDirection: -1,
  //   },
  // },
};

const heroContentChildVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  // offscreen: { y: -50, opacity: 0, transition: { duration: 1 } },
};

export default function Hero() {
  const heroSectionRef: any = useRef(null);
  const heroContentRef: any = useRef(null);

  const { scrollYProgress }: any = useScroll({
    target: heroSectionRef,
    offset: ["start start", "end start"],
  });

  const opacity: any = useTransform(scrollYProgress, [0, 1], [1, 0]);
  // const y: any = useTransform(scrollYProgress, [0, 1], ["0px", "-300px"]);

  // const [scope, animate]: any = useAnimate();
  const isInView = useInView(heroContentRef, {
    // margin: "-500px 0px 0px -20px",
    // viewport에 해당요소가 90퍼센트가 보이면 true
    // amount: 0.9,
  });

  // useMotionValueEvent(scrollYProgress, "change", (latest) => console.log({ latest }));

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY <= 200) {
  //       // animate(
  //       //   scope.current.children,
  //       //   { opacity: 1, translateY: "0" },
  //       //   { duration: 2, delay: stagger(0.1) }
  //       // );
  //       return;
  //     }
  //     animate(
  //       scope.current.children,
  //       { opacity: 0, translateY: "-100px" },
  //       { duration: 2, delay: stagger(0.1) }
  //     );
  //   });
  // }, []);

  useEffect(() => {
    console.log({ isInView });
    // if (!isInView) {
    //   animate(
    //     heroContentRef.current.children,
    //     { opacity: 0, translateY: "-50px" },
    //     { duration: 2, delay: stagger(0.2) }
    //   );
    // } else {
    //   animate(
    //     heroContentRef.current.children,
    //     { opacity: 1, translateY: "0" },
    //     { duration: 2, delay: stagger(0.2) }
    //   );
    // }
  }, [isInView]);

  return (
    <motion.section id="hero" className="hero" ref={heroSectionRef} style={{ opacity }}>
      <motion.div
        className="hero-content"
        ref={heroContentRef}
        variants={heroContentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.8 }}
        // whileInView={isInView ? "onscreen" : "offscreen"}
      >
        <motion.h1 variants={heroContentChildVariants}>youserstack</motion.h1>
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
          <Link href="/#about">Continue</Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

import { useAnimate, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
export default function Landing() {
  // home section
  const homeRef: any = useRef(null);
  const { scrollYProgress, scrollY }: any = useScroll({
    target: homeRef,
    offset: ["start start", "end start"],
  });
  const opacity: any = useTransform(scrollYProgress, [0, 1], [1, 0]);
  // const y: any = useTransform(scrollY, [0, 100], ["0%", "-300%"]);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log({ scrollY });
      if (scrollY.current > 200) {
        console.log("200...");
        animate(scope.current, { opacity: 0, translateY: "-500%" }, { duration: 0.5 });
      } else {
        animate(scope.current, { opacity: 1, translateY: "0%" }, { duration: 0.5 });
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
    <motion.section id="home" className="home" ref={homeRef} style={{ opacity }}>
      <div className="wrapper">
        <motion.div className="left" ref={scope}>
          <h1>Youser Stack</h1>
          <small>Front End Developer</small>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ullam labore pariatur
            repudiandae? Nihil repellat deserunt vel molestiae veritatis culpa quia, mollitia quae
            iusto! Quasi qui unde vero fugiat architecto.
          </p>
          <p>
            Simple Design
            <br />
            Client-Focused
            <br />
            Flexible
            <br />
          </p>
          <button>something</button>
        </motion.div>
      </div>
    </motion.section>
  );
}

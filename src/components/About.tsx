import { Variants, motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiStyledcomponents,
} from "react-icons/si";
export default function About() {
  // intersection (hook)
  const ref: any = useRef(null);
  const isInView = useInView(ref);
  // console.log({ isInView });
  const animation = {
    opacity: isInView ? "1" : "0",
    transform: isInView ? "none" : "translateY(30px)",
    transition: "all 1s",
    // transform: isInView ? "none" : "translateX(-200px)",
  };
  // intersection (inline)
  const somethingVariants: Variants = {
    offscreen: { y: 30, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };
  return (
    <section id="about" className="about">
      <div className="top">
        <motion.div
          className="left"
          variants={somethingVariants}
          initial="offscreen"
          whileInView="onscreen"
          // transition={{ duration: 1 }}
        >
          <div className="profile-img-outer">
            <img src="/images/profile.jpg" alt="profile" />
          </div>
        </motion.div>
        <motion.div
          className="right"
          variants={somethingVariants}
          initial="offscreen"
          whileInView="onscreen"
          // transition={{ duration: 1 }}
        >
          <h1>About</h1>
          <p>
            Hello, I'm sungwoo, Han. Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            ullam labore pariatur repudiandae? Nihil repellat deserunt vel molestiae veritatis culpa
            quia, mollitia quae iusto! Quasi qui unde vero fugiat architecto.
          </p>
        </motion.div>
      </div>
      <div className="middle">
        <motion.div
          className="stack"
          variants={somethingVariants}
          initial="offscreen"
          whileInView="onscreen"
        >
          <h3 className="title">Stack</h3>
          <ul>
            <SiJavascript size="5rem" />
            <SiReact size="5rem" />
            <SiNextdotjs size="5rem" />
            <SiMongodb size="5rem" />
            <SiStyledcomponents size="5rem" />
            <SiSass size="5rem" />
            <SiHtml5 size="5rem" />
            <SiCss3 size="5rem" />
          </ul>
        </motion.div>
      </div>
      {/* <div className="left">
          <div className="profile-img-outer" ref={ref} style={animation}>
            <img src="/images/profile.jpg" alt="profile" />
          </div>
        </div>
        <div className="right" ref={ref} style={animation}>
          <h1>About</h1>
          <p>
            Hello, I'm sungwoo, Han. Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            ullam labore pariatur repudiandae? Nihil repellat deserunt vel molestiae veritatis culpa
            quia, mollitia quae iusto! Quasi qui unde vero fugiat architecto.
          </p>
        </div> */}
      {/* <motion.p
          variants={somethingVariants}
          initial="offscreen"
          whileInView="onscreen"
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // transition={{ duration: 3 }}
        >
          something
        </motion.p> */}
    </section>
  );
}

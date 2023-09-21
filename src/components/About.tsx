import { Variants, motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiRedux,
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
          <div>
            <h1>About Me</h1>
            <small>Youser : nickname</small>
          </div>
          <p>
            Hi, I'm sungwoo, Han. I'm studying web front-end tech, looking for getting related jobs.
          </p>
          <p>
            안녕하세요. 한성우입니다. 웹 프론트엔드 기술을 공부 중이며, 해당 직무를 구하는 기업을
            모색 중에 있습니다.
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
          <h1 className="title">Stack</h1>
          <div>
            <SiJavascript size="5rem" />
            <SiReact size="5rem" />
            <SiNextdotjs size="5rem" />
            <SiRedux size="5rem" />
            <SiMongodb size="5rem" />
            <SiStyledcomponents size="5rem" />
            <SiSass size="5rem" />
            <SiHtml5 size="5rem" />
            <SiCss3 size="5rem" />
          </div>
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

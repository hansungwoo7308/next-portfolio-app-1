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
          <div className="stack-list">
            <SiJavascript size="3rem" />
            <SiReact size="3rem" />
            <SiNextdotjs size="3rem" />
            <SiRedux size="3rem" />
            <SiMongodb size="3rem" />
            <SiStyledcomponents size="3rem" />
            <SiSass size="3rem" />
            <SiHtml5 size="3rem" />
            <SiCss3 size="3rem" />
          </div>
        </motion.div>
      </div>
      <div className="middle">
        <motion.div
          className="additional-information"
          variants={somethingVariants}
          initial="offscreen"
          whileInView="onscreen"
        >
          <h1 className="title">Additional Information</h1>
          <p>Semantic HTML</p>
          <p>Responsive Design</p>
          <p>AJAX</p>
          <p>Semantic HTML</p>
          <p>Responsive Design</p>
          <p>AJAX</p>
          <p>Semantic HTML</p>
          <p>Responsive Design</p>
          <p>AJAX</p>
          <p>Semantic HTML</p>
          <p>Responsive Design</p>
          <p>AJAX</p>
          <p>Semantic HTML</p>
          <p>Responsive Design</p>
          <p>AJAX</p>
          <p>Semantic HTML</p>
          <p>Responsive Design</p>
          <p>AJAX</p>
          <p>Semantic HTML</p>
          <p>Responsive Design</p>
          <p>AJAX</p>
        </motion.div>
      </div>
    </section>
  );
}

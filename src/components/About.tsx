import { Variants, motion, useInView } from "framer-motion";
import Image from "next/image";
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
  const ref: any = useRef(null);
  const isInView = useInView(ref);
  const animation = {
    opacity: isInView ? "1" : "0",
    transform: isInView ? "none" : "translateY(30px)",
    transition: "all 1s",
    // transform: isInView ? "none" : "translateX(-200px)",
  };

  const somethingVariants: Variants = {
    offscreen: { y: 30, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  const options = {
    variants: somethingVariants,
    initial: "offscreen",
    whileInView: "onscreen",
  };

  return (
    <section id="about" className="about">
      <motion.div
        className="about-image-outer"
        {...options}
        // variants={somethingVariants}
        // initial="offscreen"
        // whileInView="onscreen"
        // transition={{ duration: 1 }}
      >
        <Image src={"/images/profile.JPG"} alt="profile" width={300} height={300} />
      </motion.div>
      <motion.div className="about-text" {...options}>
        <div className="title">
          <h1>About Me</h1>
          <small>youserstack</small>
        </div>
        <div className="text">
          <p>Hi. I&ldquo;m studying web front-end tech, looking for getting related jobs.</p>
          <p>
            안녕하세요. 웹 프론트엔드 기술을 공부 중이며, 해당 직무를 구하는 기업을 모색 중에
            있습니다.
          </p>
        </div>
      </motion.div>
      <motion.div className="about-text" {...options}>
        <div className="title">
          <h1>Stack</h1>
        </div>
        <div className="icons">
          <SiJavascript />
          <SiReact />
          <SiNextdotjs />
          <SiRedux />
          <SiMongodb />
          <SiStyledcomponents />
          <SiSass />
          <SiHtml5 />
          <SiCss3 />
        </div>
      </motion.div>
      <motion.div className="about-text" {...options}>
        <div className="title">
          <h1>Additional Information</h1>
        </div>
        <div className="text">
          <p>Semantic HTML</p>
          <p>Responsive Design</p>
          <p>AJAX</p>
          <p>Semantic HTML</p>
          <p>Responsive Design</p>
          <p>AJAX</p>
        </div>
      </motion.div>
    </section>
  );
}

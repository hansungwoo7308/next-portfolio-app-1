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
      <motion.div {...options}>
        <div className="image">
          <Image src={"/images/profile.JPG"} alt="profile" width={300} height={300} />
        </div>
        <div className="title">
          <h1>About Me</h1>
          <small>youserstack</small>
        </div>
        <div className="text">
          <p>
            {`
              Hi. I'm a web frontend developer.
              I prefer simple and clear design.
            `}
          </p>
          <p>안녕하세요. 웹 프론트엔드 개발자입니다. 저는 심플하고 명확한 디자인을 지향합니다.</p>
        </div>
      </motion.div>
      <motion.div {...options}>
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
      <motion.div {...options}>
        <div className="title">
          <h1>Additional Information</h1>
        </div>
        <div className="text">
          <p>Sejong University Computer Engineering</p>
        </div>
      </motion.div>
    </section>
  );
}

"use client";
import "@/app/page.scss";
import {
  AnimatePresence,
  Variants,
  m,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { transform } from "typescript";
import Test from "@/components/Test";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
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
export default function Home() {
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
  // selected animation
  const [selectedId, setSelectedId] = useState(null);
  // const [itemsIndex,setItemsIndex]=useState()
  const [selectedItem, setSelectedItem]: any = useState({});
  const items = [
    {
      id: "cat",
      subtitle: "subtitle",
      title: "title",
    },
    {
      id: "bird",
      subtitle: "subtitle",
      title: "title",
    },
    {
      id: "fish",
      subtitle: "subtitle",
      title: "title",
    },
  ];
  useEffect(() => {
    const foundItem = items.find((item: any, index: any) => item.id === selectedId);
    setSelectedItem(foundItem);
    // console.log({ foundItem });
  }, [selectedId]);
  useEffect(() => {
    const handleClick = () => setSelectedId(null);
    if (!selectedId) window.addEventListener("click", handleClick);
    // return document.removeEventListener(handleClick)
  }, []);

  // performance (horizonal scroll)
  const performanceRef: any = useRef(null);
  // const stickerRef: any = useRef(null);
  // useEffect(() => {
  //   const performance: HTMLElement = performanceRef.current;
  //   const sticker: HTMLElement = stickerRef.current;
  //   window.addEventListener("scroll", () => {
  //     const top = performance.getBoundingClientRect().top;
  //     const bottom = performance.getBoundingClientRect().bottom;
  //     console.log({ top, bottom });
  //     // console.log("scroll");
  //     if (top <= 0 && bottom > 0) {
  //       // sticker.style.position = "sticky";
  //       // sticker.style.top = "5rem";
  //     } else {
  //       // sticker.style.position = "block";
  //     }
  //   });
  // }, []);
  const horizonRef: any = useRef(null);
  // const { scrollYProgress: scrollYProgressByPerformance } = useScroll({
  //   target: performanceRef,
  //   offset: ["start start", "end end"],
  // });
  const { scrollYProgress } = useScroll({
    target: performanceRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["200%", "-200%"]);
  // const x = useTransform(scrollYProgress, [0, 1], ["150%", "-150%"]);

  // const isInView = useInView(ref, { amount: 1 });
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries: any) => {
  //       entries.map((entry: IntersectionObserverEntry) => {
  //         if (entry.intersectionRatio === 1) {
  //           entry.target.style.opacity = entry.intersectionRatio;
  //           entry.target.style.transition = "all 1s ease";
  //         } else {
  //           entry.target.style.opacity = 0;
  //           entry.target.style.transition = "all 1s ease";
  //         }
  //       });
  //     },
  //     { threshold: [1] } // window threshold에 element의 100%가 들어오면 callback을 실행
  //   );
  //   observer.observe(ref.current);
  // }, []);
  return (
    <main>
      <section style={{ display: "none" }}>
        <p>library : Framer-Motion</p>
        {/* <ol>
          <li>Page Transition</li>
          <li>Animation : opacity, transform, scale, scroll</li>
          <li>scale : zoom in, zoom out</li>
          <li>scroll : useScroll, useTransform</li>
          <li>sticky</li>
          <li>Add Videos</li>
          <li>Parallax</li>
          <li>Theme (Dark and Bright mode)</li>
        </ol> */}
      </section>
      <section id="home" className="home">
        <div className="wrapper">
          <div className="left">
            <h1>Youser Stack</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At ullam labore pariatur
              repudiandae? Nihil repellat deserunt vel molestiae veritatis culpa quia, mollitia quae
              iusto! Quasi qui unde vero fugiat architecto.
            </p>
            <p>
              다음의 방식을 추구
              <br />
              가능한 군더더기 없는 디자인
              <br />
              명확한 표현 방식
            </p>
            <button>something</button>
          </div>
        </div>
      </section>
      <section className="performance" ref={performanceRef}>
        {/* <div
          className="sticker"
          // ref={stickerRef}
        >
          <h1>performance</h1>
        </div> */}
        <motion.div
          className="horizon"
          ref={horizonRef}
          style={{
            position: "sticky",
            top: "50%",
            translateY: "-50%",
            x,
          }}
        >
          <div className="box">
            <Image src="/images/street-01.jpg" alt="alt" width={500} height={500} />
          </div>
          <div className="box">
            <Image src="/images/street-02.jpg" alt="alt" width={500} height={500} />
          </div>
          <div className="box">
            <Image src="/images/street-03.jpg" alt="alt" width={500} height={500} />
          </div>
          <div className="box">
            <Image src="/images/street-04.jpg" alt="alt" width={500} height={500} />
          </div>
          <div className="box">
            <Image src="/images/street-05.jpg" alt="alt" width={500} height={500} />
          </div>
        </motion.div>
      </section>
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
              ullam labore pariatur repudiandae? Nihil repellat deserunt vel molestiae veritatis
              culpa quia, mollitia quae iusto! Quasi qui unde vero fugiat architecto.
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
      <section id="works" className="works">
        <h1>Works</h1>
        {/* <p>link to detail pages</p>
        <ul>
          <li>
            <div>
              <img src="/images/works1" alt="works1" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div>
              <a href="#">Go to the Web</a>
            </div>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul> */}
        <h1>selectedId : {selectedId}</h1>
        <div>
          {items.map((item: any, index: any) => (
            <motion.div
              key={item.id}
              className="animal"
              layoutId={item.id}
              onClick={(e: any) => {
                e.stopPropagation();
                setSelectedId(item.id);
              }}
            >
              <motion.h1>{item.id}</motion.h1>
              <motion.p>{item.title}</motion.p>
            </motion.div>
          ))}
          <AnimatePresence>
            {selectedId && (
              <motion.div
                key={selectedId}
                className="animal-zoom-in"
                layoutId={selectedId}
                onClick={(e) => e.stopPropagation()}
                exit={{ opacity: 0 }}
              >
                <motion.h1>{selectedItem?.id}</motion.h1>
                <motion.p>{selectedItem?.title}</motion.p>
                <motion.button onClick={(e: any) => setSelectedId(null)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      <section id="contact" className="contact"></section>
      <section id="test">
        <Test />
      </section>
      {/* <li>
              <SocialIcon url="www.facebook.com" bgColor="transparent" />
            </li>
            <li>
              <SocialIcon url="www.github.com" bgColor="transparent" />
            </li> */}
    </main>
  );
}
/*
<main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
*/

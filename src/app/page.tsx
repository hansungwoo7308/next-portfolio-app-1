"use client";
import "@/app/page.scss";
import { transform } from "typescript";
import Test from "@/components/Test";
import { SocialIcon } from "react-social-icons";
import Works from "@/components/Works";
import About from "@/components/About";
import Performance from "@/components/Performance";
import { useEffect, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
export default function Home() {
  // home section
  const homeRef: any = useRef(null);
  const { scrollYProgress } = useScroll({
    target: homeRef,
    offset: ["start start", "end start"],
  });
  const opacity: any = useTransform(scrollYProgress, [0, 1], [1, 0]);

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
        {/* <ol>
          <li>Page Transition</li>
          <li>Add Videos</li>
          <li>Theme (Dark and Bright mode)</li>
        </ol> */}
      </section>
      <motion.section id="home" className="home" ref={homeRef} style={{ opacity }}>
        <div className="wrapper">
          <div className="left">
            <h1>Youser Stack</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At ullam labore pariatur
              repudiandae? Nihil repellat deserunt vel molestiae veritatis culpa quia, mollitia quae
              iusto! Quasi qui unde vero fugiat architecto.
            </p>
            <p>
              가능한 군더더기 없는 디자인
              <br />
              명확한 표현 방식
            </p>
            <button>something</button>
          </div>
        </div>
      </motion.section>
      {/* <Performance /> */}
      <About />
      {/* <Works /> */}
      {/* <section id="contact" className="contact"></section> */}
      {/* <section id="test">
        <Test />
      </section> */}
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

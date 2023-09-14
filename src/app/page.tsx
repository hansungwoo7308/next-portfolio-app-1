"use client";
// import styles from "./page.module.scss";
import "@/app/page.scss";
import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { transform } from "typescript";
// import "../../test/test.scss";
// import "@/styles/test.scss";

export default function Home() {
  const ref: any = useRef(null);
  const isInView = useInView(ref);
  console.log({ isInView });
  const animation = {
    opacity: isInView ? "1" : "0",
    transform: isInView ? "none" : "translateY(30px)",
    transition: "all 1s",
    // transform: isInView ? "none" : "translateX(-200px)",
  };
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
        <ol>
          <li>Page Transition</li>
          <li>Animation : opacity, transform, scale, scroll</li>
          <li>scale : zoom in, zoom out</li>
          <li>scroll : useScroll, useTransform</li>
          <li>sticky</li>
          <li>Add Videos</li>
          <li>Parallax</li>
          <li>Theme (Dark and Bright mode)</li>
        </ol>
      </section>
      <section id="home" className="home">
        <div>
          <div>
            {/* <img src="/images/profile.jpg" alt="profile" /> */}
            <h1>image</h1>
          </div>
        </div>
        <div>
          <h1>Welcome to My Web</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ullam labore pariatur
            repudiandae? Nihil repellat deserunt vel molestiae veritatis culpa quia, mollitia quae
            iusto! Quasi qui unde vero fugiat architecto.
          </p>
        </div>
      </section>
      <section id="about" className="about">
        <div className="left">
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
        </div>
      </section>
      <section id="works" className="works">
        <h1>Works</h1>
        <p>link to detail pages</p>
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
        </ul>
      </section>
      <section id="contact" className="contact"></section>
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

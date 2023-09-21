"use client";
import "@/app/page.scss";
import Test from "@/components/Test";

import Landing from "@/components/Landing";
import Performance from "@/components/Performance";
import About from "@/components/About";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
export default function Home() {
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
      <Landing />
      <Performance />
      <About />
      <Works />
      <Contact />
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

import { useAnimate, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// let canvas: HTMLCanvasElement;
// let ctx: CanvasRenderingContext2D;
// let instance;
// let instanceAnimation: any;
// class FlowFieldEffect {
//   // #ctx: any;
//   // #width: any;
//   // #height: any;
//   ctx: CanvasRenderingContext2D;
//   width;
//   height;
//   x = 0;
//   y = 0;
//   constructor(ctx: any, width: any, height: any) {
//     this.ctx = ctx;
//     this.width = width;
//     this.height = height;
//     // this.x = 0
//     // this.y = 0
//   }
//   draw(x: any, y: any) {
//     this.ctx.fillStyle = "green";
//     // this.ctx.lineWidth = 10;
//     // this.ctx.fillRect(20, 20, 200, 200);
//     this.ctx.strokeStyle = "blue";
//     this.ctx.lineWidth = 5;
//     this.ctx.strokeRect(this.x, this.y, 50, 50);
//     // this.ctx.beginPath();
//     // this.ctx.moveTo(100, 100);
//     // this.ctx.moveTo(x, y);
//     // this.ctx.lineTo(x + length, y + length);
//     // this.ctx.stroke();
//   }
//   animate() {
//     console.log("animating");
//     this.ctx.clearRect(0, 0, this.width, this.height);
//     this.draw(100, 100);
//     this.x += 1;
//     instanceAnimation = requestAnimationFrame(this.animate.bind(this));
//   }
// }

export default function Performance() {
  const section1Ref: any = useRef(null);
  const section2Ref: any = useRef(null);
  const section3Ref: any = useRef(null);

  // get the scroll value by section
  const { scrollYProgress: section1Progress } = useScroll({
    target: section1Ref,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: section2Progress } = useScroll({
    target: section2Ref,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: section3Progress } = useScroll({
    target: section3Ref,
    offset: ["start start", "end end"],
  });

  // const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  // useTransform(progress, [starting point, ending point], [starting effect, ending effect])

  // section 1
  const opacity = useTransform(section1Progress, [0, 0.2], [0, 1]);
  const scale1 = useTransform(section1Progress, [0.2, 0.8], [1, 150]);

  // section 2
  const opacity2 = useTransform(section2Progress, [0, 0.3], [0, 1]);
  const scale2: any = useTransform(section2Progress, [0, 1], [3, 0.5]);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!scale2) return;
      if (scale2.current === 0.5) {
        animate(scope.current, { opacity: 1, translateY: "0%" }, { duration: 0.2 });
      } else {
        animate(scope.current, { opacity: 0, translateY: "-200%" }, { duration: 0.2 });
      }
    });
  }, []);
  // const y2 = useTransform(section2Progress, [0.5, 0.7], ["-200%", "0%"]);

  // section 3
  const x = useTransform(section3Progress, [0, 0.8], ["100vw", "-150%"]);
  // const x = useTransform(section3Progress, [0, 0.9], ["50%", "-200%"]);
  const opacity3 = useTransform(section3Progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  // const opacity3 = useTransform(section3Progress, [0, 0.2, 0.4, 0.6], [0, 1, 1, 0]);

  // const width = useTransform(scrollYProgress, [0, 1], ["200%", "-200%"]);
  // const x = useTransform(scrollYProgress, [0, 1], ["150%", "-150%"]);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (performanceRef.current.getBoundingClientRect().top <= 0) {
  //       console.log({ scale: scale.current });
  //     }
  //   });
  // }, []);

  // canvas
  const canvasRef: any = useRef(null);

  // useEffect(() => {
  //   canvas = canvasRef.current;
  //   ctx = canvas.getContext("2d");
  //   // canvas.width = 1000;
  //   // canvas.height = 1000;
  //   // ctx.fillStyle = "green";
  //   // ctx.lineWidth = 10;
  //   // ctx.fillRect(20, 20, 200, 200);
  //   // ctx.strokeStyle = "blue";
  //   // ctx.lineWidth = 5;
  //   // ctx.strokeRect(0, 0, 100, 100);

  //   // create a new animation
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  //   instance = new FlowFieldEffect(ctx, canvas.width, canvas.height);
  //   // instance.draw(10, 10);
  //   // instance.animate();
  //   window.addEventListener("resize", () => {
  //     // cancel the previous animation
  //     cancelAnimationFrame(instanceAnimation);
  //     // create a new animation
  //     canvas.width = window.innerWidth;
  //     canvas.height = window.innerHeight;
  //     instance = new FlowFieldEffect(ctx, canvas.width, canvas.height);
  //     // instance.animate();
  //     // console.log({ instance });
  //   });
  // }, []);

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
  // const sliderRef: any = useRef(null);
  // const { scrollYProgress: scrollYProgressByPerformance } = useScroll({
  //   target: performanceRef,
  //   offset: ["start start", "end end"],
  // });

  useEffect(() => {
    // console.log({
    //   section1: { opacity, scale1 },
    //   section2: { opacity2, scale2 },
    //   section3: { opacity3, x },
    // });
    const logValues = () => {
      // console.log(`${section1Progress},${section2Progress},${section3Progress}`);
      // console.log(`sec1[${opacity2},${scale2}]`)
      // console.log(`sec1[${opacity3},${x}]`)
    };
    window.addEventListener("scroll", logValues);
    // return window.removeEventListener("scroll", logValues);
  }, []);

  return (
    <>
      <section className="performance" ref={section1Ref} style={{ height: "1000vh" }}>
        {/* <motion.div className="nickname" style={{ scale: scale1, opacity }}>
          <h1>Youser</h1>
          <h1>Stack</h1>
        </motion.div> */}
      </section>
      <section className="performance" ref={section2Ref} style={{ height: "700vh" }}>
        <motion.div className="sticky-box" style={{ scale: scale2, position: "sticky", top: 0 }}>
          <motion.div
            style={{
              opacity: opacity2,
              zIndex: "10",
              marginBottom: "5rem",
              width: "70%",
              height: "70%",
            }}
          >
            <Image src={"/images/street-06.jpg"} alt="alt" width={1000} height={1000} />
          </motion.div>
          <motion.div
            ref={scope}
            style={{ textAlign: "center", fontSize: "1rem" }}
            initial={{ opacity: 0, translateY: "-200%" }}
            // whileInView={{ opacity: 1, translateY: 0 }}
          >
            <h1>Direction</h1>
          </motion.div>
        </motion.div>
      </section>
      <section className="performance" ref={section3Ref} style={{ height: "1000vh" }}>
        <motion.div
          className="slider"
          style={{
            height: "100vh",
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
        <motion.div
          className="message"
          style={{
            position: "sticky",
            top: "50%",
            translateY: "-50%",
            opacity: opacity3,
          }}
        >
          <h1>Inspirations</h1>
        </motion.div>
      </section>
    </>
  );
}

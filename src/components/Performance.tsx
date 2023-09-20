import { useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let instance;
let instanceAnimation: any;
class FlowFieldEffect {
  // #ctx: any;
  // #width: any;
  // #height: any;
  ctx: CanvasRenderingContext2D;
  width;
  height;
  x = 0;
  y = 0;
  constructor(ctx: any, width: any, height: any) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    // this.x = 0
    // this.y = 0
  }
  draw(x: any, y: any) {
    this.ctx.fillStyle = "green";
    // this.ctx.lineWidth = 10;
    // this.ctx.fillRect(20, 20, 200, 200);
    this.ctx.strokeStyle = "blue";
    this.ctx.lineWidth = 5;
    this.ctx.strokeRect(this.x, this.y, 50, 50);
    // this.ctx.beginPath();
    // this.ctx.moveTo(100, 100);
    // this.ctx.moveTo(x, y);
    // this.ctx.lineTo(x + length, y + length);
    // this.ctx.stroke();
  }
  animate() {
    console.log("animating");
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.draw(100, 100);
    this.x += 1;
    instanceAnimation = requestAnimationFrame(this.animate.bind(this));
  }
}
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
  const opacity = useTransform(section1Progress, [0, 0.5], [0, 1]);
  const scaleBySection1 = useTransform(section1Progress, [0.5, 1], [1, 30]);

  // section 2
  const scaleBySection2 = useTransform(section2Progress, [0.2, 0.5], [2, 0.5]);
  const opacity2 = useTransform(section2Progress, [0.5, 0.7], [0, 1]);
  const y2 = useTransform(section2Progress, [0.5, 0.7], ["-200%", "0%"]);

  // section 3
  const x = useTransform(section3Progress, [0, 0.5], ["50%", "-150%"]);

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
  return (
    <>
      <section className="performance" ref={section1Ref} style={{ height: "500vh" }}>
        <motion.div
          style={{
            scale: scaleBySection1,
            opacity,
            position: "sticky",
            top: 0,
            textAlign: "center",
            fontSize: 100,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          <h1>Youser</h1>
          <h1>Stack</h1>
        </motion.div>

        {/* <canvas id="canvas" ref={canvasRef} width={1000} height={1000}></canvas> */}
      </section>
      <section className="performance" ref={section2Ref} style={{ height: "700vh" }}>
        <motion.div
          className="sticky-box"
          style={{
            scale: scaleBySection2,
            position: "sticky",
            top: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Image
            src={"/images/street-06.jpg"}
            alt="alt"
            width={500}
            height={500}
            style={{
              zIndex: "10",
              marginBottom: "5rem",
              width: "70%",
              height: "70%",
            }}
          />
          <motion.div
            style={{
              opacity: opacity2,
              y: y2,
              // marginTop: "5rem",
              textAlign: "center",
              fontSize: 70,
              // pointerEvents: "none",
            }}
          >
            <h1>something</h1>
          </motion.div>
        </motion.div>
      </section>
      <section className="performance" ref={section3Ref} style={{ height: "500vh" }}>
        <motion.div
          className="horizon"
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
    </>
  );
}

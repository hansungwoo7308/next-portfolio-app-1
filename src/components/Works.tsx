import { useEffect, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiPaypal,
  SiRedux,
  SiSass,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";

const DATASET = [
  {
    id: "E-commerce Next App",
    title: "E-commerce Next App",
    // stack: ["nextjs", "redux", "mongodb", "styled-components", "typescript"],
    stack: [
      {
        name: "nextjs",
        icon: <SiNextdotjs />,
      },
      {
        name: "redux",
        icon: <SiRedux />,
      },
      {
        name: "mongodb",
        icon: <SiMongodb />,
      },
      {
        name: "styled-components",
        icon: <SiStyledcomponents />,
      },
      {
        name: "typescript",
        icon: <SiTypescript />,
      },
    ],
    description: "Full Stack으로 이루어진 프로젝트입니다.",
    url: "/images/next-commerce-app-screenshot.png",
  },
  {
    id: "Portfolio",
    title: "Portfolio",
    stack: [
      {
        name: "nextjs",
        icon: <SiNextdotjs />,
      },
      {
        name: "scss",
        icon: <SiSass />,
      },
      {
        name: "typescript",
        icon: <SiTypescript />,
      },
      {
        name: "framer-motion",
        icon: <SiFramer />,
      },
    ],
    description: "One Page로 이루어진 프로젝트입니다.",
    url: "/images/next-commerce-app-screenshot.png",
  },
  {
    id: "Next App",
    title: "Next App",
    stack: ["nextjs", "typescript"],
    description: "Next App으로 이루어진 프로젝트입니다.",
  },
];

export default function Works() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedItem, setSelectedItem]: any = useState({});
  const itemsRef: any = useRef(null);

  useEffect(() => {
    const foundItem = DATASET.find((item: any, index: any) => item.id === selectedId);
    setSelectedItem(foundItem);
  }, [selectedId]);

  return (
    <section id="works" className="works">
      <div className="title">
        <h1>Works</h1>
      </div>
      <div className="works-items" ref={itemsRef}>
        {DATASET.map((item: any, index: any) => (
          <motion.div
            key={item.id}
            className="works-item"
            layoutId={item.id}
            onClick={(e: any) => setSelectedId(item.id)}
            // transition={{ duration: 2 }}
          >
            <div className="works-item-image-outer">
              <Image src={item.url || "/images/town.jpg"} alt="alt" width={300} height={300} />
            </div>
            <div className="works-item-content">
              <h3>{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Opened Item */}
      <div
        className="works-opened-item-background"
        style={{ display: `${selectedId ? "flex" : "none"}` }}
        onClick={() => setSelectedId(null)}
      >
        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="works-opened-item"
              layoutId={selectedId}
              onClick={(e) => e.stopPropagation()}
              // transition={{ duration: 2 }}
            >
              <div className="works-item-image-outer">
                <button className="exit-button" onClick={(e: any) => setSelectedId(null)}>
                  <CgClose />
                </button>
                <Image
                  src={selectedItem?.url || "/images/town.jpg"}
                  alt="alt"
                  width={700}
                  height={700}
                />
                <Link
                  href={"https://next-commerce-app-psi.vercel.app/"}
                  target="_blank"
                  className="go-to-website"
                >
                  Go to website
                </Link>
              </div>
              <div className="works-item-content">
                <h3>{selectedItem?.title}</h3>
                <div>
                  <p>Stack</p>
                  <ul className="stack">
                    {selectedItem?.stack.map((v: any) => (
                      <li key={v.name}>
                        {v.icon} {v.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p>Description</p>
                  <p>{selectedItem?.description}</p>
                </div>
                <div></div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dicta,
                  consequuntur officiis tempore recusandae error, doloremque eaque numquam
                  excepturi, explicabo atque dignissimos sunt fugiat quas aliquid. Deserunt, optio!
                  Reiciendis, corporis. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magnam dicta, consequuntur officiis tempore recusandae error, doloremque eaque
                  numquam excepturi, explicabo atque dignissimos sunt fugiat quas aliquid. Deserunt,
                  optio! Reiciendis, corporis. Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Magnam dicta, consequuntur officiis tempore recusandae error, doloremque
                  eaque numquam excepturi, explicabo atque dignissimos sunt fugiat quas aliquid.
                  Deserunt, optio! Reiciendis, corporis.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

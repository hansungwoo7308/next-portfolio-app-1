import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const DATASET = [
  {
    id: "E-commerce Next App",
    title: "E-commerce Next App",
    stack: ["nextjs", "redux", "mongodb", "styled-components", "typescript"],
    description: "Full Stack으로 이루어진 프로젝트입니다.",
    url: "/images/next-commerce-app-screenshot.png",
  },
  {
    id: "Portfolio",
    title: "Portfolio",
    stack: ["nextjs", "scss", "framer-motion", "typescript"],
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
      <div className="works-title">
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
                <Image
                  src={selectedItem?.url || "/images/town.jpg"}
                  alt="alt"
                  width={700}
                  height={700}
                />
              </div>
              <div className="works-item-content">
                <h3>{selectedItem?.title}</h3>
                <ul className="stack">
                  {selectedItem?.stack.map((v: any) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
                <p>{selectedItem?.description}</p>
              </div>
              <button onClick={(e: any) => setSelectedId(null)}>X</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

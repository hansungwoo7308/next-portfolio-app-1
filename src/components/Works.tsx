import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Works() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedItem, setSelectedItem]: any = useState({});
  const items = [
    {
      id: "E-commerce Next App",
      title: "E-commerce Next App",
      stack: ["nextjs", "redux", "mongodb", "styled-components", "typescript"],
      description: "Full Stack으로 이루어진 프로젝트입니다.",
    },
    {
      id: "Portfolio",
      title: "Portfolio",
      stack: ["nextjs", "scss", "framer-motion", "typescript"],
      description: "One Page로 이루어진 프로젝트입니다.",
    },
    {
      id: "Next App",
      title: "Next App",
      stack: ["nextjs", "typescript"],
      description: "Next App으로 이루어진 프로젝트입니다.",
    },
  ];
  const itemsRef: any = useRef(null);

  useEffect(() => {
    const foundItem = items.find((item: any, index: any) => item.id === selectedId);
    setSelectedItem(foundItem);
  }, [selectedId]);

  console.log({ "itemsRef.current": itemsRef.current });

  return (
    <section id="works" className="works">
      <div className="works-title">
        <h1>Works</h1>
      </div>
      <div className="works-items" ref={itemsRef}>
        {items.map((item: any, index: any) => (
          <motion.div
            key={item.id}
            // className={`works-item ${item.id === selectedId ? "selectedItem" : ""}`}
            className="works-item"
            layoutId={item.id}
            onClick={(e: any) => setSelectedId(item.id)}
            // transition={{ duration: 3 }}
            // style={{ zIndex: item.id === selectedId ? "1000" : "" }}
          >
            <motion.div className="works-item-image-outer">
              <Image src={"/images/town.jpg"} alt="alt" width={300} height={300} />
            </motion.div>
            <motion.div className="works-item-content">
              <h3>{item.title}</h3>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Opened Item */}
      <div
        className="works-opened-item-background"
        style={{ display: `${selectedId ? "block" : "none"}` }}
        onClick={() => setSelectedId(null)}
      >
        <AnimatePresence>
          {selectedId && (
            <div className="works-opened-item-outer">
              <motion.div
                className="works-opened-item"
                layoutId={selectedId}
                onClick={(e) => e.stopPropagation()}
                // transition={{ duration: 3 }}
                // exit={{ opacity: 0 }}
              >
                <motion.div className="works-item-image-outer">
                  <Image src={"/images/town.jpg"} alt="alt" width={700} height={700} />
                </motion.div>
                <motion.div className="works-item-content">
                  <h3>{selectedItem?.title}</h3>
                  <ul className="stack">
                    {selectedItem?.stack.map((v: any) => (
                      <li key={v}>{v}</li>
                    ))}
                  </ul>
                  <p>{selectedItem?.description}</p>
                </motion.div>
                <button
                  onClick={(e: any) => {
                    setSelectedId(null);
                    console.log({ selectedId });
                    // const items = itemsRef.current;
                    // console.log({ items });
                  }}
                >
                  X
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

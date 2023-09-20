import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
export default function Works() {
  // selected animation
  const [selectedId, setSelectedId] = useState(null);
  // const [itemsIndex,setItemsIndex]=useState()
  const [selectedItem, setSelectedItem]: any = useState({});
  const items = [
    {
      id: "E-commerce Next App",
      title: "E-commerce Next App",
      stack: ["nextjs", "styled-components", "mongodb", "typescript"],
    },
    {
      id: "Portfolio",
      title: "Portfolio",
      stack: ["nextjs", "scss", "framer-motion", "typescript"],
    },
    {
      id: "Next App",
      title: "Next App",
      stack: ["nextjs", "typescript"],
    },
  ];
  useEffect(() => {
    const foundItem = items.find((item: any, index: any) => item.id === selectedId);
    setSelectedItem(foundItem);
    // console.log({ foundItem });
  }, [selectedId]);
  useEffect(() => {
    console.log({ selectedItem });
  }, [selectedItem]);
  // useEffect(() => {
  //   const handleClick = () => setSelectedId(null);
  //   if (!selectedId) window.addEventListener("click", handleClick);
  //   // return document.removeEventListener(handleClick)
  // }, []);
  return (
    <section id="works" className="works">
      <h1>Works</h1>
      {/* <h1>selectedId : {selectedId}</h1> */}
      <div className="items">
        {items.map((item: any, index: any) => (
          <motion.div
            key={item.id}
            className="item"
            layoutId={item.id}
            onClick={(e: any) => setSelectedId(item.id)}
            // exit={{ opacity: 0 }}
            // transition={{ duration: 10 }}
          >
            <div className="img-wrapper">
              <Image src={"/images/town.jpg"} alt="alt" width={300} height={300} />
            </div>
            <div className="content">
              <h3>{item.title}</h3>
            </div>
            {/* <motion.h1 layoutId={item.id + "h1"}>{item.id}</motion.h1>
            <motion.p layoutId={item.id + "p"}>{item.title}</motion.p> */}
            {/* <motion.button
              onClick={(e: any) => setSelectedId(null)}
              layoutId={item.id + "button"}
              initial={{ opacity: 0 }}
            /> */}
          </motion.div>
        ))}
      </div>
      <div
        className="opened-item-wrapper"
        style={{ display: `${selectedId ? "block" : "none"}` }}
        onClick={() => setSelectedId(null)}
      >
        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="opened-item"
              layoutId={selectedId}
              initial={{ translate: "-50% -50%" }}
              exit={{ opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              // transition={{ duration: 10 }}
            >
              <div className="img-wrapper">
                <Image src={"/images/town.jpg"} alt="alt" width={700} height={700} />
              </div>
              <div className="content">
                <h3>{selectedItem?.title}</h3>
                <ul>
                  {selectedItem?.stack.map((v: any) => (
                    <li>{v}</li>
                  ))}
                </ul>
                {/* <motion.h1 layoutId={selectedId + "h1"}>{selectedItem?.id}</motion.h1>
                <motion.p layoutId={selectedId + "p"}>{selectedItem?.title}</motion.p> */}
              </div>
              <button onClick={(e: any) => setSelectedId(null)}>X</button>

              {/* <motion.button
                  onClick={(e: any) => setSelectedId(null)}
                  layoutId={selectedId + "button"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  // exit={{ opacity: 0 }}
                /> */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

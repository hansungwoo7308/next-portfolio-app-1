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
  // useEffect(() => {
  //   const handleClick = () => setSelectedId(null);
  //   if (!selectedId) window.addEventListener("click", handleClick);
  //   // return document.removeEventListener(handleClick)
  // }, []);
  return (
    <>
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
            <motion.div className="img-wrapper">
              <Image src={"/images/town.jpg"} alt="alt" width={300} height={300} />
            </motion.div>
            <motion.h1>{item.id}</motion.h1>
            <motion.p>{item.title}</motion.p>
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
              <motion.div className="img-wrapper">
                <Image src={"/images/town.jpg"} alt="alt" width={700} height={700} />
              </motion.div>
              <div className="">
                <motion.h1>{selectedItem?.id}</motion.h1>
                <motion.p>{selectedItem?.title}</motion.p>
                {/* <motion.h1 layoutId={selectedId + "h1"}>{selectedItem?.id}</motion.h1>
                <motion.p layoutId={selectedId + "p"}>{selectedItem?.title}</motion.p> */}
              </div>
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
    </>
  );
}

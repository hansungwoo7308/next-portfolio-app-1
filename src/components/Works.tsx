import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
      <h1>selectedId : {selectedId}</h1>
      <div>
        {items.map((item: any, index: any) => (
          <motion.div
            // key={item.id}
            // className={`item ${item.id === selectedId ? "opened-item" : ""}`}
            className="item"
            layoutId={item.id}
            onClick={(e: any) => {
              // e.stopPropagation();
              setSelectedId(item.id);
            }}

            // transition={{ duration: 5 }}
          >
            <motion.h1 layoutId={item.id + "h1"}>{item.id}</motion.h1>
            <motion.p layoutId={item.id + "p"}>{item.title}</motion.p>
          </motion.div>
        ))}
        <div
          className="outer"
          style={{ display: `${selectedId ? "block" : "none"}` }}
          onClick={() => setSelectedId(null)}
        >
          <AnimatePresence>
            {selectedId && (
              <motion.div
                className="opened-item"
                // key={selectedId}
                layoutId={selectedId}
                exit={{ opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                // transition={{ duration: 5 }}
                initial={{ translate: "-50% -50%" }}
              >
                <motion.h1 layoutId={selectedId + "h1"}>{selectedItem?.id}</motion.h1>
                <motion.p layoutId={selectedId + "p"}>{selectedItem?.title}</motion.p>
                <motion.button
                  onClick={(e: any) => setSelectedId(null)}
                  layoutId={selectedId + "button"}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

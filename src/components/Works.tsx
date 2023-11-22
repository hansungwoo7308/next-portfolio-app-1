import { useEffect, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiSass,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";

const DATASET = [
  {
    id: "E-commerce Next App",
    title: "E-commerce Next App",
    url: "https://res.cloudinary.com/dzktdrw7o/image/upload/v1700616927/next-portfolio-app/screenshot/24ce11fc-bf82-44ec-804c-b1bb2f2a08fc_rcjnvl.png",
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
    description:
      "이커머스 프로젝트입니다. 로그인, 검색, 장바구니, 결제, 주문목록확인 기능이 있습니다.\n\n" +
      "관리자 권한으로 로그인하면 제품을 추가하거나 삭제하는 기능을 이용할 수 있습니다.\n",
  },
  {
    id: "Portfolio",
    title: "Portfolio",
    url: "https://res.cloudinary.com/dzktdrw7o/image/upload/v1700617028/next-portfolio-app/screenshot/91f992e0-9560-41ad-a899-812104acf4d9_df1ooc.png",
    stack: [
      {
        name: "nextjs",
        icon: <SiNextdotjs />,
      },
      {
        name: "framer-motion",
        icon: <SiFramer />,
      },
      {
        name: "scss",
        icon: <SiSass />,
      },
      {
        name: "typescript",
        icon: <SiTypescript />,
      },
    ],
    description: "하나의 페이지로 이루어진 프로젝트입니다.",
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
                  <pre>{selectedItem?.description}</pre>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

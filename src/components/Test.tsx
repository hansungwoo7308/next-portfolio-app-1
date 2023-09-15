import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
export default function Test() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <div className="window">
      <div className="nav">
        <ul>
          {tabs.map((item: any) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {/* label */}
              {`${item.icon} ${item.label}`}
              {/* underline */}
              {item === selectedTab && (
                <motion.div
                  className="underline"
                  layoutId="underline"
                  // transition={{ duration: 5 }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="main">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? selectedTab.icon : "😋"}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
// data structure
// interface Ingredient {
//   icon: string;
//   label: string;
// }
// dataset
const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" },
];
// pull out ingredients by destructuring
const [tomato, lettuce, cheese] = allIngredients;
const tabs = [tomato, lettuce, cheese];
//
// export function getNextIngredient(ingredients: Ingredient[]): Ingredient | undefined {
//   const existing = new Set(ingredients);
//   return allIngredients.find((ingredient) => !existing.has(ingredient));
// }

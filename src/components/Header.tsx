"use client";
import Link from "next/link";
import "@/app/page.scss";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header>
      <section className="section">
        <motion.nav
          variants={{
            hidden: { y: "-200%" },
            visible: { y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <Link href={"/#home"}>Home</Link>
          <Link href={"/#about"}>About</Link>
          <Link href={"/#works"}>Works</Link>
          <Link href={"/#contact"}>Contact</Link>
          <Link href={"/#test"}>Test</Link>
        </motion.nav>
      </section>
    </header>
  );
}

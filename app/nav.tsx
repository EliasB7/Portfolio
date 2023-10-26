import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Nav() {
  const navRef = useRef(null);
  const [scrollingUp, setScrollingUp] = useState(false);
  const controls = useAnimation();

  const handleClick = (id: string) => {
    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100 && !scrollingUp) {
      controls.start({ opacity: 0, y: -50 });
      setScrollingUp(true);
    } else if (currentScrollY <= 100 && scrollingUp) {
      controls.start({ opacity: 1, y: 0 });
      setScrollingUp(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollingUp]);

  return (
    <motion.nav
      ref={navRef}
      className="fixed z-50 shadow-md top-0 flex py-5 gap-3 items-center justify-between border-b-2 border-zinc-700 w-full"
      initial={{ opacity: 1, y: 0 }}
      animate={controls}
    >
      <motion.h1
        className="text-2xl ml-5 font-extrabold text-amber-500"
        initial={{ scale: 0 }}
        transition={{ duration: 0.5 }}
        animate={{ scale: 1 }}
      >
        Elias
      </motion.h1>
      <motion.ul
        className="flex gap-5 items-center sm:items-start"
        initial={{ scale: 0 }}
        transition={{ duration: 0.7 }}
        animate={{ scale: 1 }}
      >
        <li>
          <motion.a
            onClick={() => handleClick("inicio")}
            initial={{ scale: 0 }}
            transition={{ duration: 0.5 }}
            animate={{ scale: 1 }}
            className="border-b-2 border-transparent hover:border-white transition-all duration-300 ease-in-out hover:ease-in-out hover:text-amber-500"
          >
            Inicio
          </motion.a>
        </li>
        <li>
          <motion.a
            onClick={() => handleClick("sobre-mi")}
            initial={{ scale: 0 }}
            transition={{ duration: 0.7 }}
            animate={{ scale: 1 }}
            className="border-b-2 border-transparent hover:border-white transition-all duration-300 ease-in-out hover:ease-in-out text-xs sm:text-base hover:text-amber-500"
          >
            Sobre Mi
          </motion.a>
        </li>
        <li>
          <motion.a
            onClick={() => handleClick("proyectos")}
            initial={{ scale: 0 }}
            transition={{ duration: 0.8 }}
            animate={{ scale: 1 }}
            className="border-b-2 border-transparent hover:border-white transition-all duration-300 ease-in-out hover:ease-in-out hover:text-amber-500"
          >
            Proyectos
          </motion.a>
        </li>
      </motion.ul>
      <ul className="items-center sm:items-start">
        <motion.a
          onClick={() => handleClick("contactame")}
          initial={{ scale: 0 }}
          transition={{ duration: 0.6 }}
          animate={{ scale: 1 }}
          className="mr-5 text-amber-500 font-extrabold hover:text-white border-b-2 border-transparent hover:border-amber-500 transition-all duration-300 ease-in-out hover:ease-in-out text-xs sm:text-base"
        >
          Contactame
        </motion.a>
      </ul>
    </motion.nav>
  );
}

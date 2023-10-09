"use client";
import { motion } from "framer-motion";
export default function Nav() {
  return (
    <nav className="flex py-5 gap-3 items-center justify-between border-b-2 border-zinc-700 w-full">
      <motion.h1
        className=" text-2xl ml-5 font-extrabold text-amber-500"
        initial={{ scale: 0 }}
        transition={{ duration: 0.5 }}
        animate={{ scale: 1 }}
      >
        Elias
      </motion.h1>
      <li className="flex gap-5">
        <motion.a
          initial={{ scale: 0 }}
          transition={{ duration: 0.6 }}
          animate={{ scale: 1 }}
          className="border-b-2 border-transparent hover:border-white transition-all duration-300 ease-in-out hover:ease-in-out hover:text-amber-500"
        >
          Inicio
        </motion.a>
        <motion.a
          initial={{ scale: 0 }}
          transition={{ duration: 0.7 }}
          animate={{ scale: 1 }}
          className="border-b-2 border-transparent hover:border-white transition-all duration-300 ease-in-out hover:ease-in-out hover:text-amber-500"
        >
          Sobre Mi
        </motion.a>
        <motion.a
          initial={{ scale: 0 }}
          transition={{ duration: 0.8 }}
          animate={{ scale: 1 }}
          className="border-b-2 border-transparent hover:border-white transition-all duration-300 ease-in-out hover:ease-in-out hover:text-amber-500"
        >
          Proyectos
        </motion.a>
        <motion.a
          initial={{ scale: 0 }}
          transition={{ duration: 0.9 }}
          animate={{ scale: 1 }}
          className="border-b-2 border-transparent hover:border-white transition-all duration-300 ease-in-out hover:ease-in-out hover:text-amber-500"
        >
          Contacto
        </motion.a>
      </li>
      <motion.ul
        initial={{ scale: 0 }}
        transition={{ duration: 0.6 }}
        animate={{ scale: 1 }}
      >
        <motion.a className="mr-5 text-amber-500 font-extrabold hover:text-white border-b-2 border-transparent hover:border-amber-500 transition-all duration-300 ease-in-out hover:ease-in-out ">
          Contratame
        </motion.a>
      </motion.ul>
    </nav>
  );
}

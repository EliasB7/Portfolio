"use client";

import { Image } from "@nextui-org/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <main id="sobre-mi" className="flex mt-20 ml-22 justify-center sm:ml-50">
      <motion.section className="flex items-center flex-col justify-center gap-4 text-center w-2/5 mb-40 ">
        <motion.h1
          initial={{ x: -1200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-8xl"
        >
          Hola, soy <span className="text-amber-500 ">Elias</span>.
        </motion.h1>
        <motion.p
          initial={{ x: -1200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xl"
        >
          Full Stack Web Developer.
        </motion.p>
        <motion.p
          initial={{ x: -1200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xl"
        >
          Puedes conocer mas de mi en los distintos apartados de este
          portafolio!
        </motion.p>
        <motion.p
          initial={{ x: -1200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xl"
        >
          Tambien puedes encontrarme en las siguientes redes:
        </motion.p>
        <motion.p
          initial={{ x: -1200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl"
        >
          👇
        </motion.p>

        <li className="flex gap-10">
          <motion.a
            initial={{ scale: 0 }}
            transition={{ duration: 0.7 }}
            animate={{ scale: 1 }}
            className="hover:text-amber-500"
            href="https://www.linkedin.com/in/elias-alejandro-brid-11278a275/"
          >
            <FaLinkedin className="text-5xl" />
          </motion.a>
          <motion.a
            initial={{ scale: 0 }}
            transition={{ duration: 0.7 }}
            animate={{ scale: 1 }}
            className="hover:text-amber-500"
            href="https://github.com/EliasB7"
          >
            <FaGithub className="text-5xl" />
          </motion.a>
        </li>
      </motion.section>

      <motion.section
        className="block relative max-w-90"
        initial={{ scale: 0 }}
        transition={{ duration: 0.7 }}
        animate={{ scale: 1 }}
      >
        <Image
          src="avatar/zepeto_photo_1696454182076.png"
          alt="mifoto"
          height={500}
          width={500}
          className="hidden lg:block"
        />
      </motion.section>
    </main>
  );
}

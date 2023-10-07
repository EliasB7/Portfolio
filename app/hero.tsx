import { Image } from "@nextui-org/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Hero() {
  return (
    <main className="flex mt-20 ml-22 justify-center">
      <section className="flex items-center flex-col justify-center gap-5 text-center w-2/5 mb-40 ">
        <h1 className="text-8xl">
          Hola, soy <span className="text-amber-500 ">Elias</span>.
        </h1>
        <p className="text-xl">
          Full Stack Developer Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Fugiat dicta suscipit maiores doloribus illo?
          Molestias soluta impedit maiores, repudiandae excepturi consectetur
          reiciendis natus dolore? Voluptates velit aspernatur aliquid optio
          maiores!
        </p>

        <li className="flex gap-10">
          <a className="hover:text-amber-500">
            <FaLinkedin className="text-5xl" />
          </a>
          <a className="hover:text-amber-500">
            <FaGithub className="text-5xl" />
          </a>
        </li>
      </section>

      <section className="block relative max-w-90">
        <Image
          src="/zepeto_photo_1696454182076.png"
          alt="mifoto"
          height={500}
          width={500}
        />
      </section>
    </main>
  );
}

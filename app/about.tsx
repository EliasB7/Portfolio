import React from "react";
import { Reveal } from "./reveal";

const About = () => {
  return (
    <div className="flex justify-center mt-60 min-h-screen">
      <div id="sobre-mi" className="p-6 rounded-lg  w-full md:w-1/2">
        <Reveal>
          <h1 className="text-2xl font-bold mb-4">
            ¡Buenas! Soy ElÍas, desarrollador web.
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-lg mb-4">
            Enfocado en el constante aprendizaje de nuevas herramientas para ser
            útil en cualquier entorno de trabajo, priorizando las soluciones
            efectivas que ofrezcan una excelente experiencia de usuario.
          </p>
        </Reveal>
        <Reveal>
          <p className="text-lg mb-4">
            Actualmente, mi objetivo principal es seguir ganando experiencia,
            creciendo como desarrollador y aprendiendo de mis pares para ser
            mejor en lo que me apasiona cada día.
          </p>
        </Reveal>
        <Reveal>
          <p className="text-lg mb-4">
            ¡Gracias por visitar mi portfolio! Si estás interesado en mi perfil,
            no dudes en contactarme.
          </p>
        </Reveal>
        <Reveal>
          <p className="text-lg">
            Mail de contacto:{" "}
            <a href="mailto:bridelias7@gmail.com" className="text-amber-500">
              bridelias7@gmail.com
            </a>
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default About;

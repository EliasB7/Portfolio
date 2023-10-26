import React from "react";

const About = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="p-6 rounded-lg  w-full md:w-1/2">
        <h1 className="text-2xl font-bold mb-4">
          ¡Buenas! Soy Elias, desarrollador web.
        </h1>
        <p className="text-lg mb-4">
          Enfocado en el constante aprendizaje de nuevas herramientas para ser
          útil en cualquier entorno de trabajo, priorizando las soluciones
          efectivas y que ofrezcan una excelente experiencia de usuario.
        </p>
        <p className="text-lg mb-4">
          Actualmente, mi objetivo principal es seguir ganando experiencia,
          creciendo como desarrollador y aprendiendo de mis pares para ser mejor
          en lo que me apasiona cada día.
        </p>
        <p className="text-lg mb-4">
          ¡Gracias por visitar mi portfolio! Si estás interesado en mi perfil,
          no dudes en contactarme.
        </p>
        <p className="text-lg">
          Mail de contacto:
          <a href="mailto:bridelias7@gmail.com">bridelias7@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default About;

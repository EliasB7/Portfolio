"use client";
import { useState } from "react";
import { Image } from "@nextui-org/image";
import { motion, useAnimation } from "framer-motion";
import { Reveal } from "./reveal";

export default function Proyects() {
  return (
    <main>
      <Reveal>
        <h1 className="text-5xl">Proyectos en los que trabajé</h1>
      </Reveal>

      <Reveal>
        <section className="">
          <Reveal>
            <div className="mt-10 relative w-[400px]">
              <div className="relative w-400 h-500">
                <Image
                  src="/TESTIMAGE.webp"
                  width={400}
                  height={500}
                  alt="foto de prueba"
                />
                <div className="hover-overlay">
                  <h2 className="text-2xl font-bold mb-2">
                    Nombre del proyecto
                  </h2>
                  <div className="flex">
                    <img
                      src="logos/angular.png"
                      alt="Logo 1"
                      className="w-8 h-8 mr-2"
                    />
                    <img
                      src="logos/MONGO.png"
                      alt="Logo 2"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 relative w-[400px]">
              <div className="relative w-400 h-500">
                <Image
                  src="/TESTIMAGE.webp"
                  width={400}
                  height={500}
                  alt="foto de prueba"
                />
                <div className="hover-overlay">
                  <h2 className="text-2xl font-bold mb-2">
                    Nombre del proyecto
                  </h2>
                  <div className="flex">
                    <img
                      src="logos/REACT.png"
                      alt="Logo 1"
                      className="w-8 h-8 mr-2"
                    />
                    <img
                      src="logos/MONGO.png"
                      alt="Logo 2"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 relative w-[400px]">
              <div className="relative w-400 h-500">
                <Image
                  src="/TESTIMAGE.webp"
                  width={400}
                  height={500}
                  alt="foto de prueba"
                />
                <div className="hover-overlay">
                  <h2 className="text-2xl font-bold mb-2">
                    Nombre del proyecto
                  </h2>
                  <div className="flex">
                    <img
                      src="logos/REACT.png"
                      alt="Logo 1"
                      className="w-8 h-8 mr-2"
                    />
                    <img
                      src="logos/MONGO.png"
                      alt="Logo 2"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 relative w-[400px]">
              <div className="relative w-400 h-500">
                <Image
                  src="/TESTIMAGE.webp"
                  width={400}
                  height={500}
                  alt="foto de prueba"
                />
                <div className="hover-overlay">
                  <h2 className="text-2xl font-bold mb-2">
                    Nombre del proyecto
                  </h2>
                  <div className="flex">
                    <img
                      src="logos/REACT.png"
                      alt="Logo 1"
                      className="w-8 h-8 mr-2"
                    />
                    <img
                      src="logos/MONGO.png"
                      alt="Logo 2"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </Reveal>

      <style jsx>{`
        .hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          opacity: 0; /* Inicialmente transparente */
          transform: scale(0.8); /* Inicialmente reducido en escala */
          transition: opacity 0.3s ease-in, transform 0.3s ease-in-out;
        }

        .hover-overlay h2 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .hover-overlay img {
          width: 2rem;
          height: 2rem;
          margin: 0.25rem;
        }

        .relative:hover .hover-overlay {
          opacity: 1; /* Al hacer hover, muestra el overlay */
          transform: scale(1); /* Al hacer hover, escala a tamaño completo */
        }
      `}</style>
    </main>
  );
}

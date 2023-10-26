"use client";
import { useState } from "react";
import { Image } from "@nextui-org/image";
import { motion, useAnimation } from "framer-motion";
import { Reveal } from "./reveal";

export default function Proyects() {
  return (
    <main className="mt-40  justify-center" id="proyectos">
      <Reveal>
        <h1 className="text-5xl 2xl:ml-80">Proyectos en los que trabajé</h1>
      </Reveal>

      <Reveal>
        <section className="flex justify-center 2xl:ml-80 lg:ml-20 mt-4">
          <div className="project-container flex flex-col items-center justify-center">
            <div className="project">
              <div className="relative">
                <Image
                  src="proyects/DRINKIFY.png"
                  width={1200}
                  style={{ height: "550px" }}
                  alt="foto de prueba"
                />
                <div className="hover-overlay">
                  <h2 className="text-2xl font-bold mb-2">DRINKIFY</h2>
                  <div className="flex">
                    <img
                      src="logos/ANGULAR.png"
                      alt="Logo 1"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <img
                      src="logos/TS.png"
                      alt="Logo 1"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <img
                      src="logos/MONGO.svg"
                      alt="Logo 2"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <img
                      src="logos/NEST.svg"
                      alt="Logo 2"
                      style={{ width: "80px", height: "80px" }}
                    />
                  </div>
                  <div className=" mt-10 flex gap-5">
                    <button>REPO</button>
                    <button>DEPLOY</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="project">
              <div className="mt-10 relative">
                <Image
                  src="proyects/SALVANDOHUELLAS.png"
                  width={1200}
                  style={{ height: "550px" }}
                  alt="foto de prueba"
                />

                <div className="hover-overlay">
                  <h2 className="text-2xl font-bold mb-2">SALVANDO HUELLAS</h2>
                  <div className="flex">
                    <img
                      src="logos/REACT.png"
                      alt="Logo 1"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <img
                      src="logos/REDUX.png"
                      alt="Logo 2"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <img
                      src="logos/POSTGRE.png"
                      alt="Logo 1"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <img
                      src="logos/NODE.png"
                      alt="Logo 2"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <img
                      src="logos/EXPRESS.PNG"
                      alt="Logo 1"
                      style={{ width: "80px", height: "80px" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="project">
              <div className="mt-10 relative">
                <Image
                  src="proyects/COUNTRIES.png"
                  width={1200}
                  style={{ height: "550px" }}
                  alt="foto de prueba"
                />
                <div className="hover-overlay">
                  <h2 className="text-2xl font-bold mb-2">PI-COUNTRIES</h2>
                  <div className="flex">
                    <img
                      src="logos/REACT.png"
                      alt="Logo 1"
                      style={{ width: "80px", height: "80px" }}
                    />

                    <img
                      src="logos/NODE.png"
                      alt="Logo 1"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <img
                      src="logos/REDUX.png"
                      alt="Logo 2"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <img
                      src="logos/POSTGRE.png"
                      alt="Logo 2"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <img
                      src="logos/EXPRESS.png"
                      alt="Logo 2"
                      style={{ width: "80px", height: "80px" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="project">
              <div className="mt-10 relative">
                <Image
                  src="proyects/STARBUCKS.png"
                  width={1200}
                  style={{ height: "550px" }}
                  alt="foto de prueba"
                />
                <div className="hover-overlay">
                  <h2 className="text-2xl font-bold mb-2">
                    STARBUCKS HOMEPAGE RECREATION
                  </h2>
                  <div className="flex">
                    <img
                      src="logos/HTML.png"
                      alt="Logo 1"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <img
                      src="logos/CSS.png"
                      alt="Logo 2"
                      style={{ width: "80px", height: "80px" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="project">
              <div className="mt-10 relative">
                <Image
                  src="proyects/PORTFOLIO.png"
                  width={1200}
                  style={{ height: "550px" }}
                  alt="foto de prueba"
                />
                <div className="hover-overlay">
                  <h2 className="text-2xl font-bold mb-2">PORTFOLIO </h2>
                  <div className="flex">
                    <img
                      src="logos/HTML.png"
                      alt="Logo 1"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <img
                      src="logos/CSS.png"
                      alt="Logo 2"
                      style={{ width: "80px", height: "80px" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="project">
              <div className="mt-10 relative">
                <Image
                  src="proyects/CALCULATOR.png"
                  width={1200}
                  style={{ height: "550px" }}
                  alt="foto de prueba"
                />
                <div className="hover-overlay">
                  <h2 className="text-2xl font-bold mb-2">CALCJS</h2>
                  <div className="flex">
                    <img
                      src="logos/HTML.png"
                      alt="Logo 1"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <img
                      src="logos/CSS.png"
                      alt="Logo 2"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <img
                      src="logos/JS.png"
                      alt="Logo 2"
                      style={{ width: "80px", height: "80px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <style jsx>{`
        .project {
          margin-bottom: 20px;
        }

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

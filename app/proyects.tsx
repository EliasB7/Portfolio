"use client";
import { useState } from "react";
import { Image } from "@nextui-org/image";
import { motion, useAnimation } from "framer-motion";
import { Reveal } from "./reveal";

export default function Proyects() {
  return (
    <main id="proyectos" className="flex flex-col items-center">
      <Reveal>
        <h1 className="text-6xl  ">Proyectos en los que trabajé</h1>
      </Reveal>

      <Reveal>
        <section className="mt-7">
          <div className="project-container flex flex-col items-center justify-center mx-auto 2xl:mx-0">
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
                      className="bg-white"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <img
                      src="logos/NEST.svg"
                      alt="Logo 2"
                      style={{ width: "80px", height: "80px" }}
                    />
                  </div>
                  <div className=" mt-10 flex gap-5">
                    <a className="bg-amber-500 rounded p-2 hover:bg-white hover:text-black">
                      REPO
                    </a>
                    <a className="bg-amber-500 rounded p-2 hover:bg-white hover:text-black">
                      DEPLOY
                    </a>
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
                      src="logos/POSTGRE.png"
                      alt="Logo 1"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <img
                      src="logos/NODE.png"
                      alt="Logo 2"
                      className="bg-white"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <img
                      src="logos/EXPRESS.PNG"
                      alt="Logo 1"
                      className="bg-white"
                      style={{ width: "80px", height: "80px" }}
                    />
                  </div>
                  <div className=" mt-10 flex gap-5">
                    <a
                      href="https://github.com/EliasB7/PF_salvando_huellas/tree/main"
                      className="bg-amber-500 rounded p-2 hover:bg-white hover:text-black"
                    >
                      REPO
                    </a>
                    <a className="bg-amber-500 rounded p-2 hover:bg-white hover:text-black">
                      DEPLOY
                    </a>
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
                      className="bg-white"
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
                      className="bg-white"
                      style={{ width: "80px", height: "80px" }}
                    />
                  </div>
                  <div className=" mt-10 flex gap-5">
                    <a
                      href="https://github.com/EliasB7/PI-COUNTRIES"
                      className="bg-amber-500 rounded p-2 hover:bg-white hover:text-black"
                    >
                      REPO
                    </a>
                    <a className="bg-amber-500 rounded p-2 hover:bg-white hover:text-black">
                      DEPLOY
                    </a>
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
                  <div className=" mt-10 flex gap-5">
                    <a
                      href="https://github.com/EliasB7/STARBUCKS-HOMEPAGE-RECREATION"
                      className="bg-amber-500 rounded p-2 hover:bg-white hover:text-black"
                    >
                      REPO
                    </a>
                    <a className="bg-amber-500 rounded p-2 hover:bg-white hover:text-black">
                      DEPLOY
                    </a>
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
                      src="logos/NEXTJS.png"
                      alt="Logo 1"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <img
                      src="logos/TAILWIND.png"
                      alt="Logo 2"
                      style={{ width: "80px", height: "80px" }}
                    />
                  </div>
                  <div className=" mt-10 flex gap-5">
                    <a
                      href="https://github.com/EliasB7/Portfolio"
                      className="bg-amber-500 rounded p-2 hover:bg-white hover:text-black"
                    >
                      REPO
                    </a>
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
                  <div className=" mt-10 flex gap-5">
                    <a
                      href="https://github.com/EliasB7/CalcJS"
                      className="bg-amber-500 rounded p-2 hover:bg-white hover:text-black"
                    >
                      REPO
                    </a>
                    <a className="bg-amber-500 rounded p-2 hover:bg-white hover:text-black">
                      DEPLOY
                    </a>
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
          opacity: 0;
          transform: scale(0.8);
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
          opacity: 1;
          transform: scale(1);
        }

        @media (max-width: 768px) {
          .relative:hover .hover-overlay {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </main>
  );
}

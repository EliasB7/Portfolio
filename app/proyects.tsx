"use client";
import { useState } from "react";
import { Image } from "@nextui-org/image";

export default function Proyects() {
  const [hovered, setHovered] = useState(false);

  return (
    <main>
      <h1 className="text-5xl">Proyectos en los que trabajé</h1>

      <section>
        <div className="mt-10 relative w-[400px]">
          <div
            className={`relative w-400 h-500 ${hovered ? "hovered" : ""}`}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
          >
            <Image
              src="/TESTIMAGE.webp"
              width={400}
              height={500}
              alt="foto de prueba"
            />
            {hovered && (
              <div className="absolute inset-0 text-white bg-black bg-opacity-70">
                <h2 className="text-2xl font-bold mb-2">Nombre del proyecto</h2>
                <div className="flex">
                  <img src="/logo1.png" alt="Logo 1" className="w-8 h-8 mr-2" />
                  <img src="/logo2.png" alt="Logo 2" className="w-8 h-8" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        .hovered {
          background: transparent;
        }
      `}</style>
    </main>
  );
}

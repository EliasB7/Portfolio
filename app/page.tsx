"use client";
import Image from "next/image";
import Nav from "./nav";
import Hero from "./hero";
import Proyects from "./proyects";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Proyects />
    </main>
  );
}

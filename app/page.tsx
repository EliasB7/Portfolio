"use client";
import Image from "next/image";
import Nav from "./nav";
import Hero from "./hero";
import Proyects from "./proyects";
import { forwardRef } from "react";
import ContactForm from "./contact";
import About from "./about";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Proyects />
      <ContactForm />
    </main>
  );
}

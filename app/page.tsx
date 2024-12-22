"use client"

import About from "@/components/About";
import Article from "@/components/Article";
import Header from "@/components/Header";
import PrismaHouse from "@/components/PrismaHouse";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Header />
      <Projects />
      <PrismaHouse />
      <About />
      <Article />
    </main> 
  )    
}
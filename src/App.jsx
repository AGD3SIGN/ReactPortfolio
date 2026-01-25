import { useRef } from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import StickyNav from './components/ui/StickyNav';
import ScrollReveal from './components/ui/ScrollReveal';

function App() {
  return (
    <Layout>
      <StickyNav />
      <Hero />
      <ScrollReveal
        baseOpacity={0.1}
        enableBlur
        baseRotation={2}
        blurStrength={5}
      >
        When someone lands on a website, they just want it to feel easy.
        No confusion. No broken layouts. No struggling on mobile.

        That’s the problem I focus on as a freelance web developer.

        I build websites with real people in mind—how they scroll, tap, and browse on any screen size. Everything is designed to be responsive, clear, and comfortable to use, whether it’s on a phone, tablet, or desktop.

        This site shows how I work in practice.
        As you explore my projects, you’ll see clean layouts, thoughtful interactions, and mobile-first design decisions meant to turn visitors into clients.

        My goal is simple: help businesses create websites that feel natural to use, build trust quickly, and make it easy for people to take the next step.
      </ScrollReveal>
      <Experience />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default App;

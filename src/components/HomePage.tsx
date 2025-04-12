'use client';

import Hero from './Hero';
import Services from './Services';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Contact from './Contact';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
}

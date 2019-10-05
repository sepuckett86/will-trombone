import React from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Intro from './Intro';
import Music from './Music';
import Lessons from './Lessons';
import Bio from './Bio';
import Links from './Links';
import Contact from './Contact';
import Footer from './Footer';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Intro />
        <hr />
        <Music />
        <hr />
        <Lessons />
        <hr />
        <Bio />
        <hr />
        <Links />
        <hr />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
  

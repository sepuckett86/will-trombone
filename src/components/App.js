import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Intro from './Intro';
import Music from './Music';
import Lessons from './Lessons';
import Bio from './Bio';
import Links from './Links';
import Contact from './Contact';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Music />
        <Lessons />
        <Bio />
        <Links />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
  

import React, { useState, useEffect } from 'react';
import './portifolio.css';
import Projetos from '../projetos/projetos';
import Sobre from '../sobre/sobre';

export default function Portifolio() {

  const [aba, setAba] = useState("Projetos")
  return (
    <div className="portfolio">
      <main className="main">
        {/* HEADER MINIMALISTA */}
        <header className="header-minimal">
          <div className="header-content">
            <h1>Guilherme Taba</h1>
            <nav className="header-nav">
              <a href=""  onClick={(e) => {e.preventDefault();setAba("Sobre");}}  className="nav-btn">Sobre</a>
              <a href="" onClick={(e) => {e.preventDefault();setAba("Projetos");}} className="nav-btn">Projetos</a>
            </nav>
          </div>
        </header> 

      </main>

      {aba === "Projetos"? <Projetos/> :<Sobre/> }

    </div>
  );
}
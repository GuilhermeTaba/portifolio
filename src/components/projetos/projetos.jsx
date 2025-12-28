import React, { useState, useEffect } from 'react';


export default function Projetos() {
  const projetos = [
    {
      id: 2,
      titulo: 'PYGAME',
      descricao: 'Jogo desenvolvido com Python e Pygame, focando em mecânicas interativas e design visual atraente. Possui 3 mapas, no qual o objetivo é coletar todos os diamantes dentro do tempo estimulado. Competindo com o tempo de outros jogadores',
      imagens: [
        '/img/PYGAME/1.png',
        '/img/PYGAME/2.png',
        '/img/PYGAME/3.png',
        '/img/PYGAME/4.png',
        '/img/PYGAME/5.png'
      ],
      tecnologias: ['Python', 'Pygame', 'Desenvolvimento de Jogos'],
      link: '#'
    },
    {
      id: 3,
      titulo: 'SONO360',
      descricao: 'Plataforma de análise de sono desenvolvida com Django. Sistema que coleta questionários, processa e apresenta dados de qualidade de sono com visualizações avançadas.',
      imagens: [
        '/img/SONO360/1.png',
        '/img/SONO360/2.png',
        '/img/SONO360/3.png',
        '/img/SONO360/4.png',
        '/img/SONO360/5.png',
        '/img/SONO360/6.png'
      ],
      tecnologias: ['Python', 'Django', 'Desenvolvimento Web'],
      link: '#'
    },
    {
      id: 1,
      titulo: 'LIEDENTE',
      descricao: 'Reestruturação do site da empresa Liedente através de uma aplicação em Next, com o objetivo de melhorar a disposição das informações da empresa e seu visual.',
      imagens: [
        '/img/LIEDENTE/1.png',
        '/img/LIEDENTE/2.png',
        '/img/LIEDENTE/3.png',
         '/img/LIEDENTE/4.png',

      ],
      tecnologias: ['Javascript','Next' ,'Desenvolvimento Web'],
      link: '#'
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [visibleProjects, setVisibleProjects] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const projectElement = entry.target;
            projectElement.classList.add('visible');
            observer.unobserve(projectElement);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll('[data-project-id]');
    projectElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      projectElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const inicializarIndice = (projetoId) => {
    if (!(projetoId in currentImageIndex)) {
      setCurrentImageIndex(prev => ({
        ...prev,
        [projetoId]: 0
      }));
    }
  };

  const mudarImagem = (projetoId, direcao, totalImagens) => {
    setCurrentImageIndex(prev => {
      const indiceAtual = prev[projetoId] || 0;
      let novoIndice = indiceAtual + direcao;
      
      if (novoIndice < 0) {
        novoIndice = totalImagens - 1;
      } else if (novoIndice >= totalImagens) {
        novoIndice = 0;
      }
      
      return {
        ...prev,
        [projetoId]: novoIndice
      };
    });
  };

  return (
    <div className="portfolio">
      <main className="main">
        {/* PROJETOS - SEÇÃO PRINCIPAL */}
        <section className="projetos-main" id="projetos">
          <div className="projetos-container">
            {projetos.map((projeto, index) => {
              inicializarIndice(projeto.id);
              const indiceAtual = currentImageIndex[projeto.id] || 0;
              const imagemAtual = projeto.imagens[indiceAtual];

              return (
                <div 
                  key={projeto.id} 
                  className={`projeto-item ${index % 2 === 0 ? 'left' : 'right'} ${visibleProjects[projeto.id] ? 'visible' : ''}`}
                  data-project-id={projeto.id}
                >
                  <div className="projeto-imagem">
                    <img src={imagemAtual} alt={projeto.titulo} />
                    <button
                      className="arrow-btn arrow-left"
                      onClick={() => mudarImagem(projeto.id, -1, projeto.imagens.length)}
                      aria-label="Imagem anterior"
                    >
                      ‹
                    </button>
                    <button
                      className="arrow-btn arrow-right"
                      onClick={() => mudarImagem(projeto.id, 1, projeto.imagens.length)}
                      aria-label="Próxima imagem"
                    >
                      ›
                    </button>
                  </div>
                  <div className="projeto-info">
                    <h3>{projeto.titulo}</h3>
                    <p>{projeto.descricao}</p>
                    <div className="projeto-tags">
                      {projeto.tecnologias.map((tech, idx) => (
                        <span key={idx} className="tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

    </div>
  );
}
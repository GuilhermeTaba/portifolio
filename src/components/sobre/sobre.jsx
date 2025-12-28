import React from 'react';

export default function Sobre() {
  return (
    <div className="sobre-main">
      <div className="sobre-content">
        <div className="sobre-header-section">
          <div className="sobre-photo">
            <img src="/img/foto-gui.jpeg" alt="Guilherme Taba" />
          </div>
          
          <div className="sobre-text">
            <p>
Meu nome é Guilherme Taba, sou estudante de Ciência da Computação no Insper. Apaixonado por aprender, busco constantemente novos desafios, que vão desde o estudo de novos idiomas e linguagens de programação até a exploração de novas tecnologias.
              
            </p>
          </div>
        </div>

        <div className="sobre-grid">
          <section className="sobre-section">
            <h3>Educação</h3>
            <div className="education-list">
              <div className="education-item">
                <h4>2025 - 2028</h4>
                <p>Ciência da Computação</p>
                <span className="institution">INSPER</span>
              </div>
              <div className="education-item">
                <h4>2022 - 2024</h4>
                <p>Ensino Médio</p>
                <span className="institution">Colégio Agostiniano Mendel</span>
              </div>
            </div>
          </section>

          <section className="sobre-section">
            <h3>Experiências</h3>
            <div className="experiences">
              <div className="experience-item">
                <h4>2025</h4>
                <p>Desenvolvedor na Organização Estudantil</p>
                <span className="institution">Insper Code</span>
              </div>
              <div className="experience-item">
                <h4>2025</h4>
                <p>Curso Paideia</p>
                <span className="institution">Metanoia</span>
              </div>
              <div className="experience-item">
                <h4>2024</h4>
                <p>Liderança Inspiradora</p>
                <span className="institution">Instituto I9C</span>
              </div>
              <div className="experience-item">
                <h4>2023</h4>
                <p>Trabalho Voluntário</p>
                <span className="institution">LEMDA</span>
              </div>
              <div className="experience-item">
                <h4>2023</h4>
                <p>Intercâmbio - Oxford International</p>
                <span className="institution">Canada</span>
              </div>
            </div>
          </section>

          <section className="sobre-section">
            <h3>Habilidades</h3>
            <div className="skills-container">
              <div className="skill-group">
                <h4>Linguagens</h4>
                <div className="skills-list">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">Java</span>
                </div>
              </div>
              <div className="skill-group">
                <h4>Frameworks</h4>
                <div className="skills-list">
                  <span className="skill-tag">Django</span>
                  <span className="skill-tag">Flask</span>
                  <span className="skill-tag">Next.js</span>
                </div>
              </div>
              <div className="skill-group">
                <h4>Banco de Dados</h4>
                <div className="skills-list">
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">SQL</span>
                </div>
              </div>
              <div className="skill-group">
                <h4>Idiomas</h4>
                <div className="skills-list">
                  <span className="skill-tag">Inglês - C1</span>
                  <span className="skill-tag">Japonês - Iniciante</span>
                  <span className="skill-tag">Portugues - Nátivo</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
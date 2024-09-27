import { useRef } from "react";
import Header from "../../components/Header";
import { Container } from "./styles";

function Home() {
  const inicioSecaoRef = useRef(null);
  const sobreSecaoRef = useRef(null);
  const progetoSecaoRef = useRef(null);

  return (
    <Container>
      <Header
        inicioSecaoRef={inicioSecaoRef}
        sobreSecaoRef={sobreSecaoRef}
        progetoSecaoRef={progetoSecaoRef}
      />

      <section id="userInfoSection" ref={inicioSecaoRef}>
        <div className="userInfoContainer">
          <div className="userInfoArea">
            <div className="userInfo">
              <h1 className="userName">Olá, sou Carlos Eduardo! 👋</h1>
              <p className="userDescription">
                Estudante de Ciência da Computação e desenvolvedor fullstack com foco em backend.
                Trabalho para transformar ideias em soluções digitais robustas e funcionais.
              </p>
              <p className="serviceName">Desenvolvedor FullStack e Mobile</p>
            </div>
          </div>
        </div>
      </section>

      <section id="sobreSection" ref={sobreSecaoRef}>
        <div className="sobreContainer">
          <div className="sobreHeaderArea">
            <h2>Sobre</h2>
          </div>
          <div className="sobreContentArea">
            <div className="sobreDescriptionArea">
              Tenho 21 anos, sou estudante de Ciência da Computação na FACAPE.
              Ao longo de 2 anos de experiência em estágio como desenvolvedor mobile,
              evoluí para atuar como desenvolvedor fullstack.
              Sempre busco aprender novas tecnologias e construir soluções robustas e escaláveis,
              com o objetivo de impactar positivamente a vida das pessoas por meio da tecnologia.
            </div>
            <div className="sobreHabilidadesArea">

            </div>
          </div>
        </div>
      </section>

      <section id="projectSection" ref={progetoSecaoRef}>
        <div className="projectContainer">
          <div className="projectHeaderArea">
            <h2>PROJETOS</h2>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Home;
import { act, useRef, useState } from "react";

import { ButtonFilter, Container } from "./styles";

import Header from "../../components/Header";
import CardSkill from "../../components/CardSkill";
import { Swiper, SwiperSlide } from "swiper/react";

import { skills, actions } from '../../services/data/skills'

function Home() {
  const inicioSecaoRef = useRef(null);
  const sobreSecaoRef = useRef(null);
  const progetoSecaoRef = useRef(null);

  const [action, setAction] = useState(1)

  const skillsFilter = skills.filter(skill => skill.action === action);

  const activeAction = (actionCompare) => action === actionCompare

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
          <div className="sobreDescriptionArea">
            <div>
              <div className="sobreHeaderArea">
                <h2>Sobre Mim</h2>
              </div>
              <article className="sobreDescripiton">
                Olá, sou Carlos Eduardo,
                tenho 21 anos e sou estudante de Ciência da Computação na FACAPE.
                Desde jovem, sempre fui fascinado por tecnologia e como ela pode transformar o mundo ao nosso redor.
                Foi essa curiosidade que me levou a seguir o caminho da programação e,
                ao longo dos últimos 2 anos,
                tive a oportunidade de aprofundar meus conhecimentos como desenvolvedor,
                tanto no front-end quanto no back-end,
                e me especializar em mobile.
              </article>
            </div>
            <div>
              <div className="sobreHeaderArea">
                <h2>Minhas Metas</h2>
              </div>
              <article className="sobreDescripiton">
                Acredito que a tecnologia tem o poder de transformar vidas e melhorar processos em várias áreas.
                Meu objetivo é continuar aprimorando minhas habilidades e trabalhar em projetos que causem impacto positivo,
                seja ajudando empresas a otimizar seus processos ou oferecendo soluções digitais que facilitem a vida das pessoas.
              </article>
              <article className="sobreDescripiton">
                Além disso, um dos meus objetivos futuros é me aprofundar mais em arquitetura de sistemas e cloud computing,
                pois vejo que o futuro da tecnologia está cada vez mais ligado à computação em nuvem,
                microserviços e infraestrutura escalável.
              </article>
            </div>
          </div>
          <div>
            <img />
          </div>
        </div>
      </section>

      <section id="projectSection" ref={progetoSecaoRef}>
        <div className="projectContainer">
          <div className="projectHeaderArea">
            <h2>PROJETOS</h2>
          </div>
        </div>
        <div className="sobreSkillsArea">
          <div className="sobreSkillFilterArea">
            {actions.map((action, index) => (
              <ButtonFilter
                key={index}
                onClick={() => setAction(action.id)}
                style={{
                  color: activeAction(action.id) ? '#348cf0' : '#333333'
                }}
              >
                {action.name}
              </ButtonFilter>
            ))}
          </div>
          <div className="sobreSkillsContent">
            <div
              className="sobreSkillsSwiper"
            >
              {skillsFilter.map(skill => (
                <CardSkill
                  key={skill.title}
                  Icon={skill.icon}
                  title={skill.title}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Home;
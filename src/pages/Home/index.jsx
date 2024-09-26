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
              <h1 className="userName">Carlos Eduardo</h1>
              <p className="serviceName">Desenvolvedor, FullStack</p>
              <p className=""></p>
            </div>
            <div className=""></div>
          </div>
          <div className="userInfoArea">
          </div>
        </div>
      </section>

      <section id="userInfoContainer" ref={sobreSecaoRef}>
        <div className="userInfo">
          <div className="userInfoArea">
            <h1 className="userName">Carlos Eduardo</h1>
            <p className="userService">Desenvolvedor, FullStack</p>
          </div>
        </div>
      </section>

      <section id="userInfoContainer" ref={progetoSecaoRef}>
        <div className="userInfo">
          <div className="userInfoArea">
            <h1 className="userName">Carlos Eduardo</h1>
            <p className="userService">Desenvolvedor, FullStack</p>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Home;
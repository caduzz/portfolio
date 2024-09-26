import { Nav } from "./styles"

import {
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin
} from "react-icons/si"

function Header({ inicioSecaoRef, sobreSecaoRef, progetoSecaoRef }) {

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Nav>
      <div className="navBarArea">
        <div className="navBarItems">
          <button
            onClick={() => scrollToSection(inicioSecaoRef)}
            className="navBarItem"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection(sobreSecaoRef)}
            className="navBarItem"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(progetoSecaoRef)}
            className="navBarItem"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Projects
          </button>
          <button href="#" className="navBarItem">
            Articles
          </button>
        </div>
        <div className="navBarItems">
          <a
            className="navBarItem"
            href="https://twitter.com/cadu__s"
            target="_blank"
            rel="noreferrer"
          >
            <SiGmail size={22} />
          </a>
          <a
            className="navBarItem"
            href="https://www.linkedin.com/in/cadu-dev"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin size={22} />
          </a>
          <a
            className="navBarItem"
            href="https://github.com/caduzz"
            target="_blank" rel="noreferrer"
          >
            <SiGithub size={22} />
          </a>
          <a
            className="navBarItem"
            href="https://www.instagram.com/cadu.dev"
            target="_blank"
            rel="noreferrer"
          >
            <SiInstagram size={22} />
          </a>
        </div>
      </div>
    </Nav>
  )
}

export default Header
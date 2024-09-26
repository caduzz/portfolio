import { Nav } from "./styles"

import {
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin
} from "react-icons/si"

function Header() {
  return (
    <Nav>
      <div>
        <div className="navBarArea">
          <div className="navBarItems">
            <a
              onClick={() => scrollToSection(inicioSecaoRef)}
              className="navBarItem"
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection(sobreSecaoRef)}
              className="navBarItem"
            >
              About
            </a>
            <a
              onClick={() => scrollToSection(progetoSecaoRef)}
              className="navBarItem"
            >
              Projects
            </a>
            <a href="#" className="navBarItem">
              Articles
            </a>
          </div>
          <div className="navBarItems">
            <a
              className="navBarItem"
              href="https://twitter.com/cadu__s"
              target="_blank" rel="noreferrer"
            >
              <SiGmail size={22} />
            </a>
            <a
              className="navBarItem"
              href="https://www.linkedin.com/in/cadu-dev"
              target="_blank" rel="noreferrer"
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
              target="_blank" rel="noreferrer"
            >
              <SiInstagram size={22} />
            </a>
          </div>
        </div>
      </div>
    </Nav>
  )
}

export default Header
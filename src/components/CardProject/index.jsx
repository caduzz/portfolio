import { Container } from "./styles";

function CardProject({ data }) {
  return (
    <Container>
      <div className="cardProject">
        <a
          href={data.uri}
          target="_blank"
        >
          {data.img && (
            <img
              className="imgProject"
              src={data.img_uri}
              alt=""
            />
          )}
          <div className="cardContentProject">
            <p className="cardProjectTitle">{data.name}</p>
            <p className="cardProjectDescription">{data.description}</p>
            <div className="cardProjectTechs">
              {data.techs.map(tech => (<span key={tech} className="cardTech">{tech}</span>))}
            </div>
          </div>
        </a>
      </div>
    </Container>
  );
}

export default CardProject;
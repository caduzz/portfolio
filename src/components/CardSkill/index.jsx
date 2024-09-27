import { Container } from "./styles";

function CardSkill({ Icon, title }) {
  return (
    <Container>
      <div className="contentCardSkill">
        <div className="cardSkillIcon">{Icon}</div>
        <p className="cardSkillTitle">{title}</p>
      </div>
    </Container>
  );
}

export default CardSkill;
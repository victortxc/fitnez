import React from "react";
import { Container, Title } from "../../assets/styles.js";
import groups from "../../assets/groups.png";

export function Header() {
  return (
    <Container>
      <Title>Time FIAP</Title>
      <img src={groups} alt="groups" />
    </Container>
  );
}

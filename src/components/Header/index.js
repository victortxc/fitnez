import React from "react";
import {Container} from "./styles";
import groups from '../../assets/groups.png';


export function Header() {
    return(
        <Container>
            <h1>Time FIAP</h1>
            <img src={groups} alt="groups"/>
        </Container>
    );
}

import React from "react";
import {Container, Select} from "./styles";
import logo from '../../assets/logo.png';


export function Header() {
    return(
        <Container>
            <img src={logo} alt="logo" />
            <Select>
                <option>PT-BR</option>
                <option>EN</option>
            </Select>
        </Container>
    );
}

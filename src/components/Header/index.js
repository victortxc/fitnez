import React from "react";
import {Container, Select} from "./styles";

export function Header() {
    return(
        <Container>
            <h1>Logo</h1>
            <Select>
                <option>PT-BR</option>
                <option>EN</option>
            </Select>
        </Container>
    );
}

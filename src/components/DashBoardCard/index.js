import React from "react";
import {Container, LineContainer, Title, SubTitle, Value} from "./styles";
import {AiOutlineInfoCircle} from "react-icons/ai";
import { Colors } from "../../shared/DesignTokens";
import {DashBoardPercentual} from "../DashBoardPercentual";

export function DashBoardCard({title, value, subtitle, percentual}) {
    return(
        <Container>
            <LineContainer>
                <Title>{title}</Title>
                <AiOutlineInfoCircle size={20} color={Colors.BLUE} />
            </LineContainer>
            <LineContainer>
                <Value>{value}</Value>
                <DashBoardPercentual percentual={percentual} />
            </LineContainer>
            <LineContainer>
                <SubTitle>Período anterior: {subtitle}</SubTitle>
            </LineContainer>
        </Container>
    );
}

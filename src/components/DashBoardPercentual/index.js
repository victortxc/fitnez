import React from "react";
import { Container } from "./styles";
import {HiArrowTrendingUp, HiArrowTrendingDown} from "react-icons/hi2";

export function DashBoardPercentual({percentual}) {
    return(
        <Container percentual={percentual}>
            {percentual > 0 ? (<HiArrowTrendingUp />) : (<HiArrowTrendingDown />)}
            {percentual}%
        </Container>
    );
}

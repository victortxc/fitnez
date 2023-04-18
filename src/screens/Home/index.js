import React from "react";
import {Header} from "../../components/Header";
import { SiderBar } from "../../components/SideBar";
import {BsCalendarEvent } from "react-icons/bs";
import {Container, DashboardContainer, DashboardHeader, DashboardHeaderRight, Title, SubTitle, Select, DashBoardCardContainer, DashBoardChartContainer} from "./styles";
import {DashBoardCard} from "../../components/DashBoardCard";
import { ChartBar } from "../../components/ChartBar";

export function Home() {
    return(
        <>
        <Header />
        <Container>
            <SiderBar active="home" />
            <DashboardContainer>
                <DashboardHeader>
                    <div>
                        <Title>Visão Geral</Title>
                        <SubTitle>Última atualização: 14 de Fevereiro de 2023, 11:42</SubTitle>
                    </div>
                    <DashboardHeaderRight>
                        <BsCalendarEvent />
                        <Select>
                            <option>Mês anterior</option>
                        </Select>
                    </DashboardHeaderRight>
                </DashboardHeader>
                <DashBoardCardContainer>
                    <DashBoardCard title="Funcionários inscritos" value={1000} subtitle={750} percentual={25} />
                    <DashBoardCard title="Funcionários inscritos" value={1000} subtitle={750} percentual={25} />
                    <DashBoardCard title="Funcionários inscritos" value={1000} subtitle={750} percentual={25} />
                    <DashBoardCard title="Funcionários inscritos" value={1000} subtitle={750} percentual={25} />
                    <DashBoardCard title="Funcionários inscritos" value={1000} subtitle={750} percentual={-25} />
                </DashBoardCardContainer>
                <DashBoardChartContainer>
                <ChartBar />
                </DashBoardChartContainer>
            </DashboardContainer>
        </Container>
        </>
    );
}

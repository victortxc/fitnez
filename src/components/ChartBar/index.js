import React from 'react';
import Chart from "react-apexcharts";
import {Button} from "../Button";
import {Container, ContainerLine,Right,Title,Left,PencentualTitle,Percentual } from "./styles";
import {Colors} from "../../shared/DesignTokens";

export function ChartBar() {
  const state = {
    options: {
      chart: {
        id: "bar"
      },
      colors: [Colors.BLUE, Colors.DARK_GREEN],
      xaxis: {
        categories: ["01/01/23", "01/01/23", "01/01/23", "01/01/23", "01/01/23"]
      }
    },
    series: [
      {
        name: "KMs planejados",
        data: [100, 75, 50, 60, 87]
      },
      {
        name: "KMs percorridos",
        data: [24, 47, 25, 25, 45],
      },
    ]
  };

  return (
    <Container>
      <ContainerLine>
        <Left>
          <Title>KMs Planejados vs KMs Percorridos</Title>
        </Left>
        <Right>
          <PencentualTitle>conversão média (período)</PencentualTitle>
          <Percentual>45,9%</Percentual>
        </Right>
      </ContainerLine>
      <Chart
      options={state.options}
      series={state.series}
      type="bar"
    />
    <Button>Ver mais métricas</Button>
  </Container>
  );
};

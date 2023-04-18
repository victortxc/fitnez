import styled from "styled-components";
import {Spaces, FontSizes, Colors, FontWeights} from "../../shared/DesignTokens";

export const Container = styled.div`
    display: flex;
    width: 100%;
`;

export const DashboardContainer = styled.div`
    width: 100%;
    padding: ${Spaces.FIVE};
`;

export const DashboardHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const DashboardHeaderRight = styled.div`
    display: flex;
    height: 80%;
    align-items: center;
    justify-content: space-around;
    border: 1px solid ${Colors.GREY};
    padding: ${Spaces.ONE_HALF};
`;

export const Title = styled.h2`
    font-size: ${FontSizes.FOUR};
`;

export const SubTitle = styled.p`
    margin-top: ${Spaces.ONE};
    font-size: ${FontSizes.ONE_QUARTER};
    color: ${Colors.BLACK};
`;

export const Select = styled.select`
    border: none;
    background: ${Colors.BACKGROUND};
`;

export const DashBoardCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: ${Spaces.FIVE};
    justify-content: space-around;
`;

export const DashBoardChartContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: ${Spaces.FIVE};
    justify-content: space-around;
`;



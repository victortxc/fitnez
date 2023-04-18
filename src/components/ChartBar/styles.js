import styled from "styled-components";
import {Spaces, Colors, FontWeights, FontSizes} from "../../shared/DesignTokens";

export const Container = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    border: 1px solid ${Colors.GREY};
    padding: ${Spaces.THREE};
`;

export const ContainerLine = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: ${Spaces.THREE}
`;

export const Left = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
`;

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 40%;
`;

export const PencentualTitle = styled.p`
    font-size: ${FontSizes.ONE_HALF};
    font-weight: ${FontWeights.THIN};
`;

export const Percentual = styled.p`
    font-size: ${FontSizes.FOUR};
    font-weight: ${FontWeights.BOLD};
`;

export const Title = styled.p`
    font-size: ${FontSizes.TWO_HALF};
    font-weight: ${FontWeights.BOLD};
`;

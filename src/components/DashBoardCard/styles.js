import styled from "styled-components";
import {Spaces, Colors, FontWeights, FontSizes} from "../../shared/DesignTokens";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border: 1px solid ${Colors.GREY};
    padding: ${Spaces.THREE};
    margin-bottom: ${Spaces.THREE}
`;

export const LineContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
`;

export const Title = styled.p`
    font-size: ${FontSizes.TWO_HALF};
    font-weight: ${FontWeights.REGULAR};
    margin-right: ${Spaces.ONE};
`;

export const Value = styled.p`
    font-size: ${FontSizes.FOUR_HALF};
    font-weight: ${FontWeights.BOLD};
`;

export const SubTitle = styled.p`
    font-size: ${FontSizes.TWO};
    font-weight: ${FontWeights.THIN};
    color: ${Colors.BLACK};
`;

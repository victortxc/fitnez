import styled from "styled-components";
import { Colors, Spaces } from "../../shared/DesignTokens";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 35%;
    background-color: ${(props) => props.percentual > 0 ? Colors.GREEN : Colors.LIGHT_RED };
    padding: ${Spaces.ONE};
    margin-left: ${Spaces.THREE};
`;

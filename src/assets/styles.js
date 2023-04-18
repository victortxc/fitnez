import styled from "styled-components";
import { Colors, FontSizes, Spaces, FontWeights } from "../shared/DesignTokens";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;


export const Button = styled.button`
  padding: 8px 20px;
  background-color: ${Colors.ORANGE};
  color: ${Colors.WHITE};
  border-radius: 4px;
  font-weight: ${FontWeights.BOLD};
  border: none;
  box-shadow: 0 0 0.2em ${Colors.GREY};
  display: flex;
  justify-content: left;
`;


export const Form = styled.form`
  display: flex;
  position: absolute;
  content: " ";
  top: 80px;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  border: 2px solid ${Colors.ORANGE};
  padding: ${Spaces.TWO} ;
  align-items: center;
  border-radius: 22px;

`;

export const Label = styled.p`
  color: ${Colors.WHITE};
  text-align: left;
  font-family: Poppins;
  padding: ${Spaces.ONE_HALF} 0;
  font-size: ${FontSizes.TWO};
`;
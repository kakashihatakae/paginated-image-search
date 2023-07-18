import React from "react";
import styled from "styled-components";

const StyledBackArrow = styled.div<{
  arrowType?: "left" | "right";
}>`
  position: fixed;
  top: 50%;
  ${({ arrowType }) =>
    arrowType === "left" ? "margin-left: 2%;" : "margin-left: 91%; "}
  background-color: rgb(255, 255, 255, 0.8);
  width: 50px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

interface ArrowBackgroundProps {
  children: React.ReactNode;
  arrowType?: "left" | "right";
  onClick?: () => void;
}

const Arrowbackground: React.FC<ArrowBackgroundProps> = ({
  children,
  arrowType,
  onClick,
}) => {
  return (
    <StyledBackArrow arrowType={arrowType} onClick={onClick}>
      {children}
    </StyledBackArrow>
  );
};

export default Arrowbackground;

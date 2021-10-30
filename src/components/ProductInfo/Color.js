import { useState } from "react";
import styled, { css } from "styled-components"



export const Color = (props) => {

    return (
        <Wrapper onClick={props.clicked} color={props.color} isActive={props.active}></Wrapper>
    )
}

const Wrapper = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background-color: ${(props) => props.color};

    ${({ isActive, color }) => isActive && css`
        outline: 2px solid ${color};
        border: 3px solid white;
    `}
`;
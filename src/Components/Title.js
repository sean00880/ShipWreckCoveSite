import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/themeContext';

function ServicesSection({name, subtext}) {
    const theme = useTheme()
    return (
        <TitleStyled theme={theme}>
            <h3>{name}</h3>
            <p>{subtext}</p>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    h3{
        font-size: 2.5rem;
        font-weight: 700;
        background: linear-gradient(179deg,#8e731c -17.99%,#c5ac3d 111.32%,#6f5b14 111.32%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
    .title{
        background: linear-gradient(179deg,#8e731c -17.99%,#c5ac3d 111.32%,#6f5b14 111.32%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
`;

export default ServicesSection
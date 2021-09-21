import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" />
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-gap:25px;
    padding: 30px 0 26px;
    grid-template-columns: repeat(5, minmax(0,1fr));
    
    // display: flex;
`
const Wrap = styled.div`
cursor: pointer;
border-radius: 10px;
border: 3px solid rgba(249,249,249,0.1);
box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0/73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
img{
    height:100%;
    width: 100%;
    object-fit: cover;
    // padding: 0 50px;
}

&:hover{
    transform: scale(1.05);
    border-color: rgba(249,249,249,0.8);
    box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0/73%) 0px 16px 10px -10px;

}
`
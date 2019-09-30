import React from "react";
import styled from "styled-components";

const StarCard= styled.div`
    width: 600px;
    display: flex;
    margin: 5%;
    flex-direction: column;
    height: fit-content;
    border: none;
    background-color: #9ACD32;
    border-radius: 20px;
`

const StarName=styled.h1`
    color: indigo;
    font-size: 2.8rem;
    display: flex;
    justify-content: center;
    font-weight: bold;
`

const StarDeets=styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 5%;
    justify-content: center;
`

const Deet=styled.p`
    margin: 20px;
    font-weight: bold;
    font-size: 1.7rem;
`

const Characters = props =>{
    return(
        <StarCard className = "star-card" key = {props.index}>
            <StarName className = "star-name">{props.name}</StarName>
            <StarDeets className= "star-info">
                <Deet>Birth Year: {props.birth_year}</Deet>
                <Deet>Gender: {props.gender}</Deet>
                <Deet>Height: {props.height}cm</Deet>
                <Deet>Weight: {props.mass}lbs</Deet>
            </StarDeets>

        </StarCard>
    )
}

export default Characters;
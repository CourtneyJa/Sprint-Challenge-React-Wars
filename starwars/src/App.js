import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import styled from "styled-components";
import Characters from "./components/Characters";


const StarCont=styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left:5%;
  
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const[starChars, setStarChars]= useState([]);

    useEffect(()=>{
        axios.get(`https://swapi.co/api/people/`)
             .then(response =>{
                setStarChars(response.data.results);
                console.log(response.data.results);
             })
             .catch(error=>{
                 console.log ("Use the force, Luke", error);
             });

    }, []);

    return(
        <StarCont>
            {starChars.map(object =>{
            return <Characters key={object.name} name={object.name} birth_year={object.birth_year} gender={object.gender} height={object.height} mass={object.mass}/>;})}

        </StarCont>
    )
}

export default App;

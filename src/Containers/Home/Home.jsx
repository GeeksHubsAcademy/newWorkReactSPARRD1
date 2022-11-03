
//In order to be able to work with Hooks, I will import useState.
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Custombutton from '../../Components/Custombutton/Custombutton';

//useEffect are the state hooks

import "./Home.css";

const Home = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        //This useEffect is being executed ONLY when the component is mounted for the first time.

    }, []);

    useEffect(() => {

        setTimeout(()=>{

            bringCharacters();
        }, 3000);

        console.log("now the value is...:", characters);
    });


    const bringCharacters = async () => {

        try {

            let res = await axios.get("https://rickandmortyapi.com/api/character");

            if (!characters[1]) {
                //This comparisson would mean that there is NOTHING inside the characters array
                setCharacters(res.data.results);
            };

        } catch (error) {
            console.log(error);
        }


    };

    const nameMe = (person) => {
        console.log(person.name);
    }

    if (characters[1]) {

        return (
            <div className="homeDesign">
                {
                    characters.map(person => {
                        return (
                            <div key={person.id} onClick={()=>nameMe(person)}>{person.name}</div>
                        )
                    })
                }

            </div>
        )

    } else {
        return (
            <div className="homeDesign">
                <Custombutton />
                <Custombutton />
                ...THE CHARACTERS ARE LOADING...
            </div>
        )
    }

}

export default Home;
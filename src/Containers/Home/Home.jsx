
//In order to be able to work with Hooks, I will import useState.
import React, {useState, useEffect} from 'react';
import Custombutton from '../../Components/Custombutton/Custombutton';

//useEffect are the state hooks

import "./Home.css";

const Home = () => {

    


    

    return (
        <div className="homeDesign">
            <Custombutton/>
            <Custombutton/>
            
        </div>
    )
}

export default Home;
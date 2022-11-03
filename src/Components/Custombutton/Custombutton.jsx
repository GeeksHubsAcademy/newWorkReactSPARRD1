
import React, { useState, useEffect } from 'react';

import "./Custombutton.css";

const Custombutton = () => {

    //When mounting, first looks for the Hooks, always.

    const [sum, setSum] = useState(0);


    useEffect(() => {
        //This function will trigger once the component has been mounted ONLY for the first time.

        console.log("The component has been mounted, and sum value is: ", sum);
    }, []);


    useEffect(() => {
        //This will trigger, EVERYTIME the component updates.
        if (sum !== 0) {

            console.log("now the component is being rendered again and value is: ", sum);
        }
    });

    //Normal functions

    const operate = (operation) => {

        if(operation === "+"){

            setSum(sum + 5);
        }else{
            setSum(sum - 5);
        };

    };


    //Second, he goes to the render zone and displays it...

    return (
        <div className="customButtonDesign">
            <div className="sumDesign" onClick={() => operate("+")}>+</div>
            {sum}
            <div className="restDesign" onClick={() => operate("-")}>-</div>
            
        </div>
            
    )
}

export default Custombutton;
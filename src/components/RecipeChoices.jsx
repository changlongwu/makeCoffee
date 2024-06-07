import React, {Component, useEffect, useState} from 'react';


// set up different blocks of answer choices for each list in ingredients
const RecipeChoices = ({handleChange, label, choices, checked}) =>{

    return (
        <div className='RecipeChoices'>
            {/* loop through each of the choices */}
            <div className='radio-buttons'>
                { choices && choices.map((choice)=>(
                    // list item, each list item have a unique key prop
                    <li key={choice}>
                        <input
                        // id and vlue keep track of what our form is recognizing 
                            id={choice}
                            value={choice}
                            name={label}
                            type="radio"
                            onChange={handleChange}
                            checked={checked == choice}
                        />
                        {choice}
                    </li>
                )
                )


                }
            </div>
        </div>

    )
}

export default RecipeChoices;
import React,{Component, useState} from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "../drinks.json";


const CoffeeForm = () =>{
    const temp_place = document.querySelector('.temp_place');
    const milk_place = document.querySelector('.milk_place');

    const onCheckAnswer = ()=>{
        console.log('trueRecipe.temp')
        console.log(trueRecipe.temp)
        console.log('trueRecipe.milk')
        console.log(trueRecipe.milk)     

        if (trueRecipe.temp != inputs['temperature']){
            setCheckedTemperature('wrong');
            temp_place.classList.remove('correct')
            temp_place.classList.add('wrong')
          }
        else {
            setCheckedTemperature("correct");
            temp_place.classList.remove('wrong')
            temp_place.classList.add('correct')
        }

        
        if (trueRecipe.milk != inputs['milk']){
            setCheckedMilk('wrong');
            milk_place.classList.remove('correct')
            milk_place.classList.add('wrong')
        }
        else {
            setCheckedMilk("correct");
            milk_place.classList.remove('wrong')
            milk_place.classList.add('correct')
        }

        // const correct_answer_place = document.querySelectorAll('#correct');
        // const wrong_answer_place = document.querySelectorAll('#wrong');
        // console.log('correct_answer_place')
        // console.log(correct_answer_place)  
        // console.log('wrong_answer_place')
        // console.log(wrong_answer_place)    

        // for (let i=0; i<correct_answer_place.length;i++){
        //     correct_answer_place[i].classList.add('correct')
        // }
        // for (let i=0; i<wrong_answer_place.length;i++){
        //     wrong_answer_place[i].classList.add('wrong')
        // }
    }

    const [correct_temp, setCheckedTemperature] = useState('');
    const [correct_syrup, setCheckedSyrup] = useState('');
    const [correct_milk, setCheckedMilk] = useState('');
    const [correct_blended, setCheckedBlended] = useState('');


    // const [currentDrink, setCurrentDrink] = useState(drinksJson.drinks[0].name)

    const [currentDrink, setCurrentDrink] = useState('')
    const [trueRecipe, setTrueRecipe] = useState({})

    const getNextDrink = () =>{
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        // console.log('drinksJson.drinks')
        // console.log(drinksJson.drinks)
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        // console.log('currentDrink')
        // console.log(currentDrink)
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
        // console.log('trueRecipe')
        // console.log(trueRecipe)

    }
    const onNewDrink = ()=>{
        setCheckedTemperature('');
        // setCheckedSyrup('');
        setCheckedMilk('');
        // setCheckedBlended('');

        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': '' });
            
        getNextDrink();
    }

    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
      
    })

    const ingredients = {
        'temperature' : ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }




    return (
        <div className="CoffeForm">
            <h2 className="order-text">Hi, I'd like to order a:</h2>

            <div className="drink-container">
                <h2 className="mini-header">{currentDrink}</h2>
                <button 
                type="new-drink-button" 
                className="button newdrink" 
                onClick={onNewDrink}>🔄</button>
            </div>


            <form className="container">
                <div className="mini-container">
                    <h3>Temperature</h3>
                    <div className="answer-space temp_place" id={correct_temp}>
                        {inputs['temperature']}
                    </div>
                    {/* <li>
                    <input
                        type="text"
                        // name={label}
                        // value={currentVal}
                        placeholder="Guess the ingredient..."
                        // onChange={handleChange}
                        // className = "textbox"
                    />
                    </li> */}
 

                    <RecipeChoices 
                    handleChange={(e)=>setInputs((prevState)=>({...prevState, [e.target.name]: e.target.value}))}
                    label='temperature'
                    choices={ingredients['temperature']}
                    checked={inputs['temperature']}
                    />
                </div>

                <div className="mini-container">
                    <h3>Milk</h3>
                    <div className="answer-space milk_place" id={correct_milk}>
                        {inputs['milk']}
                    </div>
                    <RecipeChoices 
                    // e is short for event
                    // e.target : the element (html) that triggered the event
                    // e.target.name=  the name attribute of the input field
                    // e.target.value: the value of the input field
                    handleChange={(e)=>setInputs((prevState)=>({...prevState, [e.target.name]: e.target.value}))}
                    label='milk'
                    choices={ingredients['milk']}
                    checked={inputs['milk']}
                    />
                </div>
            </form>

            <button type="submit" className="button submit" onClick={onCheckAnswer}>
                Check Answer
            </button>

            {/* <button type="new-drink-button" className="button submit" onClick={onNewDrink}>
                new Drink
            </button> */}
        </div>
    )
}

export default CoffeeForm;
import React,{Component, useState} from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "../drinks.json";


const CoffeeForm = () =>{
    const onCheckAnswer = ()=>{
        if (trueRecipe.temp != inputs['temperature']){
            setCheckedTemperature('wrong');
          }
          else {
            setCheckedTemperature("correct");
          }
        if (trueRecipe.milk != inputs['milk']){
            setCheckedMilk('wrong');
        }
        else {
            setCheckedMilk("correct");
        }
          
    }

    const [correct_temp, setCheckedTemperature] = useState('');
    const [correct_syrup, setCheckedSyrup] = useState('');
    const [correct_milk, setCheckedMilk] = useState('');
    const [correct_blended, setCheckedBlended] = useState('');


    const [currentDrink, setCurrentDrink] = useState(drinksJson.drinks[0].name)
    const [trueRecipe, setTrueRecipe] = useState({})

    const getNextDrink = () =>{
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);

    }
    const onNewDrink = ()=>{
        setCheckedTemperature('');
        setCheckedSyrup('');
        setCheckedMilk('');
        setCheckedBlended('');

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
            <h2>Hi, I'd like to order a:</h2>

            <div className="drink-container">
                <h2 className="mini-header">{currentDrink}</h2>
                <button 
                type="new-drink-button" 
                className="button newdrink" 
                onClick={onNewDrink}>🔄</button>
            </div>

            <h3>Temperature</h3>
            <div className="answer-space">
                {inputs['temperature']}
            </div>
            <RecipeChoices 
            handleChange={(e)=>setInputs((prevState)=>({...prevState, [e.target.name]: e.target.value}))}
            label='temperature'
            choices={ingredients['temperature']}
            checked={inputs['temperature']}
            />

            <h3>Milk</h3>
            <div className="answer-space">
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




            <form action="">

            </form>

            <button type="submit" className="button submit" onClick={onCheckAnswer}>
                CheckAnswer
            </button>

            <button type="new-drink-button" className="button submit" onClick={onNewDrink}>
                new Drink
            </button>
        </div>
    )
}

export default CoffeeForm;